import type {
  HeroSlide,
  BestSellerItem,
  MenuItem,
  GalleryPhoto,
  ServiceItem,
  ContactInfoItem,
  SocialLinkItem,
} from "../types"

export const NAV_LINKS = ["Home", "About", "Menu", "Gallery", "Services", "Contact"]

export const SLIDE_DURATION = 4000 // ms between auto-advances

export const SLIDES: HeroSlide[] = [
  { id: 1, label: "Handcrafted Cake Pops", accent: "#F72585", src: "/images/gallery/cake-pops.png" },
  { id: 2, label: "Push Pop Cakes", accent: "#e05aaa", src: "/images/gallery/push-pop-cakes.png" },
  { id: 3, label: "Sweet Cups", accent: "#F72585", src: "/images/gallery/sweet-cups.png" }
]

export const BEST_SELLERS: BestSellerItem[] = [
  { name: "Choco Confetti Pop", desc: "Chocolate-coated cake pop with marshmallow center", price: "₱39", emoji: "🍫", image: "/images/gallery/choco-confetti-pop.jpeg" },
  { name: "Choco Snow Pop", desc: "Chocolate-coated cake pop with white chocolate drizzle", price: "₱39", emoji: "❤️", image: "/images/gallery/choco-snow-pop.jpeg" },
  { name: "Choco Delight", desc: "Moist chocolate cake, frosting and toppings", price: "₱59", emoji: "⚫", image: "/images/gallery/choco-delight.jpg" },
  { name: "Cream & Crunch", desc: "Cookie base, white chocolate sauce and oreo", price: "₱89", emoji: "🍪", image: "/images/gallery/cream-and-crunch.jpeg" },
]

export const MENU_CATEGORIES = ["All", "Cake Pops", "Push Pop Cakes", "Sweet Cups"] as const

export const MENU_ITEMS: MenuItem[] = [
  { name: "Choco Confetti Pop", desc: "Chocolate-coated cake pop with marshmallow center", price: "₱39", category: "Cake Pops", image: "/images/gallery/choco-confetti-pop.jpeg" },
  { name: "Choco Snow Pop", desc: "Chocolate-coated cake pop with white chocolate drizzle", price: "₱39", category: "Cake Pops", image: "/images/gallery/choco-snow-pop.jpeg" },
  { name: "Vanilla Confetti Pop", desc: "Vanilla cake base, white chocolate and springkles", price: "₱39", category: "Cake Pops", image: "/images/gallery/vanilla-confetti-pop.jpeg" },
  { name: "Vanilla Eclipse Pop", desc: "Vanilla cake base with dark chocolate drizzle", price: "₱39", category: "Cake Pops", image: "/images/gallery/vanilla-eclipse-pop.jpeg" },
  { name: "Choco Delight", desc: "Moist chocolate cake, frosting and toppings", price: "₱59", category: "Push Pop Cakes", image: "/images/gallery/choco-delight.jpg" },
  { name: "Velvet Delight", desc: "Red velvet cake with cream cheese vanilla frosting", price: "₱59", category: "Push Pop Cakes", image: "/images/gallery/velvet-delight.jpg" },
  { name: "Choco Indulge", desc: "Brownie bites, milk chocolate sauce and oreo", price: "₱89", category: "Sweet Cups", image: "/images/gallery/choco-indulge.jpeg" },
  { name: "Biscoff Crunch", desc: "Cookies, caramel fudge, chocolate chips and biscoff", price: "₱89", category: "Sweet Cups", image: "/images/gallery/biscoff-crunch.jpeg" },
  { name: "Cream & Crunch", desc: "Cookie base, white chocolate sauce and oreo", price: "₱89", category: "Sweet Cups", image: "/images/gallery/cream-and-crunch.jpeg" },
]


export const SERVICES: ServiceItem[] = [
  {
    icon: "🍡",
    title: "Regular Orders",
    desc: "Order your favorite pop cakes anytime. We accept single and bulk orders with fresh daily preparation.",
    highlights: ["Minimum 1 pc", "Pickup or delivery", "Multiple flavors"],
    color: "bg-pink-50 border-pink-100",
    badge: "Most Popular",
  },
  {
    icon: "🎨",
    title: "Custom Pop Cakes",
    desc: "Design your dream pop cakes. Choose your flavors, colors, decorations, and packaging for a truly personalized treat.",
    highlights: ["Custom themes", "Personalized design", "Min 12 pcs"],
    color: "bg-yellow-50 border-yellow-100",
    badge: "Fan Favorite",
  },
  {
    icon: "🎉",
    title: "Event & Party Orders",
    desc: "Planning a celebration? We create beautiful pop cake sets for birthdays, weddings, corporate events, and more.",
    highlights: ["Bulk pricing", "Custom packaging", "Event styling"],
    color: "bg-pink-50 border-pink-100",
    badge: "For Celebrations",
  },
  {
    icon: "🎁",
    title: "Gift Boxes",
    desc: "Surprise your loved ones with a beautifully packaged Dessery gift box — the perfect sweet gift for any occasion.",
    highlights: ["Gift wrapping", "Custom message", "Same-day available"],
    color: "bg-yellow-50 border-yellow-100",
    badge: "Perfect Gift",
  },
]

export const CONTACT_INFO: ContactInfoItem[] = [
  { icon: "📞", label: "Phone / WhatsApp", value: "+63 9544092577", sub: "Mon–Sat, 9AM–6PM" },
  { icon: "📧", label: "Email", value: "[EMAIL_ADDRESS]", sub: "We reply within 24 hours" },
  { icon: "📍", label: "Address", value: "049 Matagbak II", sub: "Alfonso, Cavite, Philippines" },
  { icon: "⏰", label: "Hours", value: "Open Daily 9AM – 6PM", sub: "Closed on major holidays" },
]

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: "Instagram", handle: "@dessery.official", bg: "bg-gradient-to-br from-purple-400 to-pink-500", href: "https://www.instagram.com/dessery.official/" },
  { label: "TikTok", handle: "@dessery.official", bg: "bg-black", href: "https://www.tiktok.com/@dessery.official" },
  { label: "Facebook", handle: "Dessery PH", bg: "bg-blue-600", href: "https://www.facebook.com/profile.php?id=61592644987189" },
]
