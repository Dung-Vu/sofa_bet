import { Card } from "@/components/ui/card"
import { Heart, Leaf, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Pet-Approved Comfort",
    description: "Designed with your pet's needs in mind. Ergonomic support for better sleep and relaxation.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainable fabrics and responsibly sourced materials that are safe for your pet.",
  },
  {
    icon: Shield,
    title: "Durable & Easy to Clean",
    description: "Premium fabrics resist stains and odors. Machine-washable covers for hassle-free maintenance.",
  },
  {
    icon: Zap,
    title: "Lifetime Support",
    description: "Comprehensive warranty and dedicated customer support to ensure your satisfaction.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose Sofa for Pet?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best experience for you and your furry companion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
