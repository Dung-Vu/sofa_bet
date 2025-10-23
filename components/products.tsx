import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    id: 1,
    title: "Quality That Lasts",
    caption: "Double-stitched cushions retain their loft after years of naps.",
    detail:
      "Every Ordinaire Sofa is hand-finished and inspected for perfect seams and supportive structure.",
    stat: "LIFETIME FRAME WARRANTY",
    image: "/IMG_7641.jpeg",
    alt: "Ordinaire Sofa rear view highlighting plush cushions and sturdy frame",
  },
  {
    id: 2,
    title: "Premium Materials",
    caption: "Performance linen repels spills while staying breathable and soft.",
    detail:
      "We pair cruelty-free, high-resilience foam with OEKO-TEX certified fabrics so pets lounge on safe luxury.",
    stat: "HYPOALLERGENIC & VEGAN",
    image: "/IMG_7643.jpeg",
    alt: "Close-up of Ordinaire Sofa fabric and cushions",
  },
  {
    id: 3,
    title: "Sized For Sharing",
    caption: "Oversized seat fits a large dog—or a pet and their human together.",
    detail:
      "Low-profile arms and a generous 42\" width give pets room to sprawl without overwhelming your living space.",
    stat: '42"W × 32"D × 28"H',
    image: "/IMG_7644.jpeg",
    alt: "Golden retriever and cat resting on the Ordinaire Sofa",
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF1D58] tracking-tight text-balance">
            Ordinaire Sofa Highlights
          </h2>
          <p className="mt-4 text-lg font-semibold text-foreground/90 max-w-2xl mx-auto">
            Explore the crafted details that make the Ordinaire Sofa the coziest seat in the house—for pets and interiors
            alike.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border border-primary/10 bg-background/95 shadow-sm transition-shadow hover:shadow-lg gap-0 py-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt || item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/0 to-background/0" />
                <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-foreground shadow-sm">
                  {item.stat}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[#FF1D58]">{item.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">{item.caption}</p>
                <p className="text-sm leading-relaxed text-foreground/80">{item.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
