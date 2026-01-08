import React from "react";

const testimonials = [
  {
    name: "Kiran Sanghvi",
    role: "Indus Properties",
    image: "https://i.pravatar.cc/100?img=11",
    text: "My experience with Kamayakya in both their smallcase and VIP+ website subscription has been great so far. Their in-depth analysis and risk reward balance is unmatched.",
  },
  {
    name: "Atharva Agashe",
    role: "Associated Director",
    image: "https://i.pravatar.cc/100?img=12",
    text: "I have been thoroughly impressed with Kamayakya’s stock recommendations. Their picks are clearly communicated with defined exit strategies.",
  },
  {
    name: "Tarun Mittal",
    role: "Investor",
    image: "https://i.pravatar.cc/100?img=13",
    text: "Kamayakya helped me develop discipline and confidence. Their transparency and consistency give long-term comfort.",
  },
  {
    name: "Rohit Mehta",
    role: "Investor",
    image: "https://i.pravatar.cc/100?img=14",
    text: "Their research depth and clarity of communication sets them apart from other advisory platforms.",
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

const TestimonialsSection = () => {
  return (
    <section className="relative  bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* ================= HEADING ================= */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <p className="text-orange-500 text-sm font-semibold tracking-widest mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Hear from our <span className="italic">satisfied investors</span>
        </h2>
      </div>

      {/* ================= TESTIMONIALS GRID ================= */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl p-10">
              <p className="text-gray-600 leading-relaxed mb-8">{item.text}</p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= EXTRA DOWN CONTENT ================= */}
      <div className="mt-10 flex justify-center px-4 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#042f2e] via-[#064e4f] to-[#042f2e] text-white rounded-3xl px-10 py-12 max-w-6xl text-center shadow-2xl ">
          <p className="text-orange-400 text-sm tracking-widest mb-3">
            FEATURED IN THE NEWS
          </p>

          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            IPL Portfolio: Smallcase manager Nitya Shah expects 2 themes to
            perform like Mayank Yadav
          </h3>

          <div className="flex flex-wrap justify-center gap-10">
            {newsItems.map((item, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center font-bold"
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                ) : (
                  item.name
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
