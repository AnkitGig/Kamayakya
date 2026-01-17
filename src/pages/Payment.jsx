import React, { useEffect } from "react";
import qrImage from "../../public/QR.jpeg";

const PaymentPage = () => {
  const upiId = "8226010451-8@ybl";
  const name = "Kaushal Kumar Sharma";
  const bankName = "HDFC BANK";
  const phoneNumber = "+91 74005 14850";
  
    useEffect(() => {
    window.scrollTo(0, 0); // ALWAYS scrolls to top
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Secure Payment</h2>
          <p className="text-sm opacity-90">Pay via UPI or Bank Transfer</p>
        </div>

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT : QR SECTION */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img
                src={qrImage}
                alt="UPI QR Code"
                className="w-56 h-56 rounded-lg"
              />
            </div>

            {/* UPI ID */}
            <div className="text-center mt-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                UPI ID
              </p>
              <p className="text-lg font-semibold text-indigo-700">{upiId}</p>
            </div>
          </div>

          {/* RIGHT : BANK DETAILS */}
          <div>
            <div className="bg-gray-50 border rounded-xl p-5 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Bank Name</span>
                <span className="font-semibold text-indigo-700 text-sm">
                  {bankName}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Account Holder</span>
                <span className="font-medium text-sm">{name}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Account Number</span>
                <span className="font-medium text-sm">50200098217590</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">IFSC Code</span>
                <span className="font-medium text-sm">DEMO</span>
              </div>
            </div>

            {/* Contact Line */}
            {/* <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
              <p className="text-sm text-gray-700">
                After completing the payment, please contact us at:
              </p>
              <p className="font-semibold text-indigo-700 mt-1">
                📞 +91 74005 14850
              </p>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 pb-4">
          Please double-check details before payment
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
