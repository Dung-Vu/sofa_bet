import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
          Sẵn Sàng Nâng Tầm Cuộc Sống Cho Thú Cưng Của Bạn?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Hãy gia nhập cùng hàng ngàn khách hàng hạnh phúc đã biến ngôi nhà của họ thành thiên đường cho thú cưng. Mua
          sắm ngay hôm nay để người bạn bốn chân của bạn được tận hưởng sự thoải mái xứng đáng.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary text-base px-8 py-6 flex items-center justify-center gap-2"
          >
            <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
              Xem Bộ Sưu Tập
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 bg-transparent flex items-center justify-center gap-2"
          >
            <a href="https://ordinairevietnam.com" target="_blank" rel="noopener noreferrer">
              Nhận 10% Giảm Giá Cho Đơn Hàng Đầu Tiên
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
