import React from 'react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-lg text-gray-600">Important information and warnings for investors</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">⚠️</span>
              Standard Warning
            </h2>
            <p className="text-gray-700 leading-relaxed font-medium">
              "Investment in securities market are subject to market risks. Read all the related documents carefully before investing."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3 text-lg font-bold">ℹ️</span>
              Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              "Registration granted by SEBI, enlistment as RA with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors."
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing _______________website, you have read, understood & agree to be legally bound by the terms of the following disclaimer- Stock trading is inherently risky and you agree to assume complete and full responsibility for the outcomes of all trading decisions that you make, including but not limited to loss of capital. Under no circumstances should any person at this site make trading decisions based solely on the information discussed herein. Information and recommendations on the website are for general information only. Nothing contained herein is an advice to sell nor solicitation to buy any securities.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              All information, recommendations, advice and contents shared on the website is meant to be used for personal purpose only and must not be reproduced or copied in any form.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
              By continuing to use this website, you agree to all our terms and policies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}