import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DMPUFWeK.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
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
      { property: "og:image", content: "https://hello-builder-bot-73.vercel.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "vi_VN" },
      { property: "og:site_name", content: "Lotus Paint Metal Coat" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preconnect",
        href: "https://img.vietqr.io"
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://zalo.me"
      },
      {
        rel: "preload",
        href: "/lotus-hero.jpg",
        as: "image",
        fetchPriority: "high"
      }
    ],
    scripts: [
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
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "areaServed": ["TP.HCM", "Bình Dương", "Đồng Nai", "Long An"]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "vi", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./thank-you-gsZmQFsv.mjs");
const Route$1 = createFileRoute("/thank-you")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CcoEw7c8.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Sơn kim loại gốc nước Lotus — Không mùi xăng, chống gỉ tốt, thi công sạch hơn"
    }, {
      name: "description",
      content: "Lotus Metal Coat — sơn kim loại hệ nước thay thế sơn dầu. Không mùi xăng, an toàn trong nhà, chống gỉ tốt trên sắt, mạ kẽm, nhôm. Có hệ 2in1 thi công nhanh, không cần lót riêng."
    }, {
      property: "og:title",
      content: "Sơn kim loại gốc nước Lotus — Không mùi xăng, chống gỉ tốt, thi công sạch hơn"
    }, {
      property: "og:description",
      content: "Lotus Metal Coat — sơn kim loại hệ nước thay thế sơn dầu. Không mùi xăng, an toàn trong nhà, chống gỉ tốt trên sắt, mạ kẽm, nhôm. Có hệ 2in1 thi công nhanh, không cần lót riêng."
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }]
  })
});
const ThankYouRoute = Route$1.update({
  id: "/thank-you",
  path: "/thank-you",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ThankYouRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
