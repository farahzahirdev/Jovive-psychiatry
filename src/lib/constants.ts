export const LOGO_URL = "/images/logo-dark.svg";

export const IMAGES = {
  hero: "/images/why-jovive.png",
  whyJovive: "/images/why-jovive.png",
  why1: "/images/why-1.png",
  why2: "/images/why-2.png",
  why3: "/images/why-3.png",
  services: "/images/services.webp",
  analytics: "/images/analytics.webp",
  forms: "/images/forms.webp",
  iconTrusted: "/images/icon-trusted.webp",
  iconAccessible: "/images/icon-accessible.webp",
  iconProactive: "/images/icon-proactive.webp",
  iconCare: "/images/icon-care.png",
  iconVirtual: "/images/icon-virtual.png",
  vituity: "/images/vituity-jovive.svg",
} as const;

export const PHONE_NUMBER = "(925) 248-3432";
export const PHONE_HREF = "tel:+19252483432";

export const SITE_URL = "https://jovivepsychiatry.com";

export const BOOKING_SECTION_ID = "book-consultation";
export const FORM_SECTION_ID = "qualify-form";

export const FORM_ID = "228za864wtsDzbDpyXqA";
export const FORM_IFRAME_ID = "inline-228za864wtsDzbDpyXqA";
export const FORM_SRC = `https://go.4tms.com/widget/form/${FORM_ID}`;

export const CALENDAR_SRC = "https://go.4tms.com/widget/booking/FY0xpK6UpY9PObE7rddu";
export const CALENDAR_IFRAME_ID = "jovive-booking-calendar";

export const LOCATIONS = [
  {
    name: "Pleasant Hill, CA",
    address: "2675 Pleasant Hill Rd, Pleasant Hill, CA 94523",
    detail: "In-person psychiatry, therapy, and BrainsWay TMS",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2675+Pleasant+Hill+Rd,+Pleasant+Hill,+CA+94523",
  },
  {
    name: "Solana Beach, CA",
    address: "462 Stevens Ave, Suite 310, Solana Beach, CA 92075",
    detail: "In-person psychiatry, therapy, and medication management",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=462+Stevens+Ave+Suite+310,+Solana+Beach,+CA+92075",
  },
  {
    name: "Telepsychiatry",
    address: "California · Oregon · New York",
    detail: "Secure virtual visits from the comfort of home",
    mapsUrl: null,
  },
] as const;

export const SERVICES = [
  {
    id: "tms",
    title: "TMS Therapy",
    benefit:
      "Non-invasive BrainsWay TMS for depression and related conditions, without systemic medication side effects.",
    href: `#${BOOKING_SECTION_ID}`,
    cta: "Book your Free Consultation",
  },
  {
    id: "medication",
    title: "Medication Management",
    benefit:
      "Ongoing, personalized psychiatric medication care with a dedicated provider who knows your history.",
    href: `#${FORM_SECTION_ID}`,
    cta: "Find out if you Qualify",
  },
  {
    id: "therapy",
    title: "Therapy & Counseling",
    benefit:
      "Supportive, tailored talk therapy that fits your goals, lifestyle, and path toward well-being.",
    href: `#${FORM_SECTION_ID}`,
    cta: "Find out if you Qualify",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Flexible Options",
    description:
      "In-person visits in California and telepsychiatry across California, Oregon, and New York.",
    image: "/images/hero.png",
    imageAlt: "Warm, hopeful moment with flexible in-person and virtual care",
  },
  {
    title: "Trusted Care",
    description:
      "Consistent appointments with your dedicated psychiatrist, fostering continuity, trust, and collaborative support.",
    image: IMAGES.why1,
    imageAlt: "Patient smiling during a calm moment at home",
  },
  {
    title: "Accessible Care",
    description:
      "Straightforward guidance on options, costs, and coverage so you can move forward with confidence.",
    image: IMAGES.why2,
    imageAlt: "Adult exploring care options on a phone",
  },
  {
    title: "Proactive Mental Health",
    description:
      "Early intervention and lifestyle-integrated plans designed for sustainable well-being, not just crisis response.",
    image: IMAGES.why3,
    imageAlt: "Thoughtful adult reflecting on next steps in care",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Who is Jovive Psychiatry for?",
    answer:
      "Adults seeking support for depression, anxiety, ADHD, OCD, PTSD, bipolar disorder, and related concerns. We offer therapy, medication management, and BrainsWay TMS at our Pleasant Hill location. Care is available in person or via telepsychiatry in California, Oregon, and New York.",
  },
  {
    question: "How do I book a free consultation?",
    answer:
      "Use the booking calendar on this page, call (925) 248-3432, or submit the inquiry form. A free consultation is a chance to discuss your goals and options. It does not guarantee a specific treatment or outcome.",
  },
  {
    question: "What is TMS, and who might it help?",
    answer:
      "TMS (Transcranial Magnetic Stimulation) is a non-invasive, outpatient treatment that uses magnetic pulses to stimulate areas of the brain involved in mood regulation. It may be considered when medications and/or therapy have not brought enough relief. Eligibility is determined through a clinical evaluation; individual results vary.",
  },
  {
    question: "Where is TMS offered?",
    answer:
      "BrainsWay TMS is currently offered at our Pleasant Hill, California location. If you are exploring TMS, our team can help you understand next steps, including evaluation and scheduling.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Insurance participation varies by location. Contracted insurance is currently accepted at Pleasant Hill; Solana Beach and telepsychiatry also offer clear cash-pay options. Our team can help you understand coverage, costs, and what to expect before you begin.",
  },
] as const;

