export default function Stats() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="kicker">01 — What we do</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.02] tracking-tight">
              A team with a combined audience of{" "}
              <span className="text-coral-deep">2M+</span>.
            </h2>
          </div>

          <div className="md:col-span-8 md:pl-8 md:border-l border-line">
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft max-w-[58ch]">
              We don&apos;t just make video — we understand distribution. Between
              the people on our team, we&apos;ve grown audiences, run accounts, and
              shipped content that lives on the feed every day. That taste shows
              up in the work we deliver for our clients.
            </p>

            <dl className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
              <Stat kicker="Across our team" value="2M+" label="followers" />
              <Stat kicker="Platform-native" value="50M+" label="organic views" />
              <Stat kicker="Ship cadence" value="48h" label="first-cut turnaround" />
              <Stat kicker="Startup clients" value="12+" label="founders backed" />
              <Stat kicker="Formats" value="9:16" label="built for short-form" />
              <Stat kicker="Base of ops" value="SF" label="shoots nationwide" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  kicker,
  value,
  label,
}: {
  kicker: string;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="kicker">{kicker}</span>
      <span className="font-display text-[2.25rem] md:text-[2.5rem] leading-none tracking-tight">
        {value}
      </span>
      <span className="text-sm text-warm">{label}</span>
    </div>
  );
}
