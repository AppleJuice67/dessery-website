import type { UPhotoProps } from "../../types"
import { getImageUrl } from "../../utils/imageUtils"

export default function UPhoto({
  id,
  src,
  w = 800,
  h = 600,
  alt,
  className = "",
}: UPhotoProps) {
  const rawSrc =
    src || (id ? `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format` : "")
  const imageSrc = getImageUrl(rawSrc)

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
    />
  )
}
