import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Treat Your Pet to Luxury?</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Join thousands of happy pet parents who've transformed their homes with Sofa for Pet. Start shopping today and
          give your furry friend the comfort they deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary text-base px-8 py-6 flex items-center justify-center gap-2">
            Shop Collection
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 bg-transparent"
          >
            Get 10% Off First Order
          </Button>
        </div>
      </div>
    </section>
  )
}
