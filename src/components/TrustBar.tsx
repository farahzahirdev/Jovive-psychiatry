import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-20"
      aria-label="About Vituity"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 0% 50%, rgba(244, 123, 32, 0.07), transparent 60%), radial-gradient(ellipse 40% 60% at 100% 40%, rgba(24, 18, 51, 0.04), transparent 55%)",
        }}
      />

      <div className="container-main relative">
        <div className="jv-fade-up grid items-center gap-10 border-l-2 border-brand-500 pl-6 sm:pl-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <Image
            src={IMAGES.vituity}
            alt="Vituity and Jovive"
            width={420}
            height={80}
            className="h-12 w-auto max-w-full sm:h-14"
          />
          <div>
            <p className="section-eyebrow">Partnership</p>
            <h2 className="mt-3 text-2xl sm:text-3xl">Part of Vituity</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Jovive Psychiatry is part of Vituity, a physician-owned and -led
              multispecialty partnership. For 50 years, Vituity has raised the
              standard of care — with 8,000+ clinicians serving millions of
              patients nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
