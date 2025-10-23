import { Card } from "@/components/ui/card"
import { Heart, Leaf, Shield, Zap } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Thoải mái & an toàn cho thú cưng",
    description:
      "Thiết kế dựa trên hành vi và tư thế nghỉ ngơi của thú cưng. Hình dáng công thái học giúp thư giãn cơ thể và hỗ trợ giấc ngủ sâu.",
  },
  {
    icon: Leaf,
    title: "Chất liệu thân thiện môi trường",
    description:
      "Sử dụng vải bền vững và được sản xuất có trách nhiệm, an toàn cho thú cưng và hành tinh.",
  },
  {
    icon: Shield,
    title: "Bền bỉ & dễ vệ sinh",
    description:
      "Vải hiệu suất cao, chống bẩn và có thể giặt bằng máy — giúp việc làm sạch trở nên nhẹ nhàng.",
  },
  {
    icon: Zap,
    title: "Bảo hành trọn đời",
    description:
      "Dịch vụ hậu mãi tận tâm và bảo hành toàn diện đảm bảo sự hài lòng tuyệt đối.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Vì Sao Nên Chọn Sofa Cho Thú Cưng?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho bạn và người bạn đồng hành của mình.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
