import React from "react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const pillars = [
  {
    id: 1,
    title: "Research-Driven Investing",
    subtitle: "Logic Over Guesswork",
    icon: "📊",
    description:
      "Every investment decision is powered by rigorous data analysis and deep fundamental research.",
    keyPoints: [
      "Proprietary multi-layer research framework",
      "High-conviction stock selection",
      "Zero emotion-based decisions",
      "Sector & macro-economic insights",
    ],
    benefits:
      "We cut through market noise to focus only on businesses with long-term value creation potential.",
  },
  {
    id: 2,
    title: "Consistent & Transparent Performance",
    subtitle: "Full Clarity, Always",
    icon: "📈",
    description:
      "Clear strategies, real performance metrics, and absolute transparency at every step.",
    keyPoints: [
      "Monthly performance reports",
      "Defined entry & exit strategies",
      "Live portfolio visibility",
      "No hidden fees or surprises",
    ],
    benefits:
      "You always know where your money stands — with complete confidence and control.",
  },
  {
    id: 3,
    title: "Long-Term Wealth Creation",
    subtitle: "Built for Compounding",
    icon: "🎯",
    description:
      "A disciplined, patient approach focused on sustainable and compounding wealth growth.",
    keyPoints: [
      "Long-term fundamental focus",
      "Disciplined portfolio rebalancing",
      "Tax-efficient strategies",
      "Goal-aligned wealth planning",
    ],
    benefits:
      "True wealth is built over time — we help you stay invested, focused, and disciplined.",
  },
];

/* ---------------- ANIMATIONS ---------------- */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const InvestingPillars = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-sky-50/40 to-white py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-3">
            OUR FOUNDATION
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Three Pillars of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 italic">
              Smart Investing
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Research, transparency, and discipline — the principles that drive
            sustainable wealth creation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
              }}
              className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 transition-all"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-200/40 to-teal-200/40 opacity-0 hover:opacity-100 transition pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-teal-500 text-white text-2xl shadow-lg">
                  {pillar.icon}
                </div>
              </div>

              {/* Title */}
              <div className="relative z-10 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="relative z-10 text-gray-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>

              {/* Points */}
              <ul className="relative z-10 space-y-3 mb-6">
                {pillar.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Benefit */}
              <div className="relative z-10 bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-gray-700 italic">
                  “{pillar.benefits}”
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InvestingPillars;
