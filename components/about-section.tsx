"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("chi-siamo")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="chi-siamo" className="py-20 bg-[#F3DFBF] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Il colore è la nostra passione!
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>

Nel nostro negozio, sia al dettaglio che all’ingrosso, vi proponiamo le migliori marche presenti sul mercato e le più innovative soluzioni tecniche.

Contattateci per una consulenza gratuita, vi sapremo consigliare prodotti specifici per un risultato professionale, sicuro e duraturo nel tempo.
              </p>
              
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"} [animation-delay:0.3s]`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/about.jpg" alt="Negozio Ideacolor" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
