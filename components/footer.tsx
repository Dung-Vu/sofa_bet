import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <span className="font-bold">Sofa for Pet</span>
            </div>
            <p className="text-sm opacity-75">Premium pet furniture designed with love for your beloved companions.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-75">© 2025 Sofa for Pet. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>for pet lovers everywhere</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
