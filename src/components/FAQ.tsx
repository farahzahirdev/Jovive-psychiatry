"use client";

import { useId, useState } from "react";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { FAQ_ITEMS } from "@/lib/constants";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div id={panelId} className="faq-panel" role="region" aria-hidden={!open}>
        <div className="faq-panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="jv-section bg-warm-100" aria-labelledby="faq-heading">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div className="text-center lg:sticky lg:top-28 lg:text-left">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem]">
              Questions, answered clearly
            </h2>
            <p className="text-lead mt-4">
              Straightforward answers about consultations, TMS, insurance, and
              telepsychiatry, with no guarantees of outcomes.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <BookButton />
              <CallButton />
            </div>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
