import React from "react";

const logos = [
  { name: "Kirana Club", src: "/assets/herocompany/kirana.png" },
  { name: "Wipro", src: "/assets/herocompany/wipro.png" },
  { name: "TCS", src: "/assets/herocompany/tcs.png" },
  { name: "Cisco", src: "/assets/herocompany/cisco.png" },
  { name: "Google", src: "/assets/herocompany/google.png" },
  { name: "Citi", src: "/assets/herocompany/citi.png" },
  { name: "HSBC", src: "/assets/herocompany/hsbc.png" },
  { name: "LIC", src: "/assets/herocompany/lic.png" },
  { name: "Apollo", src: "/assets/herocompany/apollo-hospitals-seeklogo 1.png" },
  { name: "Swan Energy", src: "/assets/herocompany/swan.png" },
];

export default function LogoSlider() {
  return (
    <section className="bg-[#f4fffd] py-10 overflow-hidden">
      <p className="text-center text-gray-700 mb-6 font-medium">
        Our members include leaders from
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll gap-16 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-10 object-contain opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>

      {/* animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
}
