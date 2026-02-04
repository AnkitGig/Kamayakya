import React, { useState } from "react";
import Typewriter from "./Typewriter";
import whatsappImg from "../../public/assets/whatsapp.png";

export default function Home1() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919993807442?text=I'm ready for free trial investment advisory services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <img src={whatsappImg} alt="WhatsApp" className="h-8 w-8" />
      </a>

      {/* HERO SECTION */}
      <section className="relative bg-[#f4fffd] overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f5f3_1px,transparent_1px),linear-gradient(to_bottom,#e8f5f3_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1 border border-[#71c1d1] rounded-full text-sm text-black bg-white">
                SEBI Registered: INH000024310
              </span>

              <button
                onClick={() => setShowCertificate(true)}
                className="px-3 py-1 bg-[#71c1d1] text-white text-sm rounded-full font-medium hover:bg-[#094d43] transition"
              >
                View Certificate
              </button>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Grow your <br />
              money by <br />
              investing in{" "}
              <Typewriter
                texts={[
                  "SME, Microcap and Smallcap stocks",
                  "SME Stocks",
                  "Microcap Stocks",
                  "Smallcap Stocks",
                ]}
                className="text-[#71c1d1]"
              />
            </h1>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919993807442?text=I'm ready for free trial investment advisory services.",
                    "_blank"
                  )
                }
                className="bg-[#71c1d1] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#094d43] transition"
              >
              Apply for Free Trial
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            {/* Video Box */}
            <div className="bg-[#db9c4f] rounded-[40px] p-10 w-full max-w-md flex justify-center">
              <div className="bg-white rounded-xl w-full h-[260px] overflow-hidden">
                <video
                  src="/assets/video/Hero1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-10 bg-white shadow-lg rounded-2xl w-[90%] max-w-md grid grid-cols-3 text-center py-6">
              <div>
                <p className="text-2xl font-bold text-gray-800">50+</p>
                <p className="text-sm text-gray-500">
                  Years of team <br /> experience
                </p>
              </div>

              <div className="border-x">
                <p className="text-2xl font-bold text-gray-800">3000+</p>
                <p className="text-sm text-gray-500">
                  Delighted <br /> Investors
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-800">70+</p>
                <p className="text-sm text-gray-500">
                  Stocks <br /> Released
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                SEBI Registration Certificate
              </h2>
              <button
                onClick={() => setShowCertificate(false)}
                className="text-gray-500 hover:text-black text-3xl leading-none"
              >
                ×
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-gray-100">
              <iframe
                src="/assets/certificate.pdf"
                title="Certificate"
                className="w-full h-full"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-6 py-4 border-t bg-white">
              <a
                href="/assets/certificate.pdf"
                download
                className="bg-[#71c1d1] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#094d43] transition"
              >
                Download PDF
              </a>
              <button
                onClick={() => setShowCertificate(false)}
                className="border border-[#71c1d1] text-[#71c1d1] px-6 py-2 rounded-lg font-medium hover:bg-[#f0fffe] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
