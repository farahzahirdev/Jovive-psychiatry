import { LOCATIONS } from "@/lib/constants";

export default function Locations() {
  return (
    <section
      id="locations"
      className="jv-section bg-white"
      aria-labelledby="locations-heading"
    >
      <div className="container-main">
        <div className="jv-section-header jv-fade-up">
          <p className="section-eyebrow">Where we serve</p>
          <h2 id="locations-heading" className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">
            Locations & telehealth
          </h2>
          <p className="text-lead mt-4">
            In-person care in California, plus telepsychiatry across California, Oregon,
            and New York.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {LOCATIONS.map((location, index) => (
            <div
              key={location.name}
              className="jv-fade-up border-t-2 border-brand-500 pt-6"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <h3 className="text-2xl">{location.name}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-500">
                {location.detail}
              </p>
              {location.mapsUrl ? (
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm font-medium text-ink-600 transition hover:text-brand-600"
                >
                  {location.address}
                </a>
              ) : (
                <p className="mt-3 text-sm font-medium text-ink-600">{location.address}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
