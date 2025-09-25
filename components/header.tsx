"use client"
import { useState } from "react"
import { Navbar1 } from "@/components/ui/navbar"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="bg-neutral-950">
      <div className="container mx-auto px-6">
        <Navbar1 />
      </div>
    </header>
  )
}