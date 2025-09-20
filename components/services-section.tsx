"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Truck, Users } from "lucide-react"

const services = [
  {
    icon: MessageCircle,
    title: "Consulenze gratuite e preventivi",
    description: "I nostri esperti ti aiutano a scegliere i prodotti giusti per il tuo progetto",
  },
  {
    icon: Truck,
    title: "Consegne a domicilio",
    description: "Consegniamo i tuoi prodotti direttamente a casa tua in tutta la regione",
  },
  {
    icon: Users,
    title: "Collaborazioni con professionisti",
    description: "Lavoriamo con imbianchini e decoratori per garantire risultati perfetti",
  },
]

export function ServicesSection() {
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

    const element = document.getElementById("servizi")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servizi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">I nostri servizi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offriamo un servizio completo per accompagnarti in ogni fase del tuo progetto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-500 bg-card group hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
