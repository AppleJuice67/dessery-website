import { NAV_LINKS } from "../../data/siteData"

export default function Footer() {
  return (
    <footer className="bg-[#3d1810] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <div>
                <span
                  className="block text-xl font-bold text-pink-400"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Dessery
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-pink-200/60 -mt-0.5 font-semibold">
                  Dessert Gallery
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Handcrafted pop cakes and dessert treats made with premium ingredients. Every dessert tells a story — let us make yours unforgettable.
            </p>
            <p
              className="text-pink-400 text-base"
              style={{ fontFamily: "var(--font-display)" }}
            >
              &quot;Every dessert tells a story.&quot;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-black text-white text-sm uppercase tracking-wider mb-4">Explore</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-pink-400 text-sm font-medium transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-black text-white text-sm uppercase tracking-wider mb-4">Contact</p>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>📞 +63 XXX XXX XXXX</li>
              <li>📧 hello@dessery.ph</li>
              <li>📍 Your Address Here</li>
              <li>⏰ Daily 9AM – 6PM</li>
            </ul>
            <div className="flex gap-2 mt-5">
              {["IG", "TT", "FB"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-pink-500 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs font-medium">
          <p>&copy; 2024 Dessery — Dessert Gallery. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-pink-400 heart-pulse">♥</span> for sweet lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
