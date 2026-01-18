import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Contact Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919993807442?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Have questions or need help? Fill out the form and our team will
              get back to you shortly.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Let’s talk
                </h3>
                <p className="mt-2 text-gray-600">
                  Whether you're an investor, partner, or just exploring — we’re
                  here to help.
                </p>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  rakaushalsharma@gmail.com
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +91 74005 14850
                </p>
                <p>
                  <span className="font-semibold">Address:</span> 102 First
                  Floor 62 Savid Nagar Main Road Kanadiya Road, Indore, Madhya
                  Pardesh, 450001
                </p>
              </div>
            </div>

            {/* Right Form */}
            <form
              className="bg-gray-50 p-8 rounded-2xl shadow-sm space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-[#71c1d1] text-white py-3 rounded-xl font-semibold hover:bg-[#115e59] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-[120px]"
      >
        <path
          d="M0,40 C240,100 480,0 720,30 960,60 1200,120 1440,60 L1440,120 L0,120 Z"
          fill="#71c1d1"
        />
      </svg>
    </section>
  );
}
