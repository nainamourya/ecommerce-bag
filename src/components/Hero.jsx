import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
];

const words = ["Smart Bags", "Travel in Style", "Built for Everyday"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((c) => c + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setWordIndex((w) => (w + 1) % words.length);
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [charIndex, wordIndex]);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out ${
            i === index ? "opacity-100 scale-110" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            filter: "brightness(0.85) contrast(1.15) saturate(1.25)",
          }}
        />
      ))}

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/60 to-sky-900/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-2xl text-white backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-300 bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse text-sky-400">|</span>
          </h1>

          <p className="mt-5 text-slate-300 text-lg">
            Premium bags crafted for work, travel, and everyday life. Designed
            for those who move with purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 text-black font-semibold shadow-lg hover:scale-105 transition">
              Shop Collection
            </button>
            <button className="px-8 py-3 rounded-2xl border border-white/30 hover:bg-white/10 transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
