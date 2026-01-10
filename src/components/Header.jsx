import React, { useState } from "react";

export default function Header() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileAbout, setMobileAbout] = useState(false);

    return (
        <>
            {/* TOP OFFER BAR */}
            <div className="bg-gray-900 text-white text-sm overflow-hidden">
                <div className="whitespace-nowrap animate-marquee px-4 py-2">
                    🥳 NEW YEAR OFFER: Flat <b>26% off</b> — use code{" "}
                    <span className="text-green-400 font-bold">NY26</span>. Limited time
                    (till 7th Jan 26). T&Cs apply.
                      🥳 NEW YEAR OFFER: Flat <b>26% off</b> — use code{" "}
                    <span className="text-green-400 font-bold">NY26</span>. Limited time
                    (till 7th Jan 26). T&Cs apply.
                </div>
            </div>

            {/* NAVBAR */}
            <header className="bg-[#f4fffd] border-b relative z-50">
                <div className="max-w-7xl px-4 py-4 flex items-center justify-between">
                    {/* LOGO */}
                    <div className="flex items-center gap-2 font-bold text-green-700 text-xl">
                        Stocks Tree
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
                        {/* ABOUT US */}
                        {/* <div
                            className="relative"
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => setAboutOpen(false)}
                        >
                            <button className="flex items-center gap-1">
                                About Us
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </button>

                            {aboutOpen && (
                                <div className="absolute left-0 top-full mt-4 w-[900px] bg-white rounded-xl shadow-xl p-6 grid grid-cols-4 gap-6">
                                    {[
                                        "Our Philosophy",
                                        "How it works?",
                                        "Services",
                                        "Sample Reports",
                                        "Hot Stocks",
                                        "Testimonials",
                                        "Why Trust Us?",
                                        "Plant Visit",
                                        "Blogs",
                                        "Team",
                                        "News",
                                    ].map((item) => (
                                        <div key={item}>
                                            <p className="font-semibold">{item}</p>
                                            <p className="text-sm text-gray-500">
                                                Learn more about {item.toLowerCase()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div> */}

                        <a>Pricing</a>
                        <a>About us</a>
                        <a href="">Contact us</a>
                        <a href="">Why trust us?</a>
                        {/* <a>Track Record</a> */}
                        {/* <a>SME Corner</a> */}
                        {/* <a>Blogs</a> */}
{/* 
                        <div className="flex items-center gap-1">
                            VIP Updates
                            <span className="bg-red-500 text-white text-xs px-2 rounded-full">
                                NEW
                            </span>
                        </div> */}
                    </nav>

                    {/* DESKTOP ACTIONS */}
                    {/* <div className="hidden lg:flex items-center gap-4">
                        <button className="border border-orange-400 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50">
                            Stocks to Buy
                        </button>
                        <button className="bg-[#0b5d50] text-white px-5 py-2 rounded-lg flex items-center gap-2">
                            👤 Login
                        </button>
                    </div> */}

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* MOBILE DRAWER */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Overlay */}
                    <div
                        className="flex-1 bg-black/40"
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* Drawer */}
                    <div className="w-[320px] bg-white h-full p-5 overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-green-700 text-lg">
                                KamayaKya
                            </span>
                            <button onClick={() => setMobileOpen(false)}>✕</button>
                        </div>

                        {/* MENU */}
                        <div className="space-y-4 text-gray-700">
                            {/* <button
                                onClick={() => setMobileAbout(!mobileAbout)}
                                className="w-full flex justify-between"
                            >
                                About Us
                                <span>{mobileAbout ? "−" : "+"}</span>
                            </button> */}
{/* 
                            {mobileAbout && (
                                <div className="ml-4 space-y-2 text-sm text-gray-500">
                                    <p>Our Philosophy</p>
                                    <p>How it works?</p>
                                    <p>Services</p>
                                    <p>Sample Reports</p>
                                    <p>Hot Stocks</p>
                                    <p>Why Trust Us?</p>
                                </div>
                            )} */}

                            <p>Pricing</p>
                            <p>About us</p>
                            {/* <p>Track Record</p>
                            <p>SME Corner</p>
                            <p>Stocks to Buy</p>
                            <p>Blogs</p> */}
{/* 
                            <div className="flex items-center gap-2">
                                VIP Updates
                                <span className="bg-red-500 text-white text-xs px-2 rounded-full">
                                    NEW
                                </span>
                            </div> */}
                        </div>

                        {/* LOGIN CARD */}
                        {/* <div className="mt-8 border rounded-xl p-4 text-center">
                            <p className="text-sm text-gray-600 mb-3">
                                Log in to unlock 3 HOT stocks and Track Record for free.
                            </p>
                            <button className="w-full bg-[#0b5d50] text-white py-2 rounded-lg">
                                Login
                            </button>
                        </div> */}
                    </div>
                </div>
            )}

            {/* MARQUEE CSS */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 20s linear infinite;
          }
        `}
            </style>
        </>
    );
}
