import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    pet: "Golden Retriever - Max",
    text: "Max absolutely loves his new sofa! The quality is exceptional and it looks beautiful in our living room. Highly recommend!",
    rating: 5,
    image: "/happy-pet-owner-portrait.jpg",
  },
  {
    name: "Michael Chen",
    pet: "Cat - Luna",
    text: "Luna has claimed this sofa as her own. The fabric is so soft and durable. Best investment for my pet!",
    rating: 5,
    image: "/happy-pet-owner-portrait.jpg",
  },
  {
    name: "Emma Rodriguez",
    pet: "Dachshund - Buddy",
    text: "The orthopedic support is amazing. Buddy's arthritis has improved and he's more active. Thank you!",
    rating: 5,
    image: "/happy-pet-owner-portrait.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Loved by Pet Parents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our happy customers have to say about their Sofa for Pet experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
