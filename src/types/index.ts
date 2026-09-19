export interface PhotoSlotProps {
  className?: string
  label?: string
  emoji?: string
}

export interface UPhotoProps {
  id?: string
  src?: string
  w?: number
  h?: number
  alt: string
  className?: string
}

export interface HeroSlide {
  id: number
  label: string
  accent: string
  src?: string
}

export interface BestSellerItem {
  name: string
  desc: string
  price: string
  emoji: string
  image?: string
}

export interface MenuItem {
  name: string
  desc: string
  price: string
  category: string
  image?: string
}

export interface GalleryPhoto {
  id?: string
  src?: string
  alt: string
  span: string
}

export interface ServiceItem {
  icon: string
  title: string
  desc: string
  highlights: string[]
  color: string
  badge: string
}

export interface ContactInfoItem {
  icon: string
  label: string
  value: string
  sub: string
}

export interface SocialLinkItem {
  label: string
  handle: string
  bg: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}
