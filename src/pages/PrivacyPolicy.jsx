import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Your privacy matters to us. Learn how we protect and use your information.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3">1</span>
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We understand and respect your privacy, and we are committed to protecting it. In order to provide transparency and clarity on how we collect and use your information, we have created this notice which outlines our online information practices and your options for providing and managing that information.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3">2</span>
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Protecting your privacy and data is extremely important to us. We take measures to ensure the security and confidentiality of any information shared with us. We will only use personally identifiable information for the purposes to which you have consented. However, we cannot guarantee the security of your information 100%, despite our efforts to protect it. Any information you transmit to us through our online services is done at your own risk.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3">3</span>
              Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Please note that you may receive calls related to service promotions, contests, and pools organized by us. Your information, whether public or private, will be held with us only. However, it may be transferred or given to our regulatory authorities and their related organizations, as well as any organizations or individuals with whom we have an interest for any reason, without your consent.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3">4</span>
              Marketing Communications
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In addition to the services we provide to you, we may also use your personal information such as your mobile number and email address to send you newsletters, surveys, contest information, or updates on any new services that we believe may be beneficial to you. By subscribing to our services, you agree to allow Kaushal Kumar Sharma to use your personal information for these purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white mr-3">5</span>
              Consent for Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By submitting the 'Inquiry form' on this website or through any other means, including social media, you are providing your consent to allow us to contact you via phone call, SMS, or WhatsApp on the number provided by you. Even if your mobile number is registered on the National 'Do Not Disturb' registry, you agree to receive communication from us. We appreciate your trust in us and assure you that we will always respect your privacy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}