"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white text-[#FF1D58] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/logo.jpeg" alt="Ordinaire logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="text-[#FF1D58] hover:text-primary transition font-semibold tracking-wide">
              Products
            </a>
            <a href="#benefits" className="text-[#FF1D58] hover:text-primary transition font-semibold tracking-wide">
              Why Us
            </a>
            <a href="#testimonials" className="text-[#FF1D58] hover:text-primary transition font-semibold tracking-wide">
              Reviews
            </a>
            <a href="#contact" className="text-[#FF1D58] hover:text-primary transition font-semibold tracking-wide">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#FF1D58] hover:text-primary transition"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-[#FF1D58]">
            <a href="#products" className="hover:text-primary transition py-2 font-semibold tracking-wide">
              Products
            </a>
            <a href="#benefits" className="hover:text-primary transition py-2 font-semibold tracking-wide">
              Why Us
            </a>
            <a href="#testimonials" className="hover:text-primary transition py-2 font-semibold tracking-wide">
              Reviews
            </a>
            <a href="#contact" className="hover:text-primary transition py-2 font-semibold tracking-wide">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
