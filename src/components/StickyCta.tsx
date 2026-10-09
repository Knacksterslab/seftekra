"use client";

/**
 * Mobile-only sticky CTA for the Seftekra Home page. Most consumer ad
 * traffic in emerging markets is mobile — keeps the conversion action
 * one tap away at any scroll depth. Hidden on md+ screens.
 */
export default function StickyCta() {
  const handleClick = () => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-midnight/95 p-3 backdrop-blur-md md:hidden">
      <button
        onClick={handleClick}
        className="w-full rounded-full bg-gold py-3 text-sm font-bold tracking-wide text-black transition-colors hover:bg-white"
      >
        Get Your Free Assessment <span>&rarr;</span>
      </button>
    </div>
  );
}
