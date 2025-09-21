"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import React from "react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "#home",
    description: "Torna alla pagina principale",
  },
  {
    title: "Prodotti",
    href: "#prodotti",
    description: "Scopri la nostra gamma di prodotti",
  },
  {
    title: "Eventi",
    href: "#eventi",
    description: "I nostri eventi e manifestazioni",
  },
  {
    title: "Chi siamo",
    href: "#chi-siamo",
    description: "La nostra storia e i nostri valori",
  },
  {
    title: "Contatti",
    href: "#contatti",
    description: "Come raggiungerci e contattarci",
  },
]

// Define ListItem component before usage
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { onClick?: () => void }
>(({ className, title, children, onClick, href, ...props }, ref) => {
  const handleCustomClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const id = href.substring(1);
      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY - 100; // 100px offset for header
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
            className
          )}
          onClick={handleCustomClick}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground hover:text-primary-foreground/80">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
});

// Set display name separately
ListItem.displayName = "ListItem";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Listener per aggiungere ombra all'header quando si scrolla
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Chiudi il menu quando si fa clic su un link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`absolute top-0 left-0 right-0 bg-transparent text-white z-50 transition-all duration-300 ${scrolled ? 'shadow-lg backdrop-blur-sm bg-black/30' : ''}`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        {/* Layout con grid per garantire centramento perfetto */}
        <div className="grid grid-cols-3 items-center">
          {/* Menu a sinistra */}
          <div className="flex justify-start">
            <NavigationMenu
              onValueChange={(open) => setIsMenuOpen(open === "menu")}
              value={isMenuOpen ? "menu" : undefined}
            >
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem value="menu">
                  <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 data-[state=open]:bg-primary/80 border-0">
                    <Menu className="h-5 w-5" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] mobile-menu-dropdown">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          onClick={handleLinkClick}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Logo centrato */}
          <div className="flex justify-center">
            <Link href="/" className="relative h-12 w-36 md:h-14 md:w-40 cursor-pointer">
              <Image
                src="/logo-ideacolor.png"
                alt="Ideacolor"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>
          </div>

          {/* Spazio vuoto a destra */}
          <div></div>
        </div>
      </div>
    </header>
  )
}