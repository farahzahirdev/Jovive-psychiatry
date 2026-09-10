import Image from "next/image";
import {
  LOGO_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  PRIVACY_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/40 bg-ink-800 text-white">
      <div className="container-main grid gap-10 py-14 text-center md:grid-cols-3 md:text-left">
        <div className="md:col-span-1">
          <Image
            src={LOGO_URL}
            alt="Jovive Psychiatry"
            width={240}
            height={31}
            className="mx-auto h-9 w-auto brightness-0 invert md:mx-0"
          />
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink-200 md:mx-0">
            Personalized mental health care with therapy, medication management, and
            BrainsWay TMS, empowering minds toward comprehensive well-being.
          </p>
        </div>

        <div>
          <p className="font-display text-lg text-white">Contact</p>
          <div className="mt-3 space-y-2 text-sm text-ink-200">
            <p>
              <a href={PHONE_HREF} className="transition-colors hover:text-brand-300">
                {PHONE_NUMBER}
              </a>
            </p>
            <p>Pleasant Hill · Solana Beach · Telepsychiatry</p>
            <p>California · Oregon · New York</p>
          </div>
        </div>

        <div>
          <p className="font-display text-lg text-white">Privacy & Consent</p>
          <nav className="mt-3 flex flex-col items-center gap-2 text-sm text-ink-200 md:items-start" aria-label="Privacy and consent">
            {PRIVACY_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col gap-2 py-5 text-center text-xs text-ink-300 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Jovive Psychiatry. Part of Vituity. For
            informational purposes only, not a guarantee of outcomes.
          </p>
          <p className="sm:text-right">HIPAA-conscious care · Empowering Minds, Embracing Mental Health</p>
        </div>
      </div>
    </footer>
  );
}
