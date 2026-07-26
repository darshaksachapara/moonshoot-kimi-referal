import { useState } from 'react';
import { faqs } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading 
          title="Frequently asked questions" 
          centered
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "border rounded-xl transition-colors overflow-hidden",
                  isOpen ? "bg-slate-900 border-cyan-900/50" : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                )}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-semibold text-slate-200">{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-slate-500 transition-transform duration-300",
                      isOpen && "rotate-180 text-cyan-400"
                    )} 
                  />
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
