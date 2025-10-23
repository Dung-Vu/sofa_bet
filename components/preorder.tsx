import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const perks = [
  "Đặt trước ngay hôm nay để giữ hàng trong lô sản xuất tiếp theo.",
  "Nhận ưu đãi giảm 10% và miễn phí giao hàng nội thành.",
  "Tặng kèm bộ vệ sinh vải chuyên dụng dành riêng cho Bobby Sofa Pet.",
]

export function Preorder() {
  return (
    <section id="preorder" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:flex md:items-center md:justify-between md:gap-14">
        <div className="flex-1 space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF1D58]">Pre-order</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-balance">
            Đặt Trước Bobby Sofa Pet Và Nhận Ưu Đãi Độc Quyền
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sản xuất giới hạn với số lượng nhỏ mỗi tháng để bảo đảm chất lượng cao nhất. Hãy đặt trước để chắc chắn bạn
            và thú cưng sẽ là những người đầu tiên sở hữu phiên bản mới nhất.
          </p>

          <ul className="space-y-3 text-left">
            {perks.map((perk, index) => (
              <li key={index} className="flex items-start gap-3 text-foreground/90">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#FF1D58]" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
            <Button
              asChild
              className="bg-[#FF1D58] hover:bg-[#FF1D58]/90 text-white text-base px-8 py-6 flex items-center justify-center gap-2"
            >
              <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
                Đặt Trước Ngay
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#FF1D58] text-[#FF1D58] hover:bg-[#FF1D58]/10 text-base px-8 py-6 flex items-center justify-center gap-2"
            >
              <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
                Xem Lịch Giao Hàng
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
