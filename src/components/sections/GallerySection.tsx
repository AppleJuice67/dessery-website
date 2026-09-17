import UPhoto from "../common/UPhoto"
import { GALLERY_PHOTOS } from "../../data/galleryData"

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-[#fff8f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#3d1810]">
            A Feast for the Eyes 📸
          </h2>
          <p className="text-[#a0738a] font-medium mt-2 max-w-sm mx-auto text-sm">
            A glimpse into our world of beautiful, handcrafted sweets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[480px]">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-3xl shadow-md border-4 border-white bg-pink-50 relative group ${photo.span}`}
            >
              <UPhoto
                id={photo.id}
                src={photo.src}
                w={800}
                h={800}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold drop-shadow">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
