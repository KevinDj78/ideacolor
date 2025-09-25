"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function App() {
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

  // Array di prodotti con gli URL delle immagini originali
  const products = [
    {
      id: 1,
      name: "Pittura interni",
      category: "Pitture per interni",
      image: "/Pitture-murali-per-interni.jpg"
    },
    {
      id: 4,
      name: "Pittura per esterni",
      category: "Pitture per esterni",
      image: "/Pitture-murali-per-esterni.jpg"
    },
    {
      id: 7,
      name: "Valpaint",
      category: "Decorativi murali",
      image: "/Decorativi murali.jpg"
    },
    {
      id: 10,
      name: "Carta da Parati Vinilica",
      category: "Carte da parati",
      image: "/carta_da_parati.jpg"
    },
    {
      id: 13,
      name: "Cornici Decorative murali",
      category: "Cornici murali",
      image: "/cornici_murali.png"
    },
    {
      id: 16,
      name: "Pannelli Cartongesso Standard",
      category: "Cartongesso isolante",
      image: "/cartongesso_isolante.jpg"
    },
    {
      id: 19,
      name: "Parquet",
      category: "Pavimenti",
      image: "/pavimenti.jpg"
    },
    {
      id: 22,
      name: "Tenda da Sole",
      category: "Tende da sole",
      image: "/tende-da-sole.jpg"
    },
    {
      id: 25,
      name: "Vernice Auto Metallizzata",
      category: "Vernici carrozzeria",
      image: "/Vernici-per-Carrozzeria.jpg"
    },
    {
      id: 28,
      name: "Cornice Legno su Misura",
      category: "Cornici su misura",
      image: "/CORNICI-SU-MISURA.jpg"
    },
    {
      id: 31,
      name: "Set pennelli",
      category: "Belle arti e hobbistica",
      image: "/Belle-Arti2.jpg"
    },
    {
      id: 34,
      name: "Progetto Decorativo Personalizzato",
      category: "Collaborazioni",
      image: "/collaborazioni.jpg"
    }
  ]
  const [selectedCategory, setSelectedCategory] = useState("Tutti")
  const [searchTerm, setSearchTerm] = useState("")

  // Filtra i prodotti in base alla categoria selezionata e al termine di ricerca
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Tutti" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-100 mb-4">I nostri prodotti</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Scopri la nostra vasta gamma di prodotti per ogni esigenza: dalle pitture alle cornici, dai pavimenti alle tende da sole.
          </p>
        </div>

        {/* Change to flex-row to keep side-by-side layout on all screen sizes */}
        <div className="flex flex-row gap-8">
          {/* Sidebar per le Categorie */}
          {/* Use responsive width for sidebar */}
          <div className="w-2/5 sm:w-1/4 bg-gray-800 rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-xl mb-4 text-gray-100">Categorie</h3>
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    w-full justify-start text-left text-xs sm:text-sm whitespace-normal
                    transition-all duration-300
                    ${selectedCategory === category ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-none'}
                  `}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Contenuto principale (barra di ricerca e griglia prodotti) */}
          <div className="flex-1">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                placeholder="Cerca prodotti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-800 text-gray-100 border-gray-700 focus:ring focus:ring-blue-500"
              />
            </div>

            {/* Griglia dei Prodotti */}
            {/* Make sure there is only one column for products on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-800 text-gray-200 border-gray-700 rounded-xl"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={product.image || "https://placehold.co/400x300/F3DFBF/333333?text=Immagine+non+disponibile"}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-gray-100 mb-2">{product.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">{product.category}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Nessun prodotto trovato per la ricerca corrente.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
