import {
  BOOKING_SECTION_ID,
  FORM_SECTION_ID,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

type ButtonVariant = "primary" | "secondary" | "outline" | "accent" | "hero";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition duration-200 sm:px-7 sm:text-[0.95rem]";

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_10px_28px_-14px_rgba(244,123,32,0.7)] hover:bg-brand-600",
  secondary:
    "bg-ink-800 text-white hover:bg-ink-700",
  outline:
    "border border-brand-500 text-brand-600 hover:bg-brand-50",
  accent:
    "bg-white text-ink-800 shadow-[0_10px_28px_-14px_rgba(0,0,0,0.35)] hover:bg-brand-50",
  hero: "border border-white/40 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
};

export function BookButton({ variant = "primary", className = "" }: ButtonProps) {
  return (
    <a
      href={`#${BOOKING_SECTION_ID}`}
      className={`${base} ${styles[variant]} ${className}`}
    >
      Book your Free Consultation
    </a>
  );
}

export function QualifyButton({
  variant = "outline",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={`#${FORM_SECTION_ID}`}
      className={`${base} ${styles[variant]} ${className}`}
    >
      Find out if you Qualify
    </a>
  );
}

export function CallButton({ variant = "outline", className = "" }: ButtonProps) {
  return (
    <a
      href={PHONE_HREF}
      className={`${base} gap-2 ${styles[variant]} ${className}`}
    >
      <PhoneIcon />
      Call {PHONE_NUMBER}
    </a>
  );
}

function PhoneIcon() {
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
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