export const PROVIDERS = [
  {
    name: "Roshanak Ramezani, MD",
    role: "Psychiatrist",
    image: "/images/provider-ramezani.webp",
    bio: "Trained in acute care, substance use, HIV psychiatry, and geriatric psychiatry, delivering culturally sensitive care for patients and families.",
  },
  {
    name: "Herbert Harman, MD",
    role: "Psychiatrist",
    image: "/images/provider-harman.webp",
    bio: "More than a decade across inpatient, outpatient, and emergency psychiatry. Helped launch Vituity’s telepsychiatry practice line.",
  },
  {
    name: "Emily Whisler, DO",
    role: "Psychiatrist",
    image: "/images/provider-whisler.webp",
    bio: "Evidence-based medication management plus individualized therapy, with fellowship training in child and adolescent psychiatry at Stanford.",
  },
  {
    name: "Abi Reddy, MD",
    role: "Psychiatrist",
    image: "/images/provider-reddy.webp",
    bio: "Board-certified in adult and child & adolescent psychiatry, committed to thoughtful, patient-centered care across the lifespan.",
  },
  {
    name: "Nasrat Wahidi, MD",
    role: "Psychiatrist · Regional Director",
    image: "/images/provider-wahidi.jpg",
    bio: "Board-certified neuropsychiatrist with experience in interventional psychiatry and TMS, advancing evidence-based behavioral care.",
  },
] as const;

export const PRIVACY_LINKS = [
  {
    label: "Patient Consent & Telehealth Consent",
    href: "https://jovivepsychiatry.com/wp-content/uploads/2025/06/2025-Jovive-Psychiatry-Patient-Consent-Telehealth-Consent-and-NPP.pdf",
  },
  {
    label: "Notice of Nondiscrimination",
    href: "https://jovivepsychiatry.com/wp-content/uploads/2024/04/1557-Vituity-Notice-of-Nondiscrimination-JOVIVE-PSYCHIATRY-01.30.24.pdf",
  },
  {
    label: "Notice of Privacy Practices",
    href: "https://jovivepsychiatry.com/wp-content/uploads/2024/12/COMP-TEM-211-NPP-Notice-of-Privacy-Practices-Psychiatry.pdf",
  },
  {
    label: "Good Faith Estimate Notice",
    href: "https://jovivepsychiatry.com/good-faith-estimate-notice/",
  },
  {
    label: "Website Privacy Policy",
    href: "https://jovivepsychiatry.com/website-privacy-policy",
  },
  {
    label: "CCPA Privacy Policy",
    href: "https://jovivepsychiatry.com/ccpa-privacy-policy",
  },
] as const;
