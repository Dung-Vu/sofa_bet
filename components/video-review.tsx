import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const VIDEO_URL = "https://www.youtube.com/embed/VIDEO_ID"

export function VideoReview() {
  return (
    <section id="video-review" className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="space-y-5 text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Video Review</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Lắng Nghe Trải Nghiệm Từ Những Người Đã Sử Dụng Bobby Sofa Pet
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Xem lại toàn bộ hành trình mở hộp, lắp đặt và phản hồi thực tế từ khách hàng của chúng tôi. Video giúp bạn
            hình dung rõ hơn chất lượng, kích thước và cảm giác ấm cúng mà Sofa Ordinaire mang lại.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-base px-6 py-4 inline-flex items-center gap-2"
            >
              <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
                Xem Thêm Cảm Nhận
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-black/80 shadow-2xl">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={VIDEO_URL}
              title="Video review Bobby Sofa Pet"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
