import React from "react";

export default function Home1() {
    return (
        <section className="relative bg-[#f4fffd] overflow-hidden">
            {/* subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8f5f3_1px,transparent_1px),linear-gradient(to_bottom,#e8f5f3_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT CONTENT */}
                <div>
                    <span className="inline-block mb-4 px-4 py-1 border border-green-400 rounded-full text-sm text-green-700 bg-white">
                        SEBI Registered: INH000009843
                    </span>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Grow your <br />
                        money by <br />
                        investing in{" "}
                        <span className="text-green-700">
                            potential <br /> Multibaggers
                        </span>
                        <span className="text-green-700"> |</span>
                    </h1>



                    <button className="mt-8 bg-[#0b5d50] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#094d43] transition">
                        Get Started – it's Free
                    </button>
                </div>

                {/* RIGHT ILLUSTRATION + STATS */}
                <div className="relative flex justify-center">
                    {/* Illustration Box */}
                    <div className="bg-[#db9c4f] rounded-[40px] p-10 w-full max-w-md flex justify-center">
                        {/* Video illustration */}

                        
                        <div className="bg-white rounded-xl w-full h-[260px] flex items-center justify-center text-gray-400 overflow-hidden">
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

                    {/* Stats Card */}
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
    );
}
