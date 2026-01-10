export default function AboutUs() {
  return (
    <main className="bg-white py-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f766e] to-[#043c40]">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            We’re building a research-driven investing platform to help people
            make confident, data-backed financial decisions.
          </p>
        </div>

        {/* Subtle wave */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-[120px]"
        >
          <path
            d="M0,40 C240,100 480,0 720,30 960,60 1200,120 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* Mission & Vision */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To simplify investing through deep research, transparency, and
              long-term thinking—so every investor can grow wealth responsibly.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              To become India’s most trusted research-led investing ecosystem,
              empowering investors with clarity and conviction.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What We Do
          </h2>
          <p className="mt-3 text-gray-600 text-center max-w-3xl mx-auto">
            We go beyond numbers to deliver actionable insights you can trust.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {[
              {
                title: "Deep Research",
                desc: "Company financials, industry trends, and competitive analysis.",
              },
              {
                title: "On-Ground Insights",
                desc: "Management interactions and real-world business checks.",
              },
              {
                title: "Long-Term Focus",
                desc: "High-conviction ideas built for sustainable wealth creation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#0f766e] rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Us
            </h2>
            <ul className="mt-6 space-y-4 text-gray-700">
              {[
                "Transparent & unbiased research",
                "Experienced analysts",
                "Risk-first investment approach",
                "Investor-first mindset",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-[#0f766e] rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "100+", label: "Research Reports" },
              { value: "50k+", label: "Investors Trust Us" },
              { value: "95%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#0f766e]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
