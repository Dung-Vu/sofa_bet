import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { VideoReview } from "@/components/video-review"
import { Preorder } from "@/components/preorder"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <VideoReview />
      <Testimonials />
      <Preorder />
      <CTA />
      <Footer />
    </main>
  )
}
