import Image from "next/image";
import {
  BOOKING_SECTION_ID,
  FORM_SECTION_ID,
  IMAGES,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

const CHIPS = [
  "BrainsWay TMS",
  "Therapy & medication",
  "In-person & virtual",
] as const;

const TRUST_ITEMS = [
  { title: "Trusted care", subtitle: "Dedicated psychiatrist continuity" },
  { title: "Accessible options", subtitle: "Help with costs & coverage" },
  { title: "Flexible visits", subtitle: "Clinic + telepsychiatry" },
  { title: "Free consultation", subtitle: "No pressure to start" },
] as const;

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="jv-austin-hero">
      <div className="jv-austin-hero-bg" aria-hidden>
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="jv-austin-hero-img"
        />
      </div>
      <div className="jv-austin-hero-overlay" aria-hidden />

      <div className="jv-austin-hero-inner">
        <div className="container-main pb-6 pt-10 sm:pb-8 sm:pt-12 lg:pb-10 lg:pt-14">
          <div className="jv-austin-hero-copy jv-fade-up">
            <p className="jv-austin-tagline">Jovive Psychiatry</p>

            <h1 id="hero-heading" className="jv-austin-headline">
              <span className="jv-austin-headline-line">Empowering Minds,</span>
              <span className="jv-austin-headline-line">
                Embracing{" "}
                <span className="jv-austin-accent">Mental Health</span>
              </span>
            </h1>

            <p className="jv-austin-subhead">
              Personalized therapy, medication management, and BrainsWay TMS in
              person or virtually across California, Oregon, and New York.
            </p>

            <ul className="jv-austin-chips" aria-label="Care highlights">
              {CHIPS.map((chip) => (
                <li key={chip}>
                  <span className="jv-austin-chip">{chip}</span>
                </li>
              ))}
            </ul>

            <div className="jv-austin-ctas">
              <a href={`#${BOOKING_SECTION_ID}`} className="jv-austin-cta-primary">
                Book your Free Consultation
              </a>
              <a href={`#${FORM_SECTION_ID}`} className="jv-austin-cta-secondary">
                Find out if you Qualify
              </a>
              <a href={PHONE_HREF} className="jv-austin-cta-secondary">
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        <div className="jv-austin-trust-wrap" aria-label="Trust highlights">
          <div className="container-main pb-8 sm:pb-10">
            <ul className="jv-austin-trust-strip">
              {TRUST_ITEMS.map((item, index) => (
                <li key={item.title} className="jv-austin-trust-item">
                  {index > 0 ? (
                    <span className="jv-austin-trust-divider" aria-hidden />
                  ) : null}
                  <div className="jv-austin-trust-content">
                    <p className="jv-austin-trust-title">{item.title}</p>
                    <p className="jv-austin-trust-subtitle">{item.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
