"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const menuItems = [
  { title: "Home", href: "#", anchor: "#home", description: "Torna alla pagina principale" },
  { title: "Prodotti", href: "#prodotti", anchor: "#prodotti", description: "Scopri la nostra gamma di prodotti" },
  { title: "Eventi", href: "#eventi", anchor: "#eventi", description: "I nostri eventi e manifestazioni" },
  { title: "Chi siamo", href: "#chi-siamo", anchor: "#chi-siamo", description: "La nostra storia e i nostri valori" },
  { title: "Contatti", href: "#contatti", anchor: "#contatti", description: "Come raggiungerci e contattarci" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string, anchor: string) => {
    setIsMenuOpen(false)
    if (anchor.startsWith('#') && pathname === href) {
      const id = anchor.substring(1)
      const section = document.getElementById(id)
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-transparent text-white",
        scrolled && "shadow-lg backdrop-blur-sm bg-black/30"
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">

        {/* --- Layout Mobile --- */}
        <div className="flex items-center justify-between sm:hidden relative">
          
          {/* Menu hamburger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
  <Button
    variant="ghost"
    className="p-0 w-14 h-14 flex items-center justify-center text-white 
               hover:bg-white/10 border border-white rounded-lg"
  >
    <Menu size={40} />
  </Button>
</SheetTrigger>

            <SheetContent side="left" className="w-80">
              <div className="flex flex-col gap-4 mt-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href, item.anchor)}
                    className={cn(
                      "flex flex-col items-start p-3 rounded-lg hover:bg-accent hover:text-white transition-colors text-left",
                      pathname === item.href && "text-primary bg-accent"
                    )}
                  >
                    <span className="font-medium text-base">{item.title}</span>
                    <span className="text-sm text-muted-foreground mt-1">{item.description}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo mobile */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="relative h-12 w-36 block">
              <Image
                src="/logo-ideacolor.png"
                alt="Ideacolor"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
          </div>

          <div className="w-10"></div> {/* spazio bilanciamento */}
        </div>

        {/* --- Layout Desktop --- */}
        <div className="hidden sm:flex items-center justify-between">
          <Link href="/" className="relative h-14 w-40 flex-shrink-0">
            <Image
              src="/logo-ideacolor.png"
              alt="Ideacolor"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <nav className="flex-grow flex justify-center">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-white hover:text-primary transition-colors duration-200 font-medium relative",
                      pathname === item.href && "text-primary"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center flex-shrink-0">
            <Button
              variant="outline"
              className="rounded-full text-white border-white bg-transparent hover:bg-white hover:text-black transition-colors duration-200"
            >
              Contattaci
            </Button>
          </div>
        </div>

      </div>
    </header>
  )
}
