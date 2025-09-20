"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
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
          colori per il tuo <span className="text-pink-500">m</span>
          <span className="text-cyan-500">o</span>
          <span className="text-emerald-500">n</span>
          <span className="text-orange-500">d</span>
          <span className="text-indigo-500">o</span>
        </h1>

        <Button
          size="lg"
          className={`bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            } [animation-delay:0.4s]`}
          onClick={() => document.getElementById("prodotti")?.scrollIntoView({ behavior: "smooth" })}
        >
          Scopri i nostri prodotti
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}
