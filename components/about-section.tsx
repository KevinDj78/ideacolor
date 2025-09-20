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
    <section id="chi-siamo" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              La nostra passione per il colore
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Da oltre 20 anni, Ideacolor è il punto di riferimento per chi vuole trasformare i propri spazi con il
                potere del colore. La nostra passione nasce dalla convinzione che ogni ambiente possa raccontare una
                storia unica attraverso le sfumature e le texture.
              </p>
              <p>
                Il nostro team di esperti è sempre pronto ad ascoltare le tue esigenze e a consigliarti le soluzioni
                migliori per realizzare i tuoi progetti. Dall'abitazione privata al locale commerciale, ogni progetto è
                per noi un'opportunità di creare qualcosa di speciale.
              </p>
              <p>
                L'attenzione al cliente e la qualità dei nostri prodotti sono i pilastri su cui abbiamo costruito la
                nostra reputazione nel territorio.
              </p>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"} [animation-delay:0.3s]`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/modern-paint-store-interior-with-colorful-displays.jpg" alt="Negozio Ideacolor" className="w-full h-96 object-cover" />
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
