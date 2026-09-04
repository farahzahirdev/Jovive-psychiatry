import Image from "next/image";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { PROVIDERS } from "@/lib/constants";

export default function Providers() {
  return (
    <section
      id="providers"
      className="jv-section bg-gradient-to-b from-warm-100 via-warm-50 to-white"
      aria-labelledby="providers-heading"
    >
      <div className="container-main">
        <div className="jv-section-header jv-fade-up">
          <p className="section-eyebrow">Our team</p>
          <h2
            id="providers-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]"
          >
            Meet our providers
          </h2>
          <p className="text-lead mt-4">
            Experienced psychiatrists dedicated to compassionate, personalized care —
            in clinic and through telepsychiatry.
          </p>
        </div>
      </div>

      {/* Mobile / tablet: horizontal scroll cards */}
      <div className="jv-providers-scroll mt-12 lg:hidden">
        <ul className="jv-providers-track">
          {PROVIDERS.map((provider) => (
            <li key={provider.name} className="jv-providers-card">
              <div className="relative mx-auto w-full max-w-[168px]">
                <div
                  className="absolute -inset-2 -z-10 rounded-[1.35rem] bg-brand-200/40 blur-md"
                  aria-hidden
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-white shadow-[0_18px_40px_-24px_rgba(24,18,51,0.45)] ring-1 ring-brand-100">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-cover object-top"
                    sizes="168px"
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2 text-center">
                <div className="mx-auto h-px w-12 bg-brand-400" aria-hidden />
                <h3 className="text-xl leading-snug">{provider.name}</h3>
                <p className="text-sm font-bold tracking-wide text-brand-600">
                  {provider.role}
                </p>
                <p className="text-sm leading-relaxed text-ink-500">
                  {provider.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: alternating portrait rows */}
      <div className="container-main mt-14 hidden lg:block">
        <ul className="space-y-12">
          {PROVIDERS.map((provider, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <li
                key={provider.name}
                className={`jv-fade-up flex flex-row items-center gap-12 ${
                  imageFirst ? "" : "flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative w-full max-w-[200px] shrink-0">
                  <div
                    className={`absolute -inset-2 -z-10 rounded-[1.35rem] bg-brand-200/40 blur-md ${
                      imageFirst ? "-rotate-2" : "rotate-2"
                    }`}
                    aria-hidden
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-white shadow-[0_18px_40px_-24px_rgba(24,18,51,0.45)] ring-1 ring-brand-100">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>
                </div>

                <div
                  className={`max-w-xl flex-1 space-y-3 ${
                    imageFirst ? "text-left" : "text-right"
                  }`}
                >
                  <div
                    className={`h-px w-12 bg-brand-400 ${
                      imageFirst ? "" : "ml-auto"
                    }`}
                    aria-hidden
                  />
                  <h3 className="text-[1.7rem]">{provider.name}</h3>
                  <p className="text-base font-bold tracking-wide text-brand-600">
                    {provider.role}
                  </p>
                  <p className="text-[1.05rem] leading-relaxed text-ink-500">
                    {provider.bio}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container-main mt-14 flex flex-col items-center justify-center gap-3 border-t border-brand-100 pt-10 sm:flex-row">
        <BookButton />
        <CallButton />
      </div>
    </section>
  );
}
