import { useState } from "react"
import PhotoSlot from "../common/PhotoSlot"
import { MENU_ITEMS, MENU_CATEGORIES } from "../../data/siteData"

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === activeCategory)

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-pink-100 text-pink-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Our Menu
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#3d1810]">
            Sweet Selections
          </h2>
          <p className="text-[#a0738a] font-medium mt-2 max-w-sm mx-auto text-sm">
            Explore our full menu of handcrafted pop cakes, dessert cups, and more.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-pink-50 text-pink-500 hover:bg-pink-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.name}
              className="card-lift bg-[#fff8f0] rounded-2xl overflow-hidden border border-pink-100 flex flex-col"
            >
              <PhotoSlot
                className="w-full h-48 rounded-none border-0 rounded-t-2xl"
                label={`${item.name} — replace with your photo`}
                emoji="🍡"
              />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-black text-[#3d1810] text-sm">{item.name}</p>
                  <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-[#a0738a] leading-snug mb-4">{item.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-pink-500 font-black text-lg">{item.price}</span>
                  <a
                    href="#contact"
                    className="bg-pink-500 hover:bg-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors btn-primary-glow"
                  >
                    Order Now
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
