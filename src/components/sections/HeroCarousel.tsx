import { useState, useEffect, useRef, useCallback } from "react"
import { SLIDES, SLIDE_DURATION } from "../../data/siteData"

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const total = SLIDES.length

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrent(index)
      setTimeout(() => setAnimating(false), 700)
    },
    [animating]
  )

  const advance = useCallback(() => {
    setCurrent((prev) => {
      const next = (prev + 1) % total
      setAnimating(true)
      setTimeout(() => setAnimating(false), 700)
      return next
    })
  }, [total])

  /* Auto-advance */
  useEffect(() => {
    timerRef.current = setTimeout(advance, SLIDE_DURATION)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, advance])

  /* Pause on hover */
  const pause = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }
  const resume = () => {
    timerRef.current = setTimeout(advance, SLIDE_DURATION)
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Slides */}
      <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-700 overflow-hidden"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            {slide.src ? (
              <div className="w-full h-full bg-pink-50/60 flex items-center justify-center p-2">
                <img
                  src={slide.src}
                  alt={slide.label || `Slide ${i + 1}`}
                  className={`w-full h-full object-contain ${
                    i === current ? "carousel-slide-active" : ""
                  }`}
                />
              </div>
            ) : (
              <div
                key={`slide-inner-${i}-${i === current ? current : ""}`}
                className={`w-full h-full flex items-center justify-center placeholder-shimmer ${
                  i === current ? "carousel-slide-active" : ""
                }`}
              >
                <div className="flex flex-col items-center gap-3 pointer-events-none select-none">
                  <span className="text-5xl opacity-40">🍡</span>
                  <p className="text-xs font-bold text-pink-400 opacity-60 text-center px-6 max-w-[180px] leading-snug">
                    {slide.label}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              background: i === current ? "#F72585" : "rgba(247,37,133,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
