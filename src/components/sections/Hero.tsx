import HeroCarousel from "./HeroCarousel"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-[#fff8f0] to-[#fdf5e4] -z-10" />
      {/* Soft blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-pink-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-[#f9e4b7]/60 blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-200/20 blur-2xl -z-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-24 left-[6%] text-pink-200 text-3xl select-none pointer-events-none heart-pulse">♥</div>
      <div className="absolute top-1/3 left-[3%] text-yellow-300/70 text-lg select-none pointer-events-none">✦</div>
      <div className="absolute bottom-32 left-[12%] text-pink-300/50 text-2xl select-none pointer-events-none" style={{ animation: "heartbeat 2.5s ease-in-out infinite" }}>♥</div>
      <div className="absolute top-20 right-[8%] text-pink-100 text-4xl select-none pointer-events-none">✿</div>
      <div className="absolute bottom-24 right-[6%] text-yellow-200/80 text-2xl select-none pointer-events-none">✦</div>

      <div className="max-w-6xl mx-auto px-6 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── Left: Brand content ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Open badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 text-xs font-extrabold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-pink-500 inline-block animate-pulse" />
              Open for Pre-Order · 9AM – 6PM
            </div>

            {/* Headline */}
            <h1 className="font-black text-[#3d1810] leading-[1.1] mb-4">
              <span className="block text-4xl sm:text-5xl xl:text-6xl">Life is Sweet</span>
              <span
                className="block text-pink-500 mt-1"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
              >
                with Pop Cakes
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-[#a0738a] font-medium leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              Every dessert tells a story. At Dessery, we craft handmade pop cakes and sweet treats that are as beautiful as they are delicious — made with love, shared with joy.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#menu"
                className="btn-primary-glow inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-black px-8 py-3.5 rounded-full text-sm transition-all shadow-md"
              >
                🍡 View Menu
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-pink-200 hover:border-pink-400 bg-white/60 hover:bg-white text-pink-500 hover:text-pink-600 font-black px-8 py-3.5 rounded-full text-sm transition-all"
              >
                Order Now →
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 justify-center lg:justify-start pt-6 border-t border-pink-100">
              {[
                { val: "150+", label: "Happy Customers" },
                { val: "4+", label: "Flavors" },
                { val: "100%", label: "Handmade" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <p className="text-xl sm:text-2xl font-black text-pink-500">{val}</p>
                  <p className="text-xs font-semibold text-[#a0738a] mt-0.5 whitespace-nowrap">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Carousel ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">

              {/* Decorative card shadow behind */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-pink-200/40" />
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[2rem] bg-[#f9e4b7]/60" />

              {/* Main carousel container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-pink-200/50 border-4 border-white aspect-[4/5]">
                <HeroCarousel />

                {/* Overlay brand stamp */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm flex items-center gap-1.5 border border-pink-100">
                    <div className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-[9px] font-black">D</div>
                    <span className="text-[10px] font-black text-[#3d1810] tracking-wide">DESSERY</span>
                  </div>
                </div>
              </div>

              {/* Floating pill: "Handmade daily" */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-2.5 shadow-lg border border-pink-100 flex items-center gap-2 whitespace-nowrap">
                <span className="text-base">🧁</span>
                <span className="text-xs font-black text-[#3d1810]">Handmade Fresh Daily</span>
                <span className="text-pink-400 heart-pulse text-sm">♥</span>
              </div>

              {/* Floating star rating pill */}
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-2xl px-4 py-2.5 shadow-lg flex flex-col items-center">
                <div className="flex gap-0.5 text-yellow-300 text-xs">★★★★★</div>
                <p className="text-[10px] font-bold mt-0.5 opacity-90">Best Sellers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
