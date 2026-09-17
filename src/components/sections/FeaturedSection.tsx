import PhotoSlot from "../common/PhotoSlot"
import { BEST_SELLERS } from "../../data/siteData"

export default function FeaturedSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Best Sellers
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#3d1810]">
            Fan Favorites ✨
          </h2>
          <p className="text-[#a0738a] font-medium mt-2 max-w-sm mx-auto text-sm">
            Our most-loved pop cakes, crafted fresh for every order.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {BEST_SELLERS.map((item) => (
            <div
              key={item.name}
              className="card-lift bg-[#fff8f0] rounded-2xl overflow-hidden border border-pink-100"
            >
              <PhotoSlot
                className="w-full h-40 rounded-none border-0 rounded-t-2xl"
                label={`${item.emoji} ${item.name} photo`}
                emoji={item.emoji}
              />
              <div className="p-4">
                <p className="font-black text-[#3d1810] text-sm leading-tight">{item.name}</p>
                <p className="text-xs text-[#a0738a] mt-1 leading-snug">{item.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-pink-500 font-black text-base">{item.price}</span>
                  <a
                    href="#contact"
                    className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
