"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { VALUE_PROPS } from "@/lib/constants";

const AUTO_MS = 5500;

export default function WhyJovive() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = VALUE_PROPS[active];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % VALUE_PROPS.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      id="why-jovive"
      className="jv-section bg-warm-50"
      aria-labelledby="why-heading"
    >
      <div className="container-main">
        <div className="jv-section-header jv-fade-up">
          <p className="section-eyebrow">Why Jovive</p>
          <h2
            id="why-heading"
            className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]"
          >
            Care that meets you where you are
          </h2>
          <p className="text-lead mt-4">
            Warm, stigma-free support with flexible in-person and telepsychiatry options,
            built around continuity, clarity, and sustainable progress.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton />
            <CallButton />
          </div>
        </div>

        <div
          className="jv-fade-up mt-12 overflow-hidden rounded-[1.5rem] border border-ink-100 bg-white shadow-[0_20px_50px_-28px_rgba(24,18,51,0.28)] lg:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div
            id="why-panel"
            role="tabpanel"
            aria-labelledby={`why-tab-${active}`}
            className="relative min-h-[28rem] w-full overflow-hidden bg-ink-100 sm:min-h-[32rem] lg:min-h-[36rem]"
          >
            {VALUE_PROPS.map((prop, index) => (
              <Image
                key={prop.image}
                src={prop.image}
                alt={prop.imageAlt}
                fill
                quality={92}
                priority={index === 0}
                className={`object-cover object-[78%_center] transition-opacity duration-700 ease-out ${
                  index === active ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 1120px"
              />
            ))}

            {/* Same left wash as the earlier heading-on-image treatment */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-transparent sm:via-white/80 lg:w-[58%]"
              aria-hidden
            />

            <div
              className="relative z-10 flex h-full min-h-[28rem] items-center px-6 py-12 sm:min-h-[32rem] sm:px-10 sm:py-14 lg:min-h-[36rem] lg:px-14"
              aria-live="polite"
            >
              <div key={active} className="why-point-copy mx-auto max-w-md text-center lg:mx-0 lg:max-w-lg lg:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">
                  0{active + 1}
                </p>
                <h3 className="mt-3 text-3xl text-ink-800 sm:text-4xl lg:text-[2.5rem]">
                  {current.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
                  {current.description}
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 sm:bottom-6 sm:right-6"
              aria-hidden
            >
              {VALUE_PROPS.map((_, index) => (
                <span
                  key={index}
                  className={`block rounded-full transition-all duration-500 ${
                    index === active
                      ? "h-2 w-6 bg-brand-500"
                      : "h-2 w-2 bg-ink-800/25"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            className="grid gap-1 border-t border-ink-100 bg-warm-50/80 p-2 sm:grid-cols-2 lg:grid-cols-4"
            role="tablist"
            aria-label="Why choose Jovive"
          >
            {VALUE_PROPS.map((prop, index) => {
              const isActive = index === active;
              return (
                <button
                  key={prop.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="why-panel"
                  id={`why-tab-${index}`}
                  className={`relative overflow-hidden rounded-xl px-4 py-3.5 text-left transition duration-200 ${
                    isActive
                      ? "bg-white font-bold text-ink-800 shadow-sm ring-1 ring-brand-200"
                      : "text-ink-500 hover:bg-white/80 hover:text-ink-800"
                  }`}
                  onClick={() => setActive(index)}
                >
                  {isActive && !paused ? (
                    <span
                      className="why-tab-progress absolute inset-x-0 top-0 h-0.5 origin-left bg-brand-500"
                      style={{ animationDuration: `${AUTO_MS}ms` }}
                    />
                  ) : isActive ? (
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-brand-500" />
                  ) : null}
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-500">
                    0{index + 1}
                  </span>
                  <span className="mt-1 block text-sm leading-snug">{prop.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
