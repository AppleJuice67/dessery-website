import type { UPhotoProps } from "../../types"

export default function UPhoto({
  id,
  src,
  w = 800,
  h = 600,
  alt,
  className = "",
}: UPhotoProps) {
  const imageSrc =
    src || (id ? `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format` : "")

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
    />
  )
}
