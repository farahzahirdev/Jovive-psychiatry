import { BookButton, CallButton, QualifyButton } from "@/components/CTAButtons";

export default function FinalCTA() {
  return (
    <section
      className="relative bg-warm-50 pb-16 pt-6 sm:pb-20 sm:pt-8"
      aria-labelledby="final-cta-heading"
    >
      <div className="container-main">
        <div
          className="relative overflow-hidden rounded-[1.75rem] px-6 py-14 text-center shadow-[0_28px_60px_-28px_rgba(244,123,32,0.55)] sm:px-10 sm:py-16 lg:px-16"
          style={{
            background:
              "linear-gradient(135deg, #ff9a42 0%, #f47b20 42%, #e56a12 72%, #be5010 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 12% 18%, rgba(255,255,255,0.28), transparent 55%), radial-gradient(ellipse 50% 60% at 92% 82%, rgba(24,18,51,0.16), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">
              Ready when you are
            </p>
            <h2
              id="final-cta-heading"
              className="mt-3 text-3xl !text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Take the next step toward well-being
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
              Book a free consultation, see if TMS may be right for you, or call our
              team. Warm guidance, no pressure.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <BookButton variant="accent" />
              <QualifyButton variant="hero" />
              <CallButton variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
