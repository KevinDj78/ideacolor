"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  "Tutti",
  "Vernici per interni",
  "Vernici per esterni",
  "Rivestimenti decorativi",
  "Carta da parati",
  "Materiali per belle arti",
]

const products = [
  {
    id: 1,
    name: "Vernice Premium Interni",
    category: "Vernici per interni",
    price: "€45.90",
    image: "/premium-interior-paint-can-with-brush.jpg",
  },
  {
    id: 2,
    name: "Smalto Esterno Resistente",
    category: "Vernici per esterni",
    price: "€52.50",
    image: "/exterior-paint-can-weatherproof.jpg",
  },
  {
    id: 3,
    name: "Rivestimento Decorativo Oro",
    category: "Rivestimenti decorativi",
    price: "€78.00",
    image: "/decorative-gold-paint-finish.jpg",
  },
  {
    id: 4,
    name: "Carta da Parati Floreale",
    category: "Carta da parati",
    price: "€35.00",
    image: "/elegant-floral-wallpaper-roll.jpg",
  },
  {
    id: 5,
    name: "Set Colori Acrilici",
    category: "Materiali per belle arti",
    price: "€28.90",
    image: "/acrylic-paint-set-for-artists.jpg",
  },
  {
    id: 6,
    name: "Vernice Lavabile Cucina",
    category: "Vernici per interni",
    price: "€41.20",
    image: "/washable-kitchen-paint-can.jpg",
  },
]

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Tutti" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="prodotti" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">I nostri prodotti</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri la nostra vasta gamma di vernici e materiali di alta qualità per ogni esigenza
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Cerca prodotti..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-card-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="rounded-full">
                      Aggiungi
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
