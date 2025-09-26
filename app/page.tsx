import { HeroSection } from "@/components/hero-section"
import App from "@/components/products-section"
import EventCalendar from "@/components/events-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventCalendar />
      <App/>
      <AboutSection />
    </main>
  )
}
