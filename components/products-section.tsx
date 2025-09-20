"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  "Tutti",
  "Pitture per interni",
  "Pitture per esterni",
  "Decorativi murali",
  "Carte da parati",
  "Cornici murali",
  "Cartongesso isolanti",
  "Pavimenti",
  "Tende da sole",
  "Vernici carrozzeria",
  "Cornici su misura",
  "Belle arti e hobbistica",
  "Collaborazioni"
]

const products = [
  {
    id: 1,
    name: "Pittura interni",
    category: "Pitture per interni",
    price: "€45.90",
    image: "/Pitture-murali-per-interni.jpg"
  },
  {
    id: 4,
    name: "Pittura per esterni",
    category: "Pitture per esterni",
    price: "€52.50",
    image: "/Pitture-murali-per-esterni.jpg"
  },
  {
    id: 7,
    name: "Valpaint",
    category: "Decorativi murali",
    price: "€78.00",
    image: "/Decorativi murali.jpg"
  },
  {
    id: 10,
    name: "Carta da Parati Vinilica",
    category: "Carte da parati",
    price: "€35.00",
    image: "/carta_da_parati.jpg"
  },
  {
    id: 13,
    name: "Cornici Decorative murali",
    category: "Cornici murali",
    price: "€25.00",
    image: "/cornici_murali.png"
  },
  {
    id: 16,
    name: "Pannelli Cartongesso Standard",
    category: "Cartongesso isolanti",
    price: "€24.50",
    image: "/cartongesso_isolante.jpg"
  },
  {
    id: 19,
    name: "Parquet",
    category: "Pavimenti",
    price: "€35.90",
    image: "/pavimenti.jpg"
  },
  {
    id: 22,
    name: "Tenda da Sole",
    category: "Tende da sole",
    price: "€320.00",
    image: "/tende-da-sole.jpg"
  },
  {
    id: 25,
    name: "Vernice Auto Metallizzata",
    category: "Vernici carrozzeria",
    price: "€95.00",
    image: "/Vernici-per-Carrozzeria.jpg"
  },
  {
    id: 28,
    name: "Cornice Legno su Misura",
    category: "Cornici su misura",
    price: "€75.00",
    image: "/CORNICI-SU-MISURA.jpg"
  },
  {
    id: 31,
    name: "Set pennelli",
    category: "Belle arti e hobbistica",
    price: "€28.90",
    image: "/Belle-Arti2.jpg"
  },
  {
    id: 34,
    name: "Progetto Decorativo Personalizzato",
    category: "Collaborazioni",
    price: "Su richiesta",
    image: "/collaborazioni.jpg"
  }
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
            Scopri la nostra vasta gamma di prodotti per ogni esigenza: dalle pitture alle cornici, dai pavimenti alle tende da sole
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
                className="rounded-full text-xs sm:text-sm px-3 py-1"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <p className="text-muted-foreground text-sm">{product.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nessun prodotto trovato per la ricerca corrente.</p>
          </div>
        )}
      </div>
    </section>
  )
}