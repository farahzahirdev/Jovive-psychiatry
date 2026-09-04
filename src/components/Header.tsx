"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BOOKING_SECTION_ID,
  FORM_SECTION_ID,
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#why-jovive", label: "Why Jovive" },
  { href: "#providers", label: "Providers" },
  { href: "#tms", label: "TMS" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`jv-header ${open ? "z-[70]" : ""}`}>
        <div className="jv-header-inner">
          <Link href="/" className="relative z-[80] shrink-0" onClick={close}>
            <Image
              src={LOGO_URL}
              alt="Jovive Psychiatry"
              width={220}
              height={28}
              className="h-8 w-auto sm:h-9"
              priority
            />
          </Link>

          <nav className="jv-header-nav" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="jv-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="jv-header-actions">
            <a
              href={PHONE_HREF}
              className="text-sm font-semibold text-ink-800 transition hover:text-brand-600"
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={`#${BOOKING_SECTION_ID}`}
              className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-600"
            >
              Book Free Consultation
            </a>
          </div>

          <button
            type="button"
            className="jv-nav-toggle relative z-[80]"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="jv-mobile-panel xl:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink-800 hover:bg-brand-50"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`#${BOOKING_SECTION_ID}`}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-3 text-sm font-bold text-white"
              onClick={close}
            >
              Book your Free Consultation
            </a>
            <a
              href={`#${FORM_SECTION_ID}`}
              className="inline-flex items-center justify-center rounded-full border border-brand-500 px-4 py-3 text-sm font-bold text-brand-600"
              onClick={close}
            >
              Find out if you Qualify
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full border border-ink-200 px-4 py-3 text-sm font-bold text-ink-800"
              onClick={close}
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        )}
      </header>

      {open && (
        <button
          type="button"
          className="jv-mobile-backdrop xl:hidden"
          aria-label="Close menu"
          onClick={close}
        />
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
