import PhotoSlot from "../common/PhotoSlot"
import { SERVICES } from "../../data/siteData"

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#3d1810]">
            What We Offer 🎀
          </h2>
          <p className="text-[#a0738a] font-medium mt-2 max-w-sm mx-auto text-sm">
            From everyday treats to grand celebrations — we have the perfect sweet service for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className={`card-lift rounded-2xl border-2 p-6 ${svc.color}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <PhotoSlot
                  className="w-20 h-20 flex-shrink-0 rounded-xl border"
                  label="Photo"
                  emoji={svc.icon}
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-black text-[#3d1810] text-base">{svc.title}</h3>
                    <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {svc.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#a0738a] leading-relaxed">{svc.desc}</p>
                </div>
              </div>
              <ul className="space-y-1.5 mb-5">
                {svc.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs font-semibold text-[#3d1810]">
                    <span className="w-4 h-4 rounded-full bg-pink-200 text-pink-600 flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors btn-primary-glow"
              >
                Inquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
