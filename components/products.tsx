import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Luxe Cloud Sofa",
    price: "$599",
    rating: 4.9,
    reviews: 128,
    image: "/modern-pet-sofa-cloud-design.jpg",
    description: "Ultra-soft memory foam with premium fabric",
  },
  {
    id: 2,
    name: "Classic Nest Bed",
    price: "$399",
    rating: 4.8,
    reviews: 95,
    image: "/classic-pet-nest-bed-cozy.jpg",
    description: "Timeless design with orthopedic support",
  },
  {
    id: 3,
    name: "Modern Lounge",
    price: "$699",
    rating: 5.0,
    reviews: 156,
    image: "/modern-lounge-pet-furniture.jpg",
    description: "Contemporary style with maximum comfort",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Signature Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each sofa is carefully crafted to provide the perfect balance of comfort and style for your pet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm">{product.description}</p>

                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Add to Cart</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
