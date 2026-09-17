import Navbar from "./components/sections/Navbar"
import Hero from "./components/sections/Hero"
import FeaturedSection from "./components/sections/FeaturedSection"
import AboutSection from "./components/sections/AboutSection"
import MenuSection from "./components/sections/MenuSection"
import GallerySection from "./components/sections/GallerySection"
import ServicesSection from "./components/sections/ServicesSection"
import ContactSection from "./components/sections/ContactSection"
import Footer from "./components/sections/Footer"

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-sans)" }}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
