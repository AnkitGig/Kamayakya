import { useState, useEffect } from "react";

const TABS = [
  { id: "factors", label: "Factors", color: "from-blue-500 to-cyan-500" },
  { id: "trigger", label: "Trigger", color: "from-purple-500 to-pink-500" },
  { id: "method", label: "Method", color: "from-orange-500 to-red-500" },
];

const DATA = {
  factors: [
    { title: "Cash flow", icon: "💰", description: "Sustainable financial health and liquidity" },
    { title: "Top-line growth", icon: "📈", description: "Revenue expansion and market capture" },
    { title: "Bottom-line growth", icon: "📊", description: "Profitability and margin improvement" },
    { title: "Promoter holding", icon: "👑", description: "Insider confidence and alignment" },
    { title: "Management quality", icon: "⚙️", description: "Leadership competence and vision" },
    { title: "Valuations", icon: "🔍", description: "Fair price relative to intrinsic value" },
  ],
  trigger: [
    { title: "Capacity expansion", icon: "🏭", description: "Strategic growth investments" },
    { title: "Debt reduction", icon: "📉", description: "Improved balance sheet strength" },
    { title: "Change in management", icon: "🔄", description: "New leadership and direction" },
    { title: "Industry tailwinds", icon: "🌬️", description: "Favorable sector dynamics" },
    { title: "Govt policies", icon: "🏛️", description: "Regulatory support and incentives" },
    { title: "Turnaround plays", icon: "🚀", description: "Recovery and transformation stories" },
  ],
  method: [
    { title: "Solid data & research", icon: "📚", description: "Deep fundamental analysis" },
    { title: "Management interactions", icon: "👥", description: "Direct leadership insights" },
    { title: "Channel checks", icon: "🔗", description: "Ground-level verification" },
    { title: "Peer comparison", icon: "⚖️", description: "Relative valuation assessment" },
    { title: "Risk assessment", icon: "🛡️", description: "Comprehensive risk analysis" },
    { title: "Long-term view", icon: "🎯", description: "Sustainable value creation focus" },
  ],
};

export default function InvestingPhilosophy() {
  const [activeTab, setActiveTab] = useState("factors");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const activeColor = TABS.find(tab => tab.id === activeTab)?.color || "from-blue-500 to-cyan-500";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 mb-4">
            <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
            <p className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              INVESTING PHILOSOPHY
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="italic bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Investment</span> Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just pick stocks—we analyze businesses, understand their moats, 
            and invest with conviction for the long term.
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-1.5 shadow-lg border border-gray-200">
            <div className="flex gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                    ${activeTab === tab.id 
                      ? "text-white shadow-lg transform scale-[1.02]" 
                      : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
                    }`}
                >
                  {activeTab === tab.id && (
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color} -z-10 animate-pulse-subtle`} />
                  )}
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={`
          mt-8 grid gap-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          ${DATA[activeTab].length <= 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}
        `}>
          {DATA[activeTab].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activeColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
              
              {/* Icon with animated background */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Animated underline */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${activeColor} group-hover:w-full transition-all duration-500`}></div>
              
              {/* Index number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl">
            <div className="text-left">
              <p className="text-white font-semibold">Ready to invest with conviction?</p>
              <p className="text-gray-400 text-sm">Join our research-driven approach</p>
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}