"use client";

import Script from "next/script";
import { useEffect } from "react";
import { CallButton } from "@/components/CTAButtons";
import {
  BOOKING_SECTION_ID,
  CALENDAR_IFRAME_ID,
  CALENDAR_SRC,
  FORM_SECTION_ID,
  LOCATIONS,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

function parseEmbedHeight(data: unknown): number | null {
  if (typeof data === "number" && data > 0) return data;

  if (typeof data === "string") {
    const match = data.match(/height[:=]\s*(\d+)/i);
    if (match) return Number(match[1]);
  }

  if (typeof data === "object" && data !== null) {
    const payload = data as Record<string, unknown>;
    if (typeof payload.height === "number" && payload.height > 0) return payload.height;
    if (typeof payload.frameHeight === "number" && payload.frameHeight > 0) {
      return payload.frameHeight;
    }
  }

  return null;
}

export default function BookingCalendar() {
  useEffect(() => {
    const resizeIframe = (height: number) => {
      const iframe = document.getElementById(
        CALENDAR_IFRAME_ID
      ) as HTMLIFrameElement | null;
      if (iframe) iframe.style.height = `${height}px`;
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("4tms.com")) return;
      const height = parseEmbedHeight(event.data);
      if (height) resizeIframe(height);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section
      id={BOOKING_SECTION_ID}
      className="jv-section bg-brand-50"
    >
      <div className="container-main">
        <div className="embed-layout">
          <div className="space-y-5 text-center lg:sticky lg:top-28 lg:text-left">
            <div>
              <p className="section-eyebrow justify-center lg:justify-start">
                Free consultation
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">
                Book your Free Consultation
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-500 lg:mx-0">
                Pick a time that works for you. No obligation, just a conversation about
                the care path that fits your life.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm text-ink-400 lg:mx-0">
                Prefer to talk first? Call{" "}
                <a
                  href={PHONE_HREF}
                  className="font-bold text-brand-600 transition hover:text-brand-700"
                >
                  {PHONE_NUMBER}
                </a>
                .
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <CallButton />
            </div>

            <ul className="contact-list text-left">
              {LOCATIONS.map((location) => (
                <li key={location.name}>
                  {location.mapsUrl ? (
                    <a
                      href={location.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item group"
                    >
                      <span className="contact-icon">
                        <PinIcon />
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-wider text-brand-600">
                          {location.name}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium leading-relaxed text-ink-800 group-hover:text-brand-600">
                          {location.address}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="contact-item">
                      <span className="contact-icon">
                        <PinIcon />
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-wider text-brand-600">
                          {location.name}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium leading-relaxed text-ink-800">
                          {location.address}
                        </span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <p className="text-sm text-ink-500">
              Curious about TMS?{" "}
              <a
                href={`#${FORM_SECTION_ID}`}
                className="font-bold text-brand-600 transition hover:text-brand-700"
              >
                Find out if you Qualify
              </a>
            </p>
          </div>

          <div className="embed-panel min-w-0">
            <iframe
              src={CALENDAR_SRC}
              allow="payment"
              style={{
                width: "100%",
                height: "720px",
                border: "none",
                overflow: "hidden",
                display: "block",
                background: "transparent",
              }}
              scrolling="no"
              id={CALENDAR_IFRAME_ID}
              title="Book a free consultation with Jovive Psychiatry"
            />
          </div>
        </div>
      </div>
      <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.08 19.08 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.08 19.08 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
