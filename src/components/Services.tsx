import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="jv-section bg-white" aria-labelledby="services-heading">
      <div className="container-main">
        <div className="jv-section-header jv-fade-up">
          <p className="section-eyebrow">How we can help</p>
          <h2 id="services-heading" className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Care that fits your life
          </h2>
          <p className="text-lead mt-4">
            Three paths toward well-being — tailored to your needs, goals, and schedule.
          </p>
        </div>

        <div className="mt-14 divide-y divide-ink-100 border-y border-ink-100">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="jv-fade-up grid gap-4 py-8 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:items-center sm:gap-8"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span
                className="font-display text-3xl text-brand-300 sm:text-4xl"
                aria-hidden
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl sm:text-[1.65rem]">{service.title}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-500">
                  {service.benefit}
                </p>
              </div>
              <a
                href={service.href}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition hover:text-brand-700 sm:justify-self-end"
              >
                {service.cta}
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}
