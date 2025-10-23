"use client"

import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Sofa for Pet</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition">
              Products
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-foreground hover:text-primary transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <Button className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Shop Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#products" className="text-foreground hover:text-primary transition py-2">
              Products
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition py-2">
              Why Us
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition py-2">
              Reviews
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition py-2">
              Contact
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Shop Now</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
