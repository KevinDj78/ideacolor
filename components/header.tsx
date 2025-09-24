“use client”

import Link from “next/link”
import { useState, useEffect } from “react”
import { Menu, X } from “lucide-react”
import Image from “next/image”
import { Button } from “@/components/ui/button”
import {
Sheet,
SheetContent,
SheetDescription,
SheetHeader,
SheetTitle,
SheetTrigger,
} from “@/components/ui/sheet”
import { cn } from “@/lib/utils”
import { usePathname } from “next/navigation”

const menuItems = [
{
title: “Home”,
href: “#”,
anchor: “#home”,
description: “Torna alla pagina principale”,
},
{
title: “Prodotti”,
href: “#prodotti”,
anchor: “#prodotti”,
description: “Scopri la nostra gamma di prodotti”,
},
{
title: “Eventi”,
href: “#eventi”,
anchor: “#eventi”,
description: “I nostri eventi e manifestazioni”,
},
{
title: “Chi siamo”,
href: “#chi-siamo”,
anchor: “#chi-siamo”,
description: “La nostra storia e i nostri valori”,
},
{
title: “Contatti”,
href: “#contatti”,
anchor: “#contatti”,
description: “Come raggiungerci e contattarci”,
},
]

export function Header() {
const [scrolled, setScrolled] = useState(false)
const [isMenuOpen, setIsMenuOpen] = useState(false)
const pathname = usePathname()

// Listener per aggiungere ombra all’header quando si scrolla
useEffect(() => {
const handleScroll = () => {
const isScrolled = window.scrollY > 10
setScrolled(isScrolled)
}

```
window.addEventListener('scroll', handleScroll)
return () => {
  window.removeEventListener('scroll', handleScroll)
}
```

}, [])

// Funzione per gestire il click sui link e lo scroll smooth
const handleLinkClick = (href: string, anchor: string) => {
setIsMenuOpen(false)
if (anchor.startsWith(’#’) && pathname === href) {
const id = anchor.substring(1)
const section = document.getElementById(id)
if (section) {
const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100
window.scrollTo({ top: offsetTop, behavior: ‘smooth’ })
}
}
}

return (
<header
className={cn(
“fixed top-0 left-0 right-0 z-50 transition-all duration-300”,
“bg-transparent text-white”, // Stile iniziale
scrolled && “shadow-lg backdrop-blur-sm bg-black/30” // Stile dopo lo scroll
)}
>
<div className="container mx-auto px-4 py-3 md:py-4">

```
    {/* --- Layout Mobile (visibile solo sotto 'sm') --- */}
    <div className="flex items-center justify-between sm:hidden relative">
      
      {/* Menu hamburger a sinistra */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 p-2"
          >
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <div className="flex justify-end pt-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-8 w-8" />
            </Button>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex flex-col items-start p-3 rounded-lg hover:bg-accent hover:text-white transition-colors text-left",
                  pathname === item.href && "text-primary bg-accent"
                )}
              >
                <span className="font-medium text-base">{item.title}</span>
                <span className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo al centro per mobile */}
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

      {/* Spazio vuoto per bilanciare il layout */}
      <div className="w-10"></div>
    </div>

    {/* --- Layout Desktop (visibile solo da 'sm' in su) --- */}
    <div className="hidden sm:flex items-center justify-between">
      
      {/* Logo a sinistra per desktop */}
      <Link href="/" className="relative h-14 w-40 flex-shrink-0">
        <Image
          src="/logo-ideacolor.png"
          alt="Ideacolor"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>

      {/* Menu di navigazione al centro per desktop */}
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
      
      {/* Pulsante CTA a destra per desktop */}
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
```

)
}
