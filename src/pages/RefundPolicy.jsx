import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-lg text-gray-600">Understand our refund terms and conditions for services.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <p className="text-gray-700 leading-relaxed">
            All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation. It is important to understand that we do not provide a 100% guarantee on our calls.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Refunds will not be provided for the period of services already availed, irrespective of the client's satisfaction with the recommendations or the outcome of trades. Always remember Trading/Investment in Securities Markets are always subjected to Market Risk.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We strongly recommend that before making a payment, our visitors, and potential clients, please:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
            <li>Read all information about our services and support given to our clients. Read our Terms and Conditions.</li>
            <li>Read our Privacy Policy and Refund Policy.</li>
            <li>There is no refund possible in any case whatsoever.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Kindly make the payment after reading all terms and conditions, disclaimers and refund policy.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              If you still have any query, contact us on: <span className="font-semibold">+91 8226010451</span> or mail us: <a href="mailto:sharmakaushal312@gmail.com" className="text-emerald-600 hover:underline">sharmakaushal312@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}