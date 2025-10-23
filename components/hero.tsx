import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Bobby Sofa Pet
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Handcrafted sofas designed with your pet's comfort and your home's style in mind. Because your furry
              friend deserves the best.
            </p>
            <div className="pt-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 inline-flex items-center gap-2"
              >
                <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative min-h-96 md:h-full">
            <div className="grid h-full gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl shadow-lg sm:row-span-2">
                <img
                  src="/cozy-pet-sofa-with-dog-relaxing.jpg"
                  alt="Golden retriever resting on the Ordinaire Sofa beside a curious cat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/block1.png"
                  alt="Back view of the Ordinaire Sofa highlighting tailored cushions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/block2.png"
                  alt="Top view of the Ordinaire Sofa showing generous seating space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
