import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin", "latin-ext", "vietnamese"], display: "swap" })

const siteName = "Bobby Sofa Pet"
const siteUrl = "https://ordinairevietnam.com"
const siteDescription =
  "Bobby Sofa Pet được chế tác thủ công tại Việt Nam, mang đến sự thoải mái cao cấp cho thú cưng và tôn vinh phong cách nội thất của bạn."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Ordinaire Vietnam`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Bobby Sofa Pet",
    "sofa cho thú cưng",
    "sofa chó mèo cao cấp",
    "Ordinaire Vietnam",
    "nội thất thú cưng",
    "sofa cho chó lớn",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Ordinaire Vietnam`,
    description: siteDescription,
    siteName,
    locale: "vi_VN",
    images: [
      {
        url: "/cozy-pet-sofa-with-dog-relaxing.jpg",
        width: 1200,
        height: 800,
        alt: "Bobby Sofa Pet với thú cưng thư giãn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Ordinaire Vietnam`,
    description: siteDescription,
    images: ["/cozy-pet-sofa-with-dog-relaxing.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpeg",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bobby Sofa Pet",
  description:
    "Ghế sofa thủ công cao cấp dành cho thú cưng, mang đến sự thoải mái tối ưu và hòa hợp với mọi không gian sống.",
  image: [
    `${siteUrl}/cozy-pet-sofa-with-dog-relaxing.jpg`,
    `${siteUrl}/IMG_7643.jpeg`,
    `${siteUrl}/IMG_7644.jpeg`,
  ],
  brand: {
    "@type": "Organization",
    name: "Ordinaire Vietnam",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpeg`,
  },
  offers: {
    "@type": "Offer",
    url: siteUrl,
    priceCurrency: "VND",
    availability: "https://schema.org/PreOrder",
    price: "15900000",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Johnson" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody:
        "Max rất thích chiếc sofa mới của mình! Chất lượng vượt trội và trông thật tuyệt trong phòng khách.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
} satisfies Record<string, unknown>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
