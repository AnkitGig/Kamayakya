export default function Footer() {
  return (
    <footer className="bg-[#24354d] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">YourBrand</h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Research-driven investing platform helping you make smarter,
              data-backed financial decisions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Market Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div> */}

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/disclosure" className="hover:text-white transition">
                  Disclosure
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-white transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/refund-policy" className="hover:text-white transition">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/investor-charter" className="hover:text-white transition">
                  Investor Charter
                </a>
              </li>
              <li>
                <a href="/grievance-redressal" className="hover:text-white transition">
                  Grievance Redressal
                </a>
              </li>
              <li>
                <a href="/complaint-data" className="hover:text-white transition">
                  Complaint Data
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Finvesta Research. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
            >
              <span className="text-white text-sm">in</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
            >
              <span className="text-white text-sm">X</span>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
            >
              <span className="text-white text-sm">f</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
