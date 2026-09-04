import Image from "next/image";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import { IMAGES } from "@/lib/constants";

export default function TmsSpotlight() {
  return (
    <section id="tms" className="jv-section bg-ink-800 text-white" aria-labelledby="tms-heading">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="jv-fade-up relative order-2 aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:order-1">
            <Image
              src={IMAGES.analytics}
              alt="Patient reviewing treatment options with a care team"
              fill
              quality={92}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="jv-fade-up order-1 lg:order-2">
            <p className="section-eyebrow !text-brand-300">BrainsWay TMS</p>
            <h2 id="tms-heading" className="mt-3 text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
              A non-invasive option when depression needs a new path
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-200">
              Transcranial Magnetic Stimulation uses targeted magnetic pulses to stimulate
              areas of the brain involved in mood regulation. Sessions are outpatient,
              require no anesthesia, and may help when medications or therapy alone
              haven&apos;t brought enough relief. BrainsWay TMS is currently offered at our
              Pleasant Hill location.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              Individual results vary. Eligibility is determined through a clinical
              evaluation — with no pressure and no guarantees of outcomes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <QualifyButton variant="accent" />
              <CallButton variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
