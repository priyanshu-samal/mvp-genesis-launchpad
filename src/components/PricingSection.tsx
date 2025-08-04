import React from "react";

const plans = [
  {
    name: "Standard",
    badge: null,
    price: "$1549 USD",
    payment: "One Time Payment",
    description: "One time payment for MVP Development",
    features: [
      "MVP Development in 1 Month",
      "Founder Led Development",
      "Free Maintenance for Next Month",
      "Scalable Tech Stack: Next.js, Supabase",
      "Regular Updates",
    ],
    cta: "Reserve",
  },
  {
    name: "Pro",
    badge: "Most Popular",
    price: "$2599 USD",
    payment: "Recurring Payment",
    description: "Recurring Payment for MVP Development",
    features: [
      "Everything in Standard +",
      "Min 90 Hours of Development per Month",
      "Time Flexibility",
      "Continuous Maintenance and Updates",
      "Quick Emergency Support",
      "Marketing Support",
    ],
    cta: "Reserve",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full bg-gradient-to-br from-black via-neutral-900/80 to-[#2a1800] py-24 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Pricing</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">We offer a range of pricing options to suit your needs.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className="flex-1 bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl shadow-neutral-900/40 p-8 flex flex-col items-center min-w-[300px] max-w-md mx-auto"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-white tracking-wide">{plan.name}</span>
                {plan.badge && (
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full ml-2">{plan.badge}</span>
                )}
              </div>
              <div className="text-sm text-orange-300 mb-2 font-medium">{plan.payment}</div>
              <div className="text-4xl font-extrabold text-white mb-2">{plan.price}</div>
              <div className="text-base text-gray-300 mb-6">{plan.description}</div>
              <ul className="text-left mb-8 space-y-2 w-full max-w-xs mx-auto">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/90">
                    <span className="text-green-400">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://cal.com/priyanshu-samal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full"
              >
                <button className="w-full bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-200 shadow-lg">
                  Book
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 