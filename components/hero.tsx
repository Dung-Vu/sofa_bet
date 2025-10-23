import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Ordinaire Sofa For Pet
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Handcrafted sofas designed with your pet's comfort and your home's style in mind. Because your furry
              friend deserves the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="text-base px-8 py-6 border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <img
              src="/cozy-pet-sofa-with-dog-relaxing.jpg"
              alt="Premium pet sofa with comfortable dog"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
