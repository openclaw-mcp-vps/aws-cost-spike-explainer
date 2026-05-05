export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4 py-16">

      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AWS Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Explains exactly why your{" "}
          <span className="text-[#58a6ff]">AWS bill spiked</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 leading-relaxed">
          Stop guessing. Connect your AWS account and get a plain-English breakdown of every unexpected charge — down to the service, region, and root cause.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Get Access — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No AWS data stored.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Connect via AWS Cost Explorer API",
              "Automatic spike detection & root cause",
              "Plain-English explanations per service",
              "Region & usage-type breakdowns",
              "Monthly trend comparisons",
              "Email alerts on new spikes"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Start for $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it access my AWS billing data?",
              a: "You provide read-only AWS credentials scoped to Cost Explorer. We never store your credentials — they are used only during your session to fetch and analyze billing data."
            },
            {
              q: "What counts as a cost spike?",
              a: "We flag any service or usage type where spend increased more than 20% week-over-week or exceeded your historical average by more than one standard deviation. Thresholds are configurable."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your Lemon Squeezy customer portal with one click. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} AWS Cost Spike Explainer. Not affiliated with Amazon Web Services.
      </footer>
    </main>
  );
}
