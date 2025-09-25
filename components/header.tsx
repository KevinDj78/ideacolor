"use client"
import { ChevronDown, Menu, X, Clock, Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/img/logo-ideacolor.png" alt="Logo Ideacolor" className="h-10 w-auto object-contain" />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                  PITTURE E DECORAZIONI
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Pitture per interni
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Pitture per esterni
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Decorativi murali
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Carte da parati
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Cornici murali
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                  EDILIZIA E FINITURE
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Cartongesso isolanti
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Pavimenti
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                  ARREDO E COMPLEMENTI
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Tende da sole
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-gray-600 hover:text-orange-500">
                          Cornici su misura
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">
                VERNICIATURE SPECIALI
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">
                CREATIVITÀ
              </a>
              <a href="#eventi" className="text-gray-700 hover:text-orange-500 font-medium">
                EVENTI
              </a>
            </nav>
            {/* Mobile/Tablet Menu Button */}
            <div className="flex items-center">
              <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <div>
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2">
                    PITTURE E DECORAZIONI
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Pitture per interni
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Pitture per esterni
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Decorativi murali
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Carte da parati
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Cornici murali
                    </a>
                  </div>
                </div>

                <div>
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2">
                    EDILIZIA E FINITURE
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Cartongesso isolanti
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Pavimenti
                    </a>
                  </div>
                </div>

                <div>
                  <button className="flex items-center justify-between w-full text-left text-gray-700 hover:text-orange-500 font-medium py-2">
                    ARREDO E COMPLEMENTI
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Tende da sole
                    </a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-orange-500 py-1">
                      Cornici su misura
                    </a>
                  </div>
                </div>

                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                  VERNICIATURE SPECIALI
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                  CREATIVITÀ
                </a>
                <a href="#eventi" className="text-gray-700 hover:text-orange-500 font-medium py-2">
                  EVENTI
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
  )
}
