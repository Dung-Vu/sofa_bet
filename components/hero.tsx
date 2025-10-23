import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.05fr_1fr] lg:gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
              Bobby Sofa Pet
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Ghế sofa được chế tác thủ công, thiết kế với sự thoải mái của thú cưng và phong cách của ngôi nhà bạn.
            </p>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Vì người bạn lông xù của bạn cũng xứng đáng được tận hưởng điều tốt nhất.
            </p>
            <div className="pt-4 flex justify-center md:justify-start">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 inline-flex items-center gap-2"
              >
                <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
                  Mua Ngay
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative h-80 sm:h-96 md:h-full">
            <div className="grid h-full gap-4 grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl shadow-lg col-span-2 sm:col-span-1 sm:row-span-2">
                <img
                  src="/cozy-pet-sofa-with-dog-relaxing.jpg"
                  alt="Golden retriever resting on the Ordinaire Sofa beside a curious cat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hidden sm:block">
                <img
                  src="/block1.png"
                  alt="Back view of the Ordinaire Sofa highlighting tailored cushions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg col-span-2 sm:col-span-1">
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
