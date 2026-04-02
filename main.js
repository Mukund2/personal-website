document.addEventListener('DOMContentLoaded', () => {
  const hub = document.getElementById('hub');
  const panels = document.querySelectorAll('.panel');
  const links = document.querySelectorAll('.hub-link');
  const backButtons = document.querySelectorAll('.panel-back');

  function openPanel(id) {
    const panel = document.getElementById(id);
    if (!panel) return;
    hub.classList.add('dimmed');
    panel.classList.add('active');
    panel.scrollTop = 0;
    history.replaceState(null, '', '#' + id);
  }

  function closePanel() {
    panels.forEach(p => p.classList.remove('active'));
    hub.classList.remove('dimmed');
    history.replaceState(null, '', window.location.pathname);
  }

  // Hub links
  links.forEach(link => {
    link.addEventListener('click', () => openPanel(link.dataset.panel));
  });

  // Panel back buttons
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
