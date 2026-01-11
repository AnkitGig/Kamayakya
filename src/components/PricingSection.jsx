export default function PricingSection() {
    const plans = [
        {
            name: "Monthly",
            price: "₹12,500+GST",
            tag: "",
            features: [
                "Limited stock reports",
                "Basic market insights",
                "Email support",
            ],
            button: "Get Started",
            highlight: false,
        },
        {
            name: "Quarterly",
            price: "₹32,500+GST",
            tag: "Most Popular",
            features: [
                "Detailed stock analysis",
                "Quarterly financials",
                "Research-backed insights",
                "Priority email support",
            ],
            button: "Get Started",
            highlight: true,
        },
        {
            name: "Half Yearly",
            price: "₹60,000+GST",
            tag: "",
            features: [
                "In-depth deep research",
                "Management interviews",
                "On-site business analysis",
                "1-on-1 analyst access",
            ],
            button: "Get Started",
            highlight: false,
        },
        {
            name: "Yearly",
            price: "₹99,000+GST",
            tag: "",
            features: [
                "In-depth deep research",
                "Management interviews",
                "On-site business analysis",
                "1-on-1 analyst access",
            ],
            button: "Get Started",
            highlight: false,
        },
    ];

    return (
        <section className=" bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        For Deep Research Investors
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Choose a plan that matches your investing style and unlock powerful
                        research-driven insights.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border p-8 bg-white shadow-sm relative ${plan.highlight
                                    ? "border-orange-500 shadow-lg"
                                    : "border-gray-200"
                                }`}
                        >
                            {/* Tag */}
                            <span
                                className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${plan.highlight
                                        ? "bg-orange-500 text-white"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                {plan.tag}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="mt-4">
                                <span className="text-2xl font-bold text-gray-900">
                                    {plan.price}
                                </span>
                    
                            </div>

                            {/* Features */}
                            <ul className="mt-6 space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeisbk-bD_BWws1GLv9_7gldFDF8-dzouzHZpeoBXkKkVBS-g/viewform', '_blank')}
                                className={`mt-8 w-full py-3 rounded-xl font-semibold transition ${plan.highlight
                                        ? "bg-orange-500 text-white hover:bg-orange-600"
                                        : "bg-gray-900 text-white hover:bg-gray-800"
                                    }`}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-14 px-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-900 px-6 py-6 rounded-2xl">
                    <div className="text-center sm:text-left">
                        <p className="text-white font-semibold">
                            Ready to invest with conviction?
                        </p>
                        <p className="text-gray-400 text-sm">
                            Join our research-driven approach
                        </p>
                    </div>

                    <button  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeisbk-bD_BWws1GLv9_7gldFDF8-dzouzHZpeoBXkKkVBS-g/viewform', '_blank')} className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold">
                        Explore Opportunities
                    </button>
                </div>
            </div>

        </section>
    );
}
