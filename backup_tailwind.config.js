// tailwind.config.js
/**
 * TailwindCSS configuration for the landing page project.
 * Includes custom keyframes and animation utilities for the glowing orbs effect.
 */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        // Pulse animation that slightly scales and changes opacity
        glowPulse: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        // Slow floating animation that moves the orb up and down
        floatSlow: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        // Base pulse, 6 s loop, ease‑in‑out, infinite
        "glow-pulse": "glowPulse 6s ease-in-out infinite",
        // Same pulse but starts after a 2 s delay – used for the second orb
        "glow-pulse-delayed": "glowPulse 6s ease-in-out infinite 2s",
        // Very slow float for the central orb
        "float-slow": "floatSlow 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
