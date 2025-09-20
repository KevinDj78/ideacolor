"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
   
    if (targetElement) {
      const headerHeight = 100 // Altezza approssimativa dell'header + padding extra
      const targetPosition = targetElement.offsetTop - headerHeight
     
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
   
    // Chiudi il menu mobile se aperto
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Prodotti", href: "#prodotti" },
    { name: "Eventi", href: "#eventi" },
    { name: "Chi siamo", href: "#chi-siamo" },
    { name: "Contatti", href: "#contatti" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/20 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="#home">
              <Image
                src={"/logo-ideacolor.png"}
                alt="Ideacolor Logo"
                width={40}
                height={40}
                className="h-14 md:h-16 w-auto transition-transform duration-200 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden hover:bg-primary/10 transition-colors duration-200 p-2 h-auto w-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4 pt-4 border-t border-border/30">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-2 rounded-md hover:bg-primary/5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}