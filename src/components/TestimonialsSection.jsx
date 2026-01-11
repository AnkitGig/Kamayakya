import React from "react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const testimonials = [
  {
    name: "Laxmi Chouhan",
    role: "Indus Properties",
    image: "https://i.pravatar.cc/100?img=11",
    text:
      "My experience with Finvesta Researc in both their smallcase and VIP+ website subscription has been great so far. Their in-depth analysis and risk reward balance is unmatched.",
  },
  {
    name: "	DEEPAK RAWAT",
    role: "Associated Director",
    image: "https://i.pravatar.cc/100?img=12",
    text:
      "I have been thoroughly impressed with Finvesta Researc’s stock recommendations. Their picks are clearly communicated with defined exit strategies.",
  },
  {
    name: "Veerendra s.",
    role: "Investor",
    image: "https://i.pravatar.cc/100?img=13",
    text:
      "Finvesta Researc helped me develop discipline and confidence. Their transparency and consistency give long-term comfort.",
  },
  {
    name: "Rakesh Patel",
    role: "Investor",
    image: "https://i.pravatar.cc/100?img=14",
    text:
      "Their research depth and clarity of communication sets them apart from other advisory platforms.",
  },
  {
    name: "Pooja Sanghvi",
    role: "Indus Properties",
    image: "https://i.pravatar.cc/100?img=11",
    text:
      "My experience with Finvesta Researc in both their smallcase and VIP+ website subscription has been great so far. Their in-depth analysis and risk reward balance is unmatched.",
  },
  {
    name: "Suresh Kumar",
    role: "Associated Director",
    image: "https://i.pravatar.cc/100?img=12",
    text:
      "I have been thoroughly impressed with Finvesta Researc’s stock recommendations. Their picks are clearly communicated with defined exit strategies.",
  },
];

const newsItems = [
  { name: "ET", logo: "/assets/logos/logo1.png" },
  { name: "Moneycontrol", logo: "/assets/logos/logo4.png" },
  { name: "Mint", logo: "/assets/logos/logo8.png" },
  { name: "Fortune", logo: "/assets/logos/logo10.png" },
  { name: "SME", logo: "/assets/logos/logo6.png" },
  { name: "Business Standard", logo: "/assets/logos/logo3.png" },
  { name: "Zee Business", logo: "/assets/logos/logo7.png" },
  { name: "CNBC TV18", logo: "/assets/logos/logo2.png" },
];

/* ---------------- ANIMATIONS ---------------- */

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateX: 15,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">

      {/* FLOATING BLOBS */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#71c1d1]/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/3 -right-32 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10"
      >
        <p className="text-orange-500 text-sm font-semibold tracking-widest mt-10 mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Hear from our <span className="italic">satisfied investors</span>
        </h2>
      </motion.div>

      {/* TESTIMONIAL CARDS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0px 30px 60px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="bg-white rounded-3xl shadow-xl p-10"
              style={{ perspective: 1000 }}
            >
              {/* TEXT WORD ANIMATION */}
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.02 } },
                }}
                className="text-gray-600 leading-relaxed mb-8"
              >
                {item.text.split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="inline-block mr-1"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* NEWS SECTION */}
      <div className="mt-20 flex justify-center px-4 relative z-10">
        <div className="bg-[#71c1d1] rounded-3xl px-10 py-12 max-w-6xl text-center shadow-2xl overflow-hidden w-full">
          <p className="text-black text-sm tracking-widest mb-3">
            FEATURED IN THE NEWS
          </p>

          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-8">
            IPL Portfolio: Smallcase manager Nitya Shah expects 2 themes to
            perform like Mayank Yadav
          </h3>

          {/* MARQUEE */}
        <div className="flex flex-wrap justify-center gap-10">
  {newsItems.map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.1 }}
      className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center"
    >
      <img
        src={item.logo}
        alt={item.name}
        className="w-full h-full object-contain"
      />
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
