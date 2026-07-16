import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    scripts: [
      {
        innerHTML: `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KVTQ7QXN');</script>
<!-- End Google Tag Manager -->`,
        type: "text/javascript",
      },
      {
        innerHTML: `<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q278QPKQG2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Q278QPKQG2');
</script>
<!-- End Google Analytics 4 -->`,
        type: "text/javascript",
      },
      {
        innerHTML: `<!-- Google Ads -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16701011893"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-16701011893');
</script>
<!-- End Google Ads -->`,
        type: "text/javascript",
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Công ty TNHH Sản Xuất Thương Mại Dịch Vụ Bích Trang",
          "alternateName": "Lotus Paint",
          "brand": {
            "@type": "Brand",
            "name": "Lotus Metal Coat"
          },
          "url": "https://hello-builder-bot-73.vercel.app/",
          "logo": "https://hello-builder-bot-73.vercel.app/logo.png",
          "telephone": "+84943966662",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm",
            "addressLocality": "Hóc Môn",
            "addressRegion": "TP.HCM",
            "addressCountry": "VN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84943966662",
            "contactType": "customer service",
            "availableLanguage": "Vietnamese",
            "hoursAvailable": "Mo-Sa 08:00-18:00"
          },
          "sameAs": [
            "https://zalo.me/0943966662"
          ]
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Sơn gốc nước có bền bằng sơn dầu không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lotus Metal Coat gốc nước có độ bền tương đương và vượt trội hơn sơn dầu ở nhiều tiêu chí: kháng UV tốt hơn, màng sơn dẻo không bị giòn nứt, và không bị ố vàng theo thời gian."
              }
            },
            {
              "@type": "Question",
              "name": "Tôi đang dùng sơn dầu — chuyển sang Lotus có cần xử lý gì trước không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cần chà nhám sạch lớp sơn dầu cũ, loại bỏ gỉ sét và dầu mỡ bám trên bề mặt kim loại. Sau đó sơn lót Primer trước khi phủ màu để đảm bảo độ bám dính tốt nhất."
              }
            },
            {
              "@type": "Question",
              "name": "Lotus 2in1 / DTM có thực sự không cần lót không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Đúng — Lotus Metal Coat 2in1/DTM có thể sơn trực tiếp lên sắt mạ kẽm, nhôm, sắt hộp mà không cần lớp lót riêng nhờ công nghệ bám dính Acrylic liên kết chéo cải tiến."
              }
            },
            {
              "@type": "Question",
              "name": "Sơn lên bề mặt mạ kẽm hoặc nhôm được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Được — đây là ưu điểm vượt trội của Lotus Metal Coat. Công thức gốc nước đặc biệt bám chắc lên mạ kẽm, nhôm, inox mà sơn dầu thông thường rất dễ bong tróc."
              }
            },
            {
              "@type": "Question",
              "name": "Sơn gốc nước khô bao lâu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Khô bề mặt sau 30 phút, có thể sơn lớp tiếp theo sau 2 giờ. Nhanh hơn sơn dầu truyền thống cần chờ 8–12 tiếng."
              }
            },
            {
              "@type": "Question",
              "name": "Rửa cọ và rulo bằng nước được không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Được — chỉ cần xả dưới vòi nước sạch ngay sau khi dùng xong. Không cần xăng hay dung môi như sơn dầu."
              }
            },
            {
              "@type": "Question",
              "name": "Có hỗ trợ tư vấn lượng sơn theo diện tích không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có — nhắn Zalo 0943 966 662 gửi ảnh và diện tích hạng mục, đội kỹ thuật Lotus sẽ tư vấn đúng lượng sơn và combo phù hợp trong vòng 15 phút."
              }
            },
            {
              "@type": "Question",
              "name": "Đặt hàng và giao hàng như thế nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Chọn combo và điền thông tin đặt hàng trực tiếp trên website. Lotus sẽ gọi xác nhận trong 15 phút và giao hàng trong 24–48h tại TP.HCM và các tỉnh lân cận."
              }
            }
          ]
        })
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Lotus Paint — Metal Coat",
          "description": "Phân phối sơn kim loại gốc nước Lotus Metal Coat — chuyên sơn sắt, mạ kẽm, nhôm, inox cho công trình dân dụng và công nghiệp.",
          "url": "https://hello-builder-bot-73.vercel.app/",
          "telephone": "+84943966662",
          "priceRange": "₫₫",
          "currenciesAccepted": "VND",
          "paymentAccepted": "Cash, Bank Transfer",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm",
            "addressLocality": "Hóc Môn",
            "addressRegion": "TP.HCM",
            "postalCode": "700000",
            "addressCountry": "VN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "areaServed": ["TP.HCM", "Bình Dương", "Đồng Nai", "Long An"]
        })
      }
    ],
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sơn Kim Loại Gốc Nước Lotus Metal Coat | Chống Gỉ, Không Mùi, Giao Hàng TP.HCM" },
      { name: "description", content: "Sơn kim loại gốc nước Lotus Metal Coat — không mùi xăng, bám dính kẽm cực chắc, khô 30 phút. Combo sẵn có, giao hàng 24–48h tại TP.HCM và các tỉnh lân cận. Đặt hàng ngay." },
      { name: "keywords", content: "sơn kim loại gốc nước, sơn sắt không mùi, sơn chống gỉ gốc nước, Lotus Metal Coat, sơn mạ kẽm, sơn 2in1 DTM, sơn sắt TP.HCM" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Lotus Paint — Công ty TNHH SX TM DV Bích Trang" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hello-builder-bot-73.vercel.app/" },
      { property: "og:title", content: "Sơn Kim Loại Gốc Nước Lotus Metal Coat | Không Mùi, Chống Gỉ Tốt" },
      { property: "og:description", content: "Sơn gốc nước chuyên dụng cho sắt, kẽm, nhôm. Không mùi xăng, khô 30 phút, bám cực chắc. Giao hàng 24h TP.HCM." },
      { property: "og:image", content: "https://hello-builder-bot-73.vercel.app/project-1.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "vi_VN" },
      { property: "og:site_name", content: "Lotus Paint Metal Coat" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://img.vietqr.io",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://zalo.me",
      },
      {
        rel: "preload",
        href: "/lotus-hero.jpg",
        as: "image",
        fetchPriority: "high",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVTQ7QXN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
