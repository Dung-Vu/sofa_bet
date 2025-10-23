import { Card } from "@/components/ui/card"

const galleryItems = [
  {
    id: 1,
    title: "Chất lượng bền lâu",
    caption: "Đệm kép được may chắc chắn giúp giữ dáng lâu dài và luôn êm ái.",
    detail:
      "Mỗi chiếc sofa được hoàn thiện thủ công và kiểm định kỹ lưỡng để đảm bảo độ bền và độ nâng đỡ tối ưu.",
    stat: "Bảo hành khung trọn đời",
    image: "/IMG_7641.jpeg",
    alt: "Ordinaire Sofa rear view highlighting plush cushions and sturdy frame",
  },
  {
    id: 2,
    title: "Chất liệu cao cấp",
    caption: "Vải linen hiệu suất cao chống bám vết bẩn, thoáng khí và mềm mại.",
    detail:
      "Chúng tôi sử dụng vải hypoallergenic được chứng nhận Oeko-Tex để đảm bảo an toàn tuyệt đối cho thú cưng.",
    stat: "Chất liệu an toàn",
    image: "/IMG_7643.jpeg",
    alt: "Close-up of Ordinaire Sofa fabric and cushions",
  },
  {
    id: 3,
    title: "Kích thước rộng rãi",
    caption: "Ghế sofa rộng rãi, phù hợp cho cún lớn hoặc thú cưng đôi cùng nằm.",
    detail:
      "Kích thước tổng thể 42” x 32” x 28” dễ dàng hòa hợp với mọi không gian sống.",
    stat: "42” x 32” x 28”",
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
            Điểm Nổi Bật Của Sofa Ordinaire
          </h2>
          <p className="mt-4 text-lg font-semibold text-foreground/90 max-w-2xl mx-auto">
            Khám phá những chi tiết tinh tế khiến Sofa Ordinaire trở thành chiếc ghế êm ái nhất trong nhà — cho cả thú
            cưng và chủ nhân.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border border-primary/10 bg-background/95 shadow-sm transition-shadow hover:shadow-xl hover:border-primary/40 gap-0 py-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt || item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/0 to-background/0" />
                <div className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  {item.stat}
                </div>
              </div>
              <div className="p-6 space-y-3 transition-colors duration-300 group-hover:bg-primary/5">
                <h3 className="text-xl font-bold text-[#FF1D58] group-hover:text-primary">{item.title}</h3>
                <p className="text-sm font-semibold text-primary group-hover:text-[#FF1D58]">
                  {item.caption}
                </p>
                <p className="text-sm leading-relaxed text-foreground/80 group-hover:text-foreground/90">{item.detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
