import type { PhotoSlotProps } from "../../types"

export default function PhotoSlot({
  className = "",
  label = "Add your photo here",
  emoji = "🍡",
}: PhotoSlotProps) {
  return (
    <div
      className={`placeholder-shimmer flex flex-col items-center justify-center gap-2 border-2 border-dashed border-pink-200 rounded-2xl overflow-hidden ${className}`}
    >
      <span className="text-3xl">{emoji}</span>
      <p className="text-xs font-semibold text-pink-400 text-center px-3 leading-tight">
        {label}
      </p>
    </div>
  )
}
