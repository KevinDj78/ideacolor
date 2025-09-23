"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import ColourfulText from "./ui/colourful-text"
import { TypewriterEffect } from "./ui/typewriter-effect"

export function HeroSection() {
  const words = [
    {
      text: "Scopri",
    },
    {
      text: "i",
    },
    {
      text: "nostri",
    },
    {
      text: "prodotti",
    },
  ];
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/sfondo.webp" alt="Ambiente colorato" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className={`font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          colori per il tuo <ColourfulText text="mondo" />
        </h1>
          <TypewriterEffect words={words} />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}