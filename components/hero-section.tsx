'use client'
import { useEffect, useState, Suspense } from "react"
import { ChevronDown } from "lucide-react"
import ColourfulText from "./ui/colourful-text"
import { TypewriterEffect } from "./ui/typewriter-effect"
import dynamic from 'next/dynamic'
import { LoadingScreen } from "./ui/loading"

// Lazy load del componente pesante (500 righe!)
const BackgroundBeamsWithCollision = dynamic(
  () => import('./ui/background-beams-with-collision').then(mod => ({ 
    default: mod.BackgroundBeamsWithCollision 
  })),
  {
    loading: () => (
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <LoadingScreen message="Caricamento in corso..." />
      </div>
    ),
    ssr: false // Importante: disabilita SSR per componenti pesanti con animazioni
  }
)


export function HeroSection() {
  const words = [
    { text: "Scopri" },
    { text: "i" },
    { text: "nostri" },
    { text: "prodotti" },
  ]
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden min-h-screen">
      <BackgroundBeamsWithCollision>
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className={`font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Colori per il tuo <br className="md:hidden" />
            <ColourfulText text="mondo" />
          </h1>
          <TypewriterEffect words={words} />
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  )
}