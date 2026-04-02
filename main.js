document.addEventListener('DOMContentLoaded', () => {
  const hub = document.getElementById('hub');
  const panels = document.querySelectorAll('.panel');
  const links = document.querySelectorAll('.hub-link');
  const backButtons = document.querySelectorAll('.panel-back');

  const directions = ['left', 'right', 'up', 'down'];

  function randomDirection(exclude) {
    const available = directions.filter(d => d !== exclude);
    return available[Math.floor(Math.random() * available.length)];
  }

  function openPanel(id) {
    const panel = document.getElementById(id);
    if (!panel) return;

    // Random exit direction for hub postcard
    const exitDir = directions[Math.floor(Math.random() * directions.length)];
    const inner = hub.querySelector('.hub-inner');
    inner.style.animation = `postcardOut-${exitDir} 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards`;

    // Panel-specific entry animations
    const cards = panel.querySelectorAll('.postcard, .writing-card, .connect-postcard');
    const delay = 0.04; // Very fast stagger

    const panelAnimations = {
      writing: (card, i) => {
        // Alternates: left, right, left
        const fromLeft = i % 2 === 0;
        return fromLeft ? 'translateX(-150px) rotate(-3deg)' : 'translateX(150px) rotate(3deg)';
      },
      experience: (card, i) => {
        // All slide down from top, staggered
        return `translateY(-150px) rotate(${i % 2 === 0 ? -2 : 2}deg)`;
      },
      connect: (card, i) => {
        // X comes first from center/top, LinkedIn and GitHub split out left and right
        if (i === 0) return 'translateY(-100px) scale(0.8)';
        if (i === 1) return 'translateX(-150px) rotate(-5deg)';
        return 'translateX(150px) rotate(5deg)';
      }
    };

    const getEntryTransform = panelAnimations[id] || ((card, i) => 'translateY(-120px) rotate(-3deg)');

    cards.forEach((card, i) => {
      card.style.transform = getEntryTransform(card, i);
      card.style.opacity = '0';
      card.style.transition = 'none';

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          card.style.transition = `opacity 0.4s ease ${i * delay}s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${i * delay}s`;
          card.style.transform = card.classList.contains('postcard-tilted') ? 'rotate(-0.6deg)' :
                                  card.classList.contains('postcard-tilt-right') ? 'rotate(0.8deg)' :
                                  card.classList.contains('postcard-tilt-slight') ? 'rotate(-0.3deg)' :
                                  'rotate(0deg)';
          card.style.opacity = '1';
        });
      });
    });

    hub.classList.add('dimmed');
    panel.classList.add('active');
    panel.scrollTop = 0;
    history.replaceState(null, '', '#' + id);
  }

  function closePanel() {
    const activePanel = document.querySelector('.panel.active');
    if (activePanel) {
      const panelId = activePanel.id;
      const cards = activePanel.querySelectorAll('.postcard, .writing-card, .connect-postcard');
      const delay = 0.03;

      // Panel-specific exit animations (reverse of how they came in)
      const exitAnimations = {
        writing: (card, i) => {
          // Go back the way they came: left cards go left, right cards go right
          const toLeft = i % 2 === 0;
          return toLeft ? 'translateX(-150px) rotate(-3deg)' : 'translateX(150px) rotate(3deg)';
        },
        experience: (card, i) => {
          // All go up, one at a time starting from left (i=0 is leftmost)
          return `translateY(-150px) rotate(${i % 2 === 0 ? -2 : 2}deg)`;
        },
        connect: (card, i) => {
          // Reverse: LinkedIn goes left, GitHub goes right, X goes up last
          if (i === 1) return 'translateX(-150px) rotate(-5deg)';
          if (i === 2) return 'translateX(150px) rotate(5deg)';
          return 'translateY(-100px) scale(0.8)';
        }
      };

      const getExitTransform = exitAnimations[panelId] || ((card, i) => 'translateY(-120px) rotate(-3deg)');

      cards.forEach((card, i) => {
        card.style.transition = `opacity 0.35s ease ${i * delay}s, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${i * delay}s`;
        card.style.transform = getExitTransform(card, i);
        card.style.opacity = '0';
      });

      // After cards animate out, remove panel and bring hub back in
      setTimeout(() => {
        panels.forEach(p => {
          p.classList.remove('active');
          p.querySelectorAll('.accordion-item.open').forEach(item => item.classList.remove('open'));
          p.querySelectorAll('.item-row-expandable.open').forEach(item => item.classList.remove('open'));
          p.querySelectorAll('.postcard, .writing-card, .connect-postcard').forEach(card => {
            card.style.transform = '';
            card.style.opacity = '';
            card.style.transition = '';
          });
        });

        hub.classList.remove('dimmed');
        // Animate hub postcard back in from a random direction
        const hubInner = hub.querySelector('.hub-inner');
        const returnDir = directions[Math.floor(Math.random() * directions.length)];
        const returnTransforms = {
          left: 'translateX(-150px) rotate(-4deg)',
          right: 'translateX(150px) rotate(4deg)',
          up: 'translateY(-150px) rotate(-3deg)',
          down: 'translateY(150px) rotate(3deg)'
        };
        hubInner.style.animation = 'none';
        hubInner.style.transform = returnTransforms[returnDir];
        hubInner.style.opacity = '0';
        hubInner.offsetHeight;
        hubInner.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease';
        hubInner.style.transform = 'rotate(-0.6deg)';
        hubInner.style.opacity = '1';

        setTimeout(() => {
          hubInner.style.transition = '';
          hubInner.style.transform = '';
          hubInner.style.opacity = '';
        }, 550);

        history.replaceState(null, '', window.location.pathname);
      }, 400);
    } else {
      hub.classList.remove('dimmed');
      history.replaceState(null, '', window.location.pathname);
    }
  }

  links.forEach(link => {
    link.addEventListener('click', () => openPanel(link.dataset.panel));
  });

  backButtons.forEach(btn => {
    btn.addEventListener('click', closePanel);
  });

  // Accordion toggles
  document.querySelectorAll('.accordion-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.parentElement;
      item.classList.toggle('open');
      toggle.blur();
    });
  });

  // Poster expand toggles
  document.querySelectorAll('.item-row-top').forEach(top => {
    top.addEventListener('click', () => {
      const item = top.parentElement;
      item.classList.toggle('open');
      if (item.classList.contains('open')) {
        setTimeout(() => {
          item.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
  });

  // Hash navigation on load
  const hash = window.location.hash.slice(1);
  if (hash && document.getElementById(hash)) {
    openPanel(hash);
  }
});
