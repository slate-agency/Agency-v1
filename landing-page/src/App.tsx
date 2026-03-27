import { useState } from "react";

const cards = [
  {
    id: "investor",
    label: "For No. 1",
    badge: "Series A",
    headline: "The Browser That Thinks",
    description:
      "A deep dive into our market opportunity, technology moat, business model, and roadmap. Built for partners ready to back the next paradigm shift in how people use the web.",
    cta: "View Pitch Deck A",
    href: "slate-pitch-deck_v1.html",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 20L10 14L14 18L20 10L24 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="8" r="2.5" fill="currentColor" opacity="0.3" />
        <circle cx="4" cy="22" r="2.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    accent: "from-blue-500 to-indigo-600",
    accentSoft: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-100",
    accentBadge: "bg-blue-100 text-blue-700",
    accentBtn: "bg-blue-600 hover:bg-blue-700 shadow-blue-200",
  },
  {
    id: "partner",
    label: "For No. 2",
    badge: "Series B",
    headline: "Build Together, Win Together",
    description:
      "A focused look at our integration opportunities, co-marketing programs, and how strategic partners can grow alongside our AI-native browser platform.",
    cta: "View Pitch Deck B",
    href: "slate-pitch-deck_v2.html",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M9 14C9 14 11 17 14 17C17 17 19 14 19 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="9" cy="10" r="2" fill="currentColor" opacity="0.35" />
        <circle cx="19" cy="10" r="2" fill="currentColor" opacity="0.35" />
        <path
          d="M5 22C5 19.2386 9.02944 17 14 17C18.9706 17 23 19.2386 23 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: "from-violet-500 to-purple-600",
    accentSoft: "bg-violet-50",
    accentText: "text-violet-600",
    accentBorder: "border-violet-100",
    accentBadge: "bg-violet-100 text-violet-700",
    accentBtn: "bg-violet-600 hover:bg-violet-700 shadow-violet-200",
  },
];

export default function App() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f5f5f7" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          {/* Browser icon mark */}
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
            <img src="logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-gray-900">
            Schesende
          </span>
        </div>
        <a
          href="mailto:hello@slate-automation.com"
          className="text-[13px] font-medium text-gray-500 hover:text-gray-800 transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[12px] font-medium text-gray-500 tracking-wide uppercase">
            Now Raising
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[42px] sm:text-[56px] font-semibold tracking-tight text-gray-900 leading-[1.08] mb-5"
          style={{ letterSpacing: "-0.03em" }}
        >
          The browser,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            reimagined
          </span>
          .
        </h1>

        {/* Sub */}
        <p className="text-[17px] sm:text-[19px] text-gray-500 font-normal max-w-xl leading-relaxed mb-14">
          Schesende is an AI-native browser that understands context, anticipates needs, and works the
          way you think — not the other way around.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative flex flex-col items-start text-left bg-white rounded-2xl p-7 border transition-all duration-200 no-underline
                ${hovered === card.id
                  ? `border-transparent shadow-2xl shadow-gray-200/80 -translate-y-0.5`
                  : "border-gray-200/80 shadow-sm"
                }`}
              style={{ textDecoration: "none" }}
            >
              {/* Badge */}
              <span
                className={`inline-block text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 ${card.accentBadge}`}
              >
                {card.badge}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.accentSoft} ${card.accentText} transition-transform duration-200 ${hovered === card.id ? "scale-110" : ""}`}
              >
                {card.icon}
              </div>

              {/* Text */}
              <h2 className="text-[19px] font-semibold text-gray-900 tracking-tight mb-2">
                {card.headline}
              </h2>
              <p className="text-[14px] text-gray-500 leading-relaxed mb-7">
                {card.description}
              </p>

              {/* CTA */}
              <div
                className={`inline-flex items-center gap-2 text-white text-[13px] font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r ${card.accent} shadow-lg ${card.accentBtn} transition-all duration-200`}
              >
                {card.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`transition-transform duration-200 ${hovered === card.id ? "translate-x-0.5" : ""}`}
                >
                  <path
                    d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Trust line */}
        <p className="mt-10 text-[13px] text-gray-400 font-normal">
          All materials are confidential and intended for qualified recipients only.
        </p>
      </main>

      {/* Footer */}
      <footer className="px-8 py-6 max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[12px] text-gray-400">
          © {new Date().getFullYear()} Slate Automations + Software. All rights reserved.
        </span>
        <div className="flex items-center gap-5">
          <a href="#" className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors">
            Terms
          </a>
          <a
            href="mailto:hello@slate-automation.com"
            className="text-[12px] text-gray-400 hover:text-gray-600 transition-colors"
          >
            hello@slate-automation.com
          </a>
        </div>
      </footer>
    </div>
  );
}
