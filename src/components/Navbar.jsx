import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Dropdown({ label, items }) {
  const menuRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.set(menuRef.current, {
      autoAlpha: 0,
      y: 12,
      scale: 0.97,
      pointerEvents: "none",
    });
  }, []);

  const open = () => {
    gsap.to(menuRef.current, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
      pointerEvents: "auto",
    });

    gsap.to(arrowRef.current, {
      rotate: 180,
      duration: 0.25,
    });
  };

  const close = () => {
    gsap.to(menuRef.current, {
      autoAlpha: 0,
      y: 12,
      scale: 0.97,
      duration: 0.2,
      ease: "power2.in",
      pointerEvents: "none",
    });

    gsap.to(arrowRef.current, {
      rotate: 0,
      duration: 0.2,
    });
  };

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <button className="flex items-center gap-1 group text-sm font-medium tracking-wide hover:text-sky-400 transition">
        {label}
        <svg
          ref={arrowRef}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all" />
      </button>

      <div
        ref={menuRef}
        className="absolute left-0 mt-4 w-64 rounded-2xl overflow-hidden 
        backdrop-blur-xl bg-white/95 text-slate-800 shadow-2xl border border-slate-200"
      >
        {items.map((item) => (
          <a
            key={item}
            href="#"
            className="block px-6 py-3 text-sm hover:bg-slate-100 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/70 border-b border-white/10 px-6 md:px-14 py-4 flex items-center justify-between text-white">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider">
        <span className="text-sky-400">Bag</span>Store
      </div>

      {/* Center Menu */}
      <div className="hidden md:flex items-center gap-10 relative">
        <a
          href="#"
          className="relative text-sm font-medium tracking-wide hover:text-sky-400 transition group"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all" />
        </a>

        <Dropdown
          label="Men"
          items={["Backpacks", "Office Bags", "Travel Bags", "Gym Bags"]}
        />

        <Dropdown
          label="Women"
          items={["Handbags", "Sling Bags", "Tote Bags", "Wallets"]}
        />

        <Dropdown
          label="Kids"
          items={["School Bags", "Cartoon Bags", "Lunch Bags", "Mini Packs"]}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-emerald-400 text-black text-sm font-semibold hover:scale-105 transition">
          Shop Now
        </button>

        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 text-black flex items-center justify-center font-bold cursor-pointer hover:scale-105 transition">
          U
        </div>
      </div>
    </nav>
  );
}
