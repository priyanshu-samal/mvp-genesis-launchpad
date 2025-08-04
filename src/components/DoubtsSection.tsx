import React, { useState } from "react";

const faqs = [
  {
    question: "How fast will I receive my MVP?",
    answer:
      "Most MVPs are delivered in 3–4 weeks. Once we finalize your scope, you'll get a clear timeline. We work fast, but never at the cost of quality, and you'll see progress every step of the way.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Once you book a call and we decide to move forward, we kick off with a discovery session to deeply understand your idea. Within 48 hours, you get a clear feature breakdown, suggested tech stack, and timeline. Then we begin building.",
  },
  {
    question: "Who builds the MVP?",
    answer:
      "Your MVP is built by experienced developers. No outsourcing, no middle layers. You work directly with the people writing your code, so nothing gets lost in translation.",
  },
  {
    question: "What if I want to add something later?",
    answer:
      "Ideas evolve, we get it. If it's a small addition that fits the scope, we'll add it in. If it's larger, we'll clearly explain the impact and adjust timelines. We're flexible but transparent.",
  },
  {
    question: "How do you handle larger or complex features?",
    answer:
      "We break big ideas into smaller, testable parts. You get a lean, working MVP first, then we scale with you. For anything beyond MVP scope, we offer clear phase-wise planning.",
  },
  {
    question: "What if I don't like the work that's done?",
    answer:
      "You'll be included in every step, from initial wireframes to the working build, so surprises are rare. If something doesn't feel right, we revise. Fast feedback and open communication ensure we get it right together. You won't be left with something you don't love.",
  },
];

const DoubtsSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="doubts" className="w-full bg-gradient-to-br from-black via-neutral-900/80 to-[#2a1800] py-24 px-4 md:px-0">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-white mb-2 tracking-tight">Doubts</h2>
        <p className="text-2xl text-gray-200 mb-10 font-light">We're here to help — these are some of the most common questions founders ask us:</p>
        <div className="divide-y divide-neutral-700 bg-black/30 rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-6 py-5 text-xl text-white font-semibold flex justify-between items-center focus:outline-none hover:bg-black/40 transition"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 text-2xl transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-lg text-orange-100 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoubtsSection; 