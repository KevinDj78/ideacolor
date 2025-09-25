import Header from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import EventCalendar from "@/components/events-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <EventCalendar />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
