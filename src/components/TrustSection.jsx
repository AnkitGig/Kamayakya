export default function TrustSection() {
  return (
    <section className="mb-10 bg-white">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-gray-900 uppercase">
            Why trust us?
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Why should you <em className="italic font-semibold">trust us</em>{" "}
            with your money?
          </h2>

          <p className="mt-4 text-gray-600 bg-blue-50 inline-block px-4 py-2 rounded-md">
            Trust is an investment, earned with honesty, paid in consistency,
            and yielding dividends of reliability.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image Card */}
          <div className="bg-orange-200 rounded-2xl h-[320px] flex items-center justify-center">
            {/* Replace with actual image */}
             <video
                                src="/assets/video/trustvideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
          </div>

          {/* Right Text */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="w-1 bg-gray-300 rounded-full" />
              <p className="text-gray-700 leading-relaxed">
                Our analysts don't just crunch numbers – they analyze the
                company's financials, interview management, and even go on-site
                to witness operations firsthand.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="w-1 bg-gray-300 rounded-full" />
              <p className="text-gray-700 leading-relaxed">
                This 360-degree approach allows us to identify potential
                multibaggers with greater accuracy and provide you with insights
                you won't find anywhere else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
