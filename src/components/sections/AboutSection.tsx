import UPhoto from "../common/UPhoto"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#fff8f0] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="relative order-last md:order-first">
          <div className="relative">
            {/* Background decorative shape */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-pink-100 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-pink-100 aspect-square">
              <UPhoto
                src="/images/gallery/bouquet-front.jpg"
                w={700}
                h={700}
                alt="Dessery red pop cake bouquet - handcrafted signature dessert"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-pink-100">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-xs font-black text-[#3d1810]">Est. 2026</p>
                  <p className="text-xs text-pink-500 font-bold">Dessert Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <span className="inline-block bg-yellow-100 text-yellow-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#3d1810] leading-tight mb-5">
            Made with{" "}
            <span
              className="text-pink-500"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Love & Joy
            </span>
          </h2>
          <p className="text-[#a0738a] font-medium leading-relaxed mb-4 text-sm">
            Dessery was born from the concept of "Dessert Gallery" where the idea that every dessert deserves to be more than just a sweet treat, but a work of art. Our name combines "dessert" and "gallery," reflecting our commitment to creating desserts that are as visually stunning as they are delicious.
          </p>
          <p className="text-[#a0738a] font-medium leading-relaxed mb-8 text-sm">
            We specialize in handcrafted signature desserts made with premium ingredients and standardized recipes, ensuring consistent flavor, texture, and presentation in every order. From everyday treats to your most special celebrations, Dessery turns every dessert moment into a memorable experience.
          </p>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🧁", title: "Handmade Daily", desc: "Fresh-baked every single day" },
              { icon: "🌸", title: "Premium Quality", desc: "Only the finest ingredients" },
              { icon: "🎁", title: "Custom Orders", desc: "Tailored to your occasion" },
              { icon: "💕", title: "Made with Love", desc: "Every piece crafted with care" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="font-black text-[#3d1810] text-sm">{title}</p>
                  <p className="text-xs text-[#a0738a] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
