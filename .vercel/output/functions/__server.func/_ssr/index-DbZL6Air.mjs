import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu, S as Shield, P as Paintbrush, L as Layers, R as RefreshCw, D as Droplets, a as Sparkles, b as ShoppingCart, C as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function StickyBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "#combo",
      className: "flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E8541A] px-4 py-3 text-sm font-semibold text-white active:scale-[0.98]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-4" }),
        "Đặt hàng ngay"
      ]
    }
  ) }) });
}
const COLORS = [
  { code: "LDTM-208", name: "Black", hex: "#0b0b0d" },
  { code: "LDTM-201", name: "Midnight Navy", hex: "#103652" },
  { code: "LDTM-216", name: "Velvet Wine", hex: "#812020" },
  { code: "LDTM-219", name: "Ancient Fern", hex: "#2e3d24" },
  { code: "LDTM-209", name: "Black Knight", hex: "#1f2a2c" },
  { code: "LDTM-204", name: "Blue Lagoon", hex: "#3a83a8" },
  { code: "LDTM-223", name: "Exotic Red", hex: "#d63016" },
  { code: "LDTM-220", name: "Buffet Green", hex: "#3a6b40" },
  { code: "LDTM-210", name: "Black Horizon", hex: "#2a3536" },
  { code: "LDTM-205", name: "Tropical Mint", hex: "#9be3d0" },
  { code: "LDTM-225", name: "Solar Orange", hex: "#e88a3a" },
  { code: "LDTM-221", name: "Herb Garden", hex: "#52663a" },
  { code: "LDTM-211", name: "Whale Gray", hex: "#8a8c8b" },
  { code: "LDTM-202", name: "Tech Blue", hex: "#2c64b8" },
  { code: "LDTM-224", name: "Peach Blush", hex: "#e8a7a3" },
  { code: "LDTM-222", name: "Hunter Green", hex: "#1e6b34" },
  { code: "LDTM-212", name: "Ash Mist", hex: "#a8aaa8" },
  { code: "LDTM-203", name: "Blue Sky", hex: "#5cb0e6" },
  { code: "LDTM-217", name: "Burnt Walnut", hex: "#4a2218" },
  { code: "LDTM-215", name: "Earthwood", hex: "#4c4a44" },
  { code: "LDTM-213", name: "Silken Fog", hex: "#ebe9e3" },
  { code: "LDTM-206", name: "River Valley", hex: "#b6bfbe" },
  { code: "LDTM-218", name: "Chocolate Noir", hex: "#3b201a" },
  { code: "LDTM-227", name: "Sun Porch", hex: "#f0d340" },
  { code: "LDTM-214", name: "White", hex: "#fafaf7" },
  { code: "LDTM-207", name: "Stone Beige", hex: "#bdb5a3" },
  { code: "LDTM-226", name: "Burnt Caramel", hex: "#a55a26" },
  { code: "LDTM-228", name: "Lemon Twist", hex: "#f4ed9e" }
];
function ColorChart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "bang-mau", className: "bg-[#F7F5F2] py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E8541A]", children: "BẢNG MÀU" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1] text-[#1C2B2B]", children: "Bảng màu Lotus Metal Coat — 28 mã màu tiêu chuẩn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-base text-muted-foreground sm:text-lg", children: [
        "Mỗi mã màu đều có sẵn cho hệ ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#1C2B2B]", children: "2in1 / DTM" }),
        " và",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#1C2B2B]", children: "Finish" }),
        ". Màu hiển thị trên màn hình có thể chênh lệch nhẹ so với thực tế — vui lòng yêu cầu mẫu màu thật trước khi đặt số lượng lớn."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4", children: COLORS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group overflow-hidden rounded-xl border border-border bg-white ring-soft transition hover:-translate-y-0.5 hover:ring-glow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "aspect-[5/3] w-full",
                style: { backgroundColor: c.hex },
                "aria-label": `${c.code} ${c.name}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2 px-3 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate font-display text-sm font-bold text-foreground", children: c.code }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: c.name })
            ] }) })
          ]
        },
        c.code
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-[#E8E4DC] bg-white p-5 sm:p-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold sm:text-2xl text-[#1C2B2B]", children: "28 mã màu chính hãng Lotus Metal Coat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base", children: "Chọn màu ưng ý và đặt hàng ngay — Lotus giao hàng tận nơi trên toàn quốc." })
      ] })
    ] })
  ] }) });
}
const HOTLINE = "0943 966 662";
const HOTLINE_TEL = "0943966662";
const ZALO_NUMBER = "0943966662";
const ZALO_URL = `https://zalo.me/${ZALO_NUMBER}`;
const BRAND = "Lotus Paint";
const PRODUCT_LINE = "Lotus Metal Coat";
const COMPANY_NAME = "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG";
const COMPANY_TAX_ID = "0313351528";
const COMPANY_ADDRESS = "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM";
const logoImg = "/assets/lotus-logo-C0CbJd0t.png";
const heroImg = "/assets/son-kim-loai-lotus-hero-Ckt9od2u.jpg";
const appRailing = "/assets/son-cau-thang-sat-lotus-Dme1JeZu.jpg";
const appFence = "/assets/son-container-lotus-DXzGK1qc.jpg";
const appSteel = "/assets/son-ket-cau-thep-lotus-bkQlFYok.jpg";
const appAluminum = "/assets/son-duong-ong-cuu-hoa-lotus-DxvHuIUw.jpg";
const appGate = "/assets/son-cong-sat-son-lotus-kim-loai-Cwd17TcU.jpg";
const appDoor = "/assets/son-thep-ma-kem-lotus-BxRRcJOk.jpg";
const project1 = "/assets/project-1-CERSa3Z3.jpg";
const project2 = "/assets/son-cua-sat-khong-mui-D4yg4d0R.jpg";
const primerImg = "/assets/son-lot-cho-kim-loai-lotus-metal-coat-primer-CvlkzFGr.png";
const finishImg = "/assets/son-phu-mau-kim-loai-lotus-meta-coat-finish-Bqw05O8k.png";
const dtmImg = "/assets/son-kim-loai-da-nang-lotus-metal-coat-2in1-DoiKRSuF.png";
const ORANGE = "#E8541A";
const OFFWHITE = "#F7F5F2";
const TEXT = "#1A1A1A";
const LABEL_CLS = "text-[12px] font-semibold uppercase tracking-[0.12em]";
function LotusLanding() {
  const [c1q1, setC1q1] = reactExports.useState(0);
  const [c1q2, setC1q2] = reactExports.useState(0);
  const [c2q1, setC2q1] = reactExports.useState(0);
  const [c2q2, setC2q2] = reactExports.useState(0);
  const [c3q1, setC3q1] = reactExports.useState(0);
  const [c3q2, setC3q2] = reactExports.useState(0);
  const [c1q1Color, setC1q1Color] = reactExports.useState("");
  const [c1q2Color, setC1q2Color] = reactExports.useState("");
  const [c2q1Color, setC2q1Color] = reactExports.useState("");
  const [c2q2Color, setC2q2Color] = reactExports.useState("");
  const [c3q1Color, setC3q1Color] = reactExports.useState("");
  const [c3q2Color, setC3q2Color] = reactExports.useState("");
  const [c1q1Custom, setC1q1Custom] = reactExports.useState("");
  const [c1q2Custom, setC1q2Custom] = reactExports.useState("");
  const [c2q1Custom, setC2q1Custom] = reactExports.useState("");
  const [c2q2Custom, setC2q2Custom] = reactExports.useState("");
  const [c3q1Custom, setC3q1Custom] = reactExports.useState("");
  const [c3q2Custom, setC3q2Custom] = reactExports.useState("");
  const [paymentMethod, setPaymentMethod] = reactExports.useState("cod");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white pb-20 md:pb-0", style: { color: TEXT }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Decision, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Applications, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ColorChart, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Combos,
        {
          c1q1,
          setC1q1,
          c1q1Color,
          setC1q1Color,
          c1q1Custom,
          setC1q1Custom,
          c1q2,
          setC1q2,
          c1q2Color,
          setC1q2Color,
          c1q2Custom,
          setC1q2Custom,
          c2q1,
          setC2q1,
          c2q1Color,
          setC2q1Color,
          c2q1Custom,
          setC2q1Custom,
          c2q2,
          setC2q2,
          c2q2Color,
          setC2q2Color,
          c2q2Custom,
          setC2q2Custom,
          c3q1,
          setC3q1,
          c3q1Color,
          setC3q1Color,
          c3q1Custom,
          setC3q1Custom,
          c3q2,
          setC3q2,
          c3q2Color,
          setC3q2Color,
          c3q2Custom,
          setC3q2Custom,
          paymentMethod
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormSection,
        {
          c1q1,
          c1q1Color,
          setC1q1Color,
          c1q1Custom,
          setC1q1Custom,
          c1q2,
          c1q2Color,
          setC1q2Color,
          c1q2Custom,
          setC1q2Custom,
          c2q1,
          c2q1Color,
          setC2q1Color,
          c2q1Custom,
          setC2q1Custom,
          c2q2,
          c2q2Color,
          setC2q2Color,
          c2q2Custom,
          setC2q2Custom,
          c3q1,
          c3q1Color,
          setC3q1Color,
          c3q1Custom,
          setC3q1Custom,
          c3q2,
          c3q2Color,
          setC3q2Color,
          c3q2Custom,
          setC3q2Custom,
          paymentMethod,
          setPaymentMethod
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBar, {})
  ] });
}
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-[#E8E4DC] bg-white/90 backdrop-blur", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Lotus Paint logo", className: "h-9 w-auto sm:h-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden leading-tight sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-neutral-500", children: "Metal Coat" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 text-sm font-medium text-neutral-600 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#san-pham", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Sản phẩm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#chon-he-son", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Chọn hệ sơn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hang-muc", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Hạng mục" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#bang-mau", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Bảng màu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#combo", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Combo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#order-form", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Đặt Hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#du-an", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "Dự án" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full", children: "FAQ" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `tel:${HOTLINE_TEL}`,
            className: "inline-flex items-center rounded-md border border-[#E8E4DC] px-3 py-2 text-sm font-medium hover:bg-neutral-50",
            children: HOTLINE
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: ZALO_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-[#E8541A]/90 transition",
            style: { background: ORANGE },
            children: "Nhắn Zalo"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setMobileMenuOpen(!mobileMenuOpen),
          className: "flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 md:hidden",
          children: mobileMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-6" })
        }
      )
    ] }),
    mobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-[#E8E4DC] bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-x py-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#san-pham",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Sản phẩm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#chon-he-son",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Chọn hệ sơn"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#hang-muc",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Hạng mục"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#bang-mau",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Bảng màu"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#combo",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Combo"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#order-form",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Đặt Hàng"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#du-an",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "Dự án"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#faq",
          onClick: () => setMobileMenuOpen(false),
          className: "block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full",
          children: "FAQ"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-[#E8E4DC]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: ZALO_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => setMobileMenuOpen(false),
          className: "flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95",
          style: { background: ORANGE },
          children: "Nhắn Zalo"
        }
      ) })
    ] }) })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "top", className: "relative overflow-hidden", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-[72px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "SƠN KIM LOẠI GỐC NƯỚC — LOTUS METAL COAT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h1",
        {
          className: "mt-6 font-display font-bold tracking-tight text-balance",
          style: {
            color: TEXT,
            fontSize: "clamp(40px, 7.2vw, 76px)",
            lineHeight: 1.02,
            letterSpacing: "-0.025em"
          },
          children: [
            "Không mùi xăng. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: ORANGE }, children: "Không cần pha dung môi." }),
            " Sơn sắt đẹp và bền hơn."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[17px] leading-relaxed text-neutral-600 sm:text-[18px]", children: "Gốc nước hoàn toàn · Thi công sạch, an toàn trong nhà · Giao hàng toàn quốc" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#san-pham",
          className: "inline-flex items-center justify-center rounded-lg px-7 py-4 text-base font-semibold text-white transition hover:opacity-95",
          style: { background: ORANGE },
          children: "Xem sản phẩm & đặt hàng"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-gradient-to-br from-orange-100/50 to-transparent rounded-3xl blur-2xl opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroImg,
          alt: "Cổng sắt sơn bằng Lotus Metal Coat gốc nước — bề mặt mịn bóng đẹp",
          width: 1536,
          height: 1024,
          loading: "eager",
          fetchPriority: "high",
          className: "relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-orange-900/10"
        }
      )
    ] }) })
  ] }) });
}
function Problem() {
  const pains = [
    "Mùi xăng nồng nặc — thợ phải đeo khẩu trang, chủ nhà phải bỏ đi mấy ngày",
    "Phải pha xăng hoặc dung môi — lỉnh kỉnh, nguy cơ cháy nổ, khó kiểm soát độ loãng",
    "Sơn lên mạ kẽm không bám — bong tróc sau vài tháng dù đã lót",
    "Khô chậm — phải chờ lớp 1 qua ngày mới sơn lớp 2 được",
    "Dư sơn đổ đi — không pha nước được, để lâu đóng cứng lãng phí",
    "Vệ sinh cọ, rulo phải dùng xăng — hôi tay, hại da, khó rửa sạch"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "VẤN ĐỀ THƯỜNG GẶP" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-4xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Sơn dầu đang cho bạn kết quả tốt — hay chỉ quen dùng từ lâu?"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Nhiều người chuyển sang sơn gốc nước rồi mới nhận ra mình đã chịu đựng những vấn đề không đáng có." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3", children: pains.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "border-b border-[#E8E4DC] py-6 pr-6",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-sm font-semibold tabular-nums text-[#1C2B2B]",
              children: String(i + 1).padStart(2, "0")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] leading-snug text-neutral-800", children: p })
        ] })
      },
      p
    )) })
  ] }) });
}
function Solution() {
  const comparison = [
    {
      criteria: "Mùi sơn & An toàn",
      oil: "Hôi nồng nặc mùi xăng dung môi, chứa hàm lượng chất hữu cơ dễ bay hơi (VOCs) độc hại kéo dài.",
      lotus: "Không mùi, dung môi hoàn toàn từ nước sạch. Thi công dễ chịu, an toàn tuyệt đối cho thợ và gia đình.",
      highlight: true
    },
    {
      criteria: "Độ bám dính kẽm",
      oil: "Rất dễ bong tróc từng mảng lớn sau vài tháng sử dụng nếu không lót hoặc xử lý bề mặt cực kỳ phức tạp.",
      lotus: "Bám dính cực chắc nhờ công nghệ Acrylic liên kết chéo cải tiến, thách thức sắt hộp mạ kẽm.",
      highlight: true
    },
    {
      criteria: "Thời gian thi công",
      oil: "Khô rất chậm (8-12 tiếng), phải chờ qua ngày mới phủ lớp tiếp theo. Dễ bám bụi bẩn khi màng sơn chưa khô.",
      lotus: "Khô siêu tốc chỉ trong 30 phút, sơn phủ lớp kế tiếp sau 2 giờ. Hoàn thành toàn bộ công trình trong ngày.",
      highlight: true
    },
    {
      criteria: "Độ bền thời tiết",
      oil: "Dưới nắng nóng gắt, màng sơn dầu cứng giòn, dễ rạn nứt chân chim và bị ngả màu, ố vàng nhanh chóng.",
      lotus: "Màng sơn dẻo dai đàn hồi cao, chống tia UV cực tốt, không bị giòn nứt hay ngả màu dưới mọi thời tiết.",
      highlight: true
    },
    {
      criteria: "Vệ sinh & Dọn dẹp",
      oil: "Bắt buộc dùng dung môi (xăng thơm, dầu hỏa) để tẩy rửa. Gây hôi tay, hại da và nguy cơ cháy nổ cao.",
      lotus: "Dễ dàng rửa sạch cọ, rulo, tay chân chỉ bằng nước sạch. Thân thiện với môi trường, dọn dẹp cực nhanh.",
      highlight: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12 lg:items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 lg:sticky lg:top-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "GIẢI PHÁP ĐỘT PHÁ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "mt-4 font-display font-bold text-balance text-[#1C2B2B]",
          style: { fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
          children: "Công nghệ gốc nước xóa bỏ mọi nhược điểm sơn dầu."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[16px] leading-relaxed text-neutral-600", children: "Lotus Metal Coat giải quyết triệt để những nỗi lo lớn nhất của người thợ và chủ nhà khi sơn kim loại. Không chỉ là sơn, đây là giải pháp bảo vệ tối ưu." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6 border-t border-[#E8E4DC] pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-extrabold text-[#2D7A3A] font-display", children: "0%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-neutral-800", children: "Không mùi xăng dung môi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-0.5", children: "Sơn xong dọn dẹp nhẹ nhàng, dọn vào ở được ngay." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-extrabold text-[#2D7A3A] font-display", children: "2x" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-bold text-neutral-800", children: "Bền màu & Kháng UV gấp đôi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-0.5", children: "Không giòn nứt hay ố vàng dưới nắng nóng khắc nghiệt." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white shadow-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 bg-[#1C2B2B] p-4 text-xs font-bold uppercase tracking-wider text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: "TIÊU CHÍ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4 pl-2 text-neutral-400", children: "SƠN DẦU TRUYỀN THỐNG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-5 pl-4 text-emerald-400", children: "SƠN GỐC NƯỚC LOTUS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-[#E8E4DC]", children: comparison.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 p-5 text-sm items-start transition hover:bg-neutral-50/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3 font-bold text-neutral-800 pr-2 text-sm", children: row.criteria }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4 text-neutral-600 text-sm pr-4 pl-2 leading-relaxed border-l border-neutral-100", children: row.oil }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-5 text-neutral-800 text-sm pl-4 leading-relaxed font-medium border-l-2 border-emerald-500/30 bg-emerald-50/10 py-1 rounded-r-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#1C2B2B]", children: row.lotus }) })
        ] }, row.criteria)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-neutral-400 font-medium", children: "* Khảo sát thực tế dựa trên phản hồi của thợ thi công và chủ hộ gia đình tại Việt Nam." })
    ] })
  ] }) }) });
}
function Products() {
  const products = [
    {
      name: "Lotus Metal Coat Primer",
      tag: "SƠN LÓT CHỐNG GỈ",
      desc: "Lót gốc nước chuyên dụng bám dính chắc chắn trên sắt, thép, mạ kẽm — tạo liên kết bền vững ngăn chặn ăn mòn và gỉ sét từ lõi kim loại.",
      uses: "Lớp sơn đầu tiên bắt buộc cho hệ sơn 2 lớp tiêu chuẩn. Cực kỳ khuyên dùng cho cửa cổng ngoài trời, hàng rào, giàn sắt chịu nắng mưa liên tục.",
      color: "Trắng",
      dilution: "Nước sạch ~ 10% (nếu cần thiết)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30-60 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng",
      icon: Shield,
      image: primerImg
    },
    {
      name: "Lotus Metal Coat Finish",
      tag: "SƠN PHỦ MÀU HOÀN THIỆN",
      desc: "Sơn màu cao cấp phủ bảo vệ và trang trí. Tạo màng sơn mịn đẹp vượt trội, bóng nhẹ sang trọng, giữ màu tối ưu dưới thời tiết nắng nóng khắc nghiệt.",
      uses: "Sơn phủ màu trang trí (lớp thứ 2) sau khi đã lót Primer. Thích hợp cho tất cả bề mặt kim loại nội và ngoại thất cần độ thẩm mỹ và độ bền màu cao.",
      color: "28 mã màu chính hãng",
      dilution: "Nước sạch ~ 10% (nếu cần thiết)",
      coverage: "6 - 7 m²/kg/lớp",
      time: "30-45 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng - Bóng 50% - Mờ",
      icon: Paintbrush,
      image: finishImg
    },
    {
      name: "Lotus Metal Coat 2in1 / DTM",
      tag: "SƠN ĐA NĂNG ĐỒNG THỜI (2-TRONG-1)",
      desc: "Sản phẩm đột phá tích hợp lót chống gỉ và phủ màu trong cùng một bước sơn. Bâm dính trực tiếp cực mạnh lên sắt mạ kẽm, sắt hộp không cần sơn lót.",
      uses: "Giải pháp thi công siêu tốc cho các công trình sắt mạ kẽm trong nhà và ngoài trời ít chịu tác động ăn mòn trực tiếp từ thời tiết.",
      color: "28 mã màu chính hãng",
      dilution: "Nước sạch ~ 10% (nếu cần thiết)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng - Bóng 50% - Mờ",
      icon: Layers,
      image: dtmImg
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "san-pham", className: "bg-white py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "CHI TIẾT SẢN PHẨM" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance text-[#1C2B2B]",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Thông số kỹ thuật & Hướng dẫn sử dụng chi tiết."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Mỗi dòng sản phẩm được Lotus thiết kế chuyên biệt để mang lại hiệu quả bảo vệ bền vững nhất cho từng loại công trình." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 lg:grid-cols-3", children: products.map((p) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative flex flex-col rounded-xl border bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-[#E8E4DC]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl mb-5 aspect-[16/10] flex items-center justify-center bg-[#F7F5F2] border border-[#E8E4DC]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.image,
                alt: p.name === "Lotus Metal Coat Primer" ? "Lotus Metal Coat Primer — sơn lót chống gỉ gốc nước cho sắt thép" : p.name === "Lotus Metal Coat Finish" ? "Lotus Metal Coat Finish — sơn phủ màu hoàn thiện gốc nước 28 màu" : "Lotus Metal Coat 2in1 DTM — sơn thẳng lên mạ kẽm không cần lót riêng",
                loading: "lazy",
                width: 400,
                height: 250,
                className: "max-w-[100%] max-h-[100%] object-contain transition duration-300 hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-extrabold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded", children: p.tag }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-extrabold text-neutral-900 tracking-tight", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-neutral-600 min-h-[72px]", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl bg-neutral-50 p-4 border border-neutral-100/50 space-y-2.5 text-xs text-neutral-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1 border-b border-neutral-200/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-400 uppercase tracking-wide", children: "Màu sơn:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-800", children: p.color })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1 border-b border-neutral-200/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-400 uppercase tracking-wide", children: "Định mức phủ:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-800", children: p.coverage })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1 border-b border-neutral-200/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-400 uppercase tracking-wide", children: "Thời gian khô:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-800", children: p.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between py-1 border-b border-neutral-200/40", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-400 uppercase tracking-wide", children: "Pha loãng:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-800", children: p.dilution })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-400 uppercase tracking-wide", children: "Bề mặt màng sơn:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-800", children: p.finish })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-[13px] leading-relaxed text-neutral-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-800", children: "Ứng dụng phù hợp: " }),
              p.uses
            ] })
          ]
        },
        p.name
      );
    }) })
  ] }) });
}
function Decision() {
  const [activeTab, setActiveTab] = reactExports.useState("standard");
  const standardSteps = [
    {
      step: 1,
      title: "Vệ sinh bề mặt kim loại",
      desc: "Chà nhám sạch các vết gỉ sét cũ, bụi bẩn, dầu mỡ bám dính. Lau khô hoàn toàn bằng khăn sạch để đảm bảo lực bám dính tốt nhất.",
      icon: RefreshCw
    },
    {
      step: 2,
      title: "Sơn 1 lớp lót Primer chống gỉ",
      desc: "Sơn đều 1 lớp lót chống gỉ Lotus Metal Coat Primer. Đây là lớp bảo vệ cốt lõi giúp ngăn chặn oxy hóa ăn mòn sắt thép từ sâu bên trong.",
      icon: Shield
    },
    {
      step: 3,
      title: "Sơn 1 lớp màu phủ hoàn thiện",
      desc: "Sơn tiếp 2 lớp phủ màu Lotus Metal Coat Finish sau khi lớp lót đã khô (khoảng 2 giờ). Đảm bảo bề mặt lên màu chuẩn xác, mịn bóng và kháng tia UV.",
      icon: Paintbrush
    },
    {
      step: 4,
      title: "Rửa sạch dụng cụ bằng nước",
      desc: "Sơn gốc nước khô nhanh, không dính két. Chỉ cần đưa cọ vẽ, rulo dưới vòi nước sạch xả nhẹ là sạch bóng, không cần xăng dầu hôi hôi.",
      icon: Droplets
    }
  ];
  const dtmSteps = [
    {
      step: 1,
      title: "Vệ sinh bề mặt sắt hộp",
      desc: "Lau sạch dầu mỡ phủ chống gỉ trên bề mặt sắt hộp mạ kẽm. Đảm bảo bề mặt khô ráo hoàn toàn trước khi lăn sơn.",
      icon: RefreshCw
    },
    {
      step: 2,
      title: "Sơn trực tiếp lớp thứ nhất",
      desc: "Sơn trực tiếp 1 lớp Lotus Metal Coat 2in1 lên kim loại mà không cần lót. Màng sơn tự liên kết bám dính siêu chắc chắn.",
      icon: Paintbrush
    },
    {
      step: 3,
      title: "Sơn lớp thứ hai để lên màu đều",
      desc: "Chờ 2 giờ cho lớp thứ nhất khô bề mặt, tiến hành sơn tiếp lớp thứ hai. Giúp màng sơn đạt độ dày bảo vệ tối ưu và bóng đẹp đồng màu.",
      icon: Layers
    },
    {
      step: 4,
      title: "Rửa cọ lăn bằng nước sạch",
      desc: "Không mùi khó chịu, không dính tay. Vệ sinh toàn bộ dụng cụ thi công cực kỳ nhanh gọn và thân thiện với môi trường chỉ bằng nước máy.",
      icon: Droplets
    }
  ];
  const premiumSteps = [
    {
      step: 1,
      title: "Vệ sinh bề mặt kim loại",
      desc: "Chà nhám sạch các vết gỉ sét cũ, bụi bẩn, dầu mỡ bám dính. Lau khô hoàn toàn bằng khăn sạch để đảm bảo lực bám dính tốt nhất.",
      icon: RefreshCw
    },
    {
      step: 2,
      title: "Sơn 1 lớp lót Primer chống gỉ",
      desc: "Sơn đều 1 lớp lót chống gỉ Lotus Metal Coat Primer. Đây là lớp bảo vệ cốt lõi giúp ngăn chặn oxy hóa ăn mòn sắt thép từ sâu bên trong.",
      icon: Shield
    },
    {
      step: 3,
      title: "Sơn 1 lớp màu phủ hoàn thiện",
      desc: "Sơn tiếp 2 lớp phủ màu Lotus Metal Coat Finish sau khi lớp lót đã khô (khoảng 2 giờ). Đảm bảo bề mặt lên màu chuẩn xác, mịn bóng và kháng tia UV.",
      icon: Paintbrush
    },
    {
      step: 4,
      title: "Sơn 1 lớp phủ bóng bảo vệ ngoài trời",
      desc: "Sơn thêm 1 lớp sơn phủ bóng trong suốt bảo vệ ngoài trời. Tạo lớp màng chắn tia UV, chịu mưa nắng kéo dài, giữ màu bền vững.",
      icon: Sparkles
    },
    {
      step: 5,
      title: "Rửa sạch dụng cụ bằng nước",
      desc: "Sơn gốc nước khô nhanh, không dính két. Chỉ cần đưa cọ vẽ, rulo dưới vòi nước sạch xả nhẹ là sạch bóng, không cần xăng dầu hôi hôi.",
      icon: Droplets
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "chon-he-son", className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "HỆ SƠN & THI CÔNG" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance text-[#1C2B2B]",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Chọn đúng hệ sơn — Thi công đúng quy trình."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Lotus mang đến quy trình thi công tối giản, tiết kiệm thời gian mà vẫn đảm bảo độ bền tối ưu nhất cho từng hạng mục công trình." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3 border-b border-[#E8E4DC] pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("standard"),
          className: `rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ease-out ${activeTab === "standard" ? "bg-[#1C2B2B] text-white shadow-md" : "bg-white border border-[#E8E4DC] text-neutral-600 hover:bg-[#F7F5F2] hover:border-[#1C2B2B]/30"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block w-8 h-8 rounded-lg text-[16px] font-extrabold leading-8 text-center mr-2 transition-all duration-300 ${activeTab === "standard" ? "bg-white/20 text-white" : "bg-[#1C2B2B]/10 text-[#1C2B2B]"}`, children: "01" }),
            "Hệ chuẩn Bền Bỉ (Lót + Phủ)"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("dtm"),
          className: `rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ease-out ${activeTab === "dtm" ? "bg-[#1C2B2B] text-white shadow-md" : "bg-white border border-[#E8E4DC] text-neutral-600 hover:bg-[#F7F5F2] hover:border-[#1C2B2B]/30"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block w-8 h-8 rounded-lg text-[16px] font-extrabold leading-8 text-center mr-2 transition-all duration-300 ${activeTab === "dtm" ? "bg-white/20 text-white" : "bg-[#1C2B2B]/10 text-[#1C2B2B]"}`, children: "02" }),
            "Hệ 2in1 Siêu Tốc (DTM trực tiếp)"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab("premium"),
          className: `rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ease-out ${activeTab === "premium" ? "bg-[#1C2B2B] text-white shadow-md" : "bg-white border border-[#E8E4DC] text-neutral-600 hover:bg-[#F7F5F2] hover:border-[#1C2B2B]/30"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block w-8 h-8 rounded-lg text-[16px] font-extrabold leading-8 text-center mr-2 transition-all duration-300 ${activeTab === "premium" ? "bg-white/20 text-white" : "bg-[#1C2B2B]/10 text-[#1C2B2B]"}`, children: "03" }),
            "Hệ cao cấp (Lót + Phủ + Bóng)"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: activeTab === "standard" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-neutral-200/60 bg-[#FDFBF7] p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-[#F7F5F2] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1C2B2B] border border-[#E8E4DC]/30", children: "Bền bỉ tối đa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-extrabold text-neutral-900", children: "Quy trình Hệ Chuẩn (Sơn lót + Sơn phủ màu)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl", children: "Khuyên dùng tuyệt đối cho cổng sắt ngoài trời, lan can ban công, hàng rào sắt chịu nắng mưa trực tiếp. Lót chống gỉ trước giúp màng sơn màu bền bỉ gấp hai lần." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#combo",
            className: "hidden md:inline-flex shrink-0 items-center justify-center rounded-xl bg-[#1C2B2B] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95",
            children: "Xem Combo Hệ chuẩn"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: standardSteps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 right-4 flex size-7 items-center justify-center rounded-full bg-[#1C2B2B] text-xs font-bold text-white font-display", children: s.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-sm font-extrabold text-neutral-900 leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: s.desc })
      ] }, s.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#combo",
          className: "md:hidden mt-8 w-full inline-flex items-center justify-center rounded-xl bg-[#1C2B2B] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95",
          children: "Xem Combo Hệ chuẩn"
        }
      )
    ] }) }) : activeTab === "dtm" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-neutral-200/60 bg-[#FDFBF7] p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-[#F7F5F2] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1C2B2B] border border-[#E8E4DC]/30", children: "Thi công siêu tốc" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-extrabold text-neutral-900", children: "Quy trình Hệ 2in1 (Sơn 1 lớp không cần sơn lót)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl", children: "Giải pháp tiết kiệm 50% thời gian thi công cho sắt hộp mạ kẽm, vật dụng sắt mỹ thuật trong nhà. Sơn trực tiếp không cần sơn lót riêng." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#combo",
            className: "hidden md:inline-flex shrink-0 items-center justify-center rounded-xl bg-[#1C2B2B] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95",
            children: "Xem Combo Hệ 2in1"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: dtmSteps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 right-4 flex size-7 items-center justify-center rounded-full bg-[#1C2B2B] text-xs font-bold text-white font-display", children: s.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-sm font-extrabold text-neutral-900 leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: s.desc })
      ] }, s.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#combo",
          className: "md:hidden mt-8 w-full inline-flex items-center justify-center rounded-xl bg-[#2D7A3A] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95",
          children: "Xem Combo Hệ 2in1"
        }
      )
    ] }) }) : activeTab === "premium" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-neutral-200/60 bg-[#FDFBF7] p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-[#F7F5F2] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#1C2B2B] border border-[#E8E4DC]/30", children: "Bảo vệ tối đa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-extrabold text-neutral-900", children: "Quy trình Hệ Cao Cấp (Sơn lót + Sơn phủ màu + Phủ bóng bảo vệ)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl", children: "Giải pháp hoàn hảo cho cổng sắt ngoài trời, lan can ban công, hàng rào sắt chịu nắng mưa trực tiếp. Thêm lớp phủ bóng bảo vệ giúp màng sơn bền vững gấp ba lần." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#combo",
            className: "hidden md:inline-flex shrink-0 items-center justify-center rounded-xl bg-[#1C2B2B] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95",
            children: "Xem Combo Hệ cao cấp"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5", children: premiumSteps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-sm transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 right-4 flex size-7 items-center justify-center rounded-full bg-[#1C2B2B] text-xs font-bold text-white font-display", children: s.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 font-display text-sm font-extrabold text-neutral-900 leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-neutral-600", children: s.desc })
      ] }, s.step)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#combo",
          className: "md:hidden mt-8 w-full inline-flex items-center justify-center rounded-xl bg-[#E8541A] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95",
          children: "Xem Combo Hệ cao cấp"
        }
      )
    ] }) }) : null })
  ] }) });
}
function Applications() {
  const apps = [
    { img: appGate, label: "Cổng sắt" },
    { img: appFence, label: "Vỏ container" },
    { img: appRailing, label: "Cầu thang sắt" },
    { img: appDoor, label: "Thép hộp mạ kẽm" },
    { img: appSteel, label: "Khung thép, kết cấu" },
    { img: appAluminum, label: "Đường ống PCCC" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "hang-muc", className: "bg-white py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "HẠNG MỤC ỨNG DỤNG" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Dùng được cho nhiều hạng mục — trong nhà và ngoài trời."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3", children: apps.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl border border-[#E8E4DC] bg-[#F7F5F2]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: a.img,
            alt: a.label === "Cổng sắt" ? "Cổng sắt thi công sơn Lotus Metal Coat tại TP.HCM" : a.label === "Hàng rào" ? "Hàng rào sắt mạ kẽm sơn 2in1 DTM Lotus — không cần lót riêng" : a.label === "Lan can ban công" ? "Lan can ban công sơn Lotus Metal Coat chống gỉ ngoài trời" : a.label === "Cửa sắt" ? "Cửa sắt sơn hệ Primer + Finish Lotus Metal Coat" : a.label === "Khung thép, kết cấu" ? "Khung thép kết cấu công trình sơn Lotus Metal Coat" : "Mạ kẽm sơn Lotus Metal Coat 2in1 không cần lót",
            loading: "lazy",
            width: 800,
            height: 600,
            className: "relative aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "mt-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] sm:text-[16px] font-semibold text-[#1C2B2B]", children: a.label }) })
    ] }, a.label)) })
  ] }) });
}
const COLOR_OPTIONS = [
  "LDTM-208 Black",
  "LDTM-201 Midnight Navy",
  "LDTM-216 Velvet Wine",
  "LDTM-219 Ancient Fern",
  "LDTM-209 Black Knight",
  "LDTM-204 Blue Lagoon",
  "LDTM-223 Exotic Red",
  "LDTM-220 Buffet Green",
  "LDTM-210 Black Horizon",
  "LDTM-205 Tropical Mint",
  "LDTM-225 Solar Orange",
  "LDTM-221 Herb Garden",
  "LDTM-211 Whale Gray",
  "LDTM-202 Tech Blue",
  "LDTM-224 Peach Blush",
  "LDTM-222 Hunter Green",
  "LDTM-212 Ash Mist",
  "LDTM-203 Blue Sky",
  "LDTM-217 Burnt Walnut",
  "LDTM-215 Earthwood",
  "LDTM-213 Silken Fog",
  "LDTM-206 River Valley",
  "LDTM-218 Chocolate Noir",
  "LDTM-227 Sun Porch",
  "LDTM-214 White",
  "LDTM-207 Stone Beige",
  "LDTM-226 Burnt Caramel",
  "LDTM-228 Lemon Twist",
  "Tùy chỉnh"
];
function Combos({
  c1q1,
  setC1q1,
  c1q1Color,
  setC1q1Color,
  c1q1Custom,
  setC1q1Custom,
  c1q2,
  setC1q2,
  c1q2Color,
  setC1q2Color,
  c1q2Custom,
  setC1q2Custom,
  c2q1,
  setC2q1,
  c2q1Color,
  setC2q1Color,
  c2q1Custom,
  setC2q1Custom,
  c2q2,
  setC2q2,
  c2q2Color,
  setC2q2Color,
  c2q2Custom,
  setC2q2Custom,
  c3q1,
  setC3q1,
  c3q1Color,
  setC3q1Color,
  c3q1Custom,
  setC3q1Custom,
  c3q2,
  setC3q2,
  c3q2Color,
  setC3q2Color,
  c3q2Custom,
  setC3q2Custom,
  paymentMethod
}) {
  const total1 = c1q1 * 375e3 + c1q2 * 168e4;
  const total2 = c2q1 * 61e4 + c2q2 * 2745e3;
  const total3 = c3q1 * 21e4 + c3q2 * 89e4;
  const grandTotal = total1 + total2 + total3;
  function formatVND(val) {
    return val.toLocaleString("vi-VN") + "đ";
  }
  function Stepper({ value, onChange }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-lg border border-[#E8E4DC] bg-[#F9F8F6]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onChange(Math.max(0, value - 1)),
          className: "flex size-8 items-center justify-center font-semibold text-neutral-600 transition hover:bg-neutral-200/50 disabled:opacity-30 disabled:hover:bg-transparent",
          disabled: value <= 0,
          children: "—"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm font-semibold tabular-nums text-neutral-950", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onChange(value + 1),
          className: "flex size-8 items-center justify-center font-semibold text-neutral-600 transition hover:bg-neutral-200/50",
          children: "+"
        }
      )
    ] });
  }
  const selectCls = "w-full rounded-md border border-[#E8E4DC] bg-[#FDFBF7] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#E8541A] focus:ring-1 focus:ring-[#E8541A]/20 cursor-pointer font-medium";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "combo", className: "bg-white py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "COMBO SẢN PHẨM" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Chọn combo phù hợp với hạng mục của bạn."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Thi công được bằng chổi quét, rulo lăn hoặc súng phun — tùy hạng mục và sở thích." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-8 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative flex flex-col rounded-xl border-2 bg-white p-8 shadow-md",
          style: { borderColor: ORANGE },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white",
                style: { background: ORANGE },
                children: "Khuyên dùng"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500", children: "CƠ BẢN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-[22px] sm:text-[24px] font-bold", children: "Combo thông dụng" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] sm:text-[16px] text-neutral-600", children: "Sơn lót chống gỉ + Sơn phủ màu hoàn thiện" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700", children: "Lotus Metal Coat Primer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700", children: "Lotus Metal Coat Finish" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold text-neutral-800", children: "Combo nhỏ — 2 hũ 1kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold mt-0.5", style: { color: ORANGE }, children: "375.000đ" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c1q1, onChange: setC1q1 })
                ] }),
                c1q1 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-neutral-500 uppercase tracking-wider", children: "Mã màu sơn:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: c1q1Color,
                      onChange: (e) => setC1q1Color(e.target.value),
                      className: selectCls,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Chưa chọn màu" }),
                        COLOR_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  ),
                  c1q1Color === "Tùy chỉnh" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: c1q1Custom,
                      onChange: (e) => setC1q1Custom(e.target.value),
                      placeholder: "Mô tả màu bạn muốn...",
                      className: "mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-3 border-t border-neutral-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold text-neutral-800", children: "Combo lớn — 2 thùng 5kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold mt-0.5", style: { color: ORANGE }, children: "1.680.000đ" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c1q2, onChange: setC1q2 })
                ] }),
                c1q2 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-neutral-500 uppercase tracking-wider", children: "Mã màu sơn:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: c1q2Color,
                      onChange: (e) => setC1q2Color(e.target.value),
                      className: selectCls,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Chưa chọn màu" }),
                        COLOR_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  ),
                  c1q2Color === "Tùy chỉnh" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: c1q2Custom,
                      onChange: (e) => setC1q2Custom(e.target.value),
                      placeholder: "Mô tả màu bạn muốn...",
                      className: "mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-neutral-500", children: "Tạm tính" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold text-neutral-800", children: [
                "Tổng: ",
                formatVND(total1)
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative flex flex-col rounded-xl border bg-white p-8",
          style: { borderColor: "#E8E4DC" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500", children: "CHUYÊN NGHIỆP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-[22px] sm:text-[24px] font-bold", children: "Combo cao cấp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] sm:text-[16px] text-neutral-600", children: "Sơn lót + Sơn phủ màu + Sơn phủ trong suốt bảo vệ ngoài trời" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700", children: "Primer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700", children: "Finish" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700", children: "Sơn phủ trong suốt bảo vệ ngoài trời" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold text-neutral-800", children: "Combo nhỏ — 3 hũ 1kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold mt-0.5", style: { color: ORANGE }, children: "610.000đ" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c2q1, onChange: setC2q1 })
                ] }),
                c2q1 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-neutral-500 uppercase tracking-wider", children: "Mã màu sơn:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: c2q1Color,
                      onChange: (e) => setC2q1Color(e.target.value),
                      className: selectCls,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Chưa chọn màu" }),
                        COLOR_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  ),
                  c2q1Color === "Tùy chỉnh" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: c2q1Custom,
                      onChange: (e) => setC2q1Custom(e.target.value),
                      placeholder: "Mô tả màu bạn muốn...",
                      className: "mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-3 border-t border-neutral-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold text-neutral-800", children: "Combo lớn — 3 thùng 5kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold mt-0.5", style: { color: ORANGE }, children: "2.745.000đ" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c2q2, onChange: setC2q2 })
                ] }),
                c2q2 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-neutral-500 uppercase tracking-wider", children: "Mã màu sơn:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: c2q2Color,
                      onChange: (e) => setC2q2Color(e.target.value),
                      className: selectCls,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Chưa chọn màu" }),
                        COLOR_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  ),
                  c2q2Color === "Tùy chỉnh" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: c2q2Custom,
                      onChange: (e) => setC2q2Custom(e.target.value),
                      placeholder: "Mô tả màu bạn muốn...",
                      className: "mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-neutral-500", children: "Tạm tính" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold text-neutral-800", children: [
                "Tổng: ",
                formatVND(total2)
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative flex flex-col rounded-xl border bg-white p-8",
          style: { borderColor: "#E8E4DC" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500", children: "THI CÔNG NHANH" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-[22px] sm:text-[24px] font-bold", children: "Tiết kiệm lót và phủ màu chung 2in1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] sm:text-[16px] text-neutral-600", children: "Sơn thẳng lên mạ kẽm, sắt hộp — không cần lót riêng." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700", children: "Lotus Metal Coat 2in1 / DTM" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold text-neutral-800", children: "Hũ 1kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold mt-0.5", style: { color: ORANGE }, children: "210.000đ" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c3q1, onChange: setC3q1 })
                ] }),
                c3q1 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-neutral-500 uppercase tracking-wider", children: "Mã màu sơn:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: c3q1Color,
                      onChange: (e) => setC3q1Color(e.target.value),
                      className: selectCls,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Chưa chọn màu" }),
                        COLOR_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  ),
                  c3q1Color === "Tùy chỉnh" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: c3q1Custom,
                      onChange: (e) => setC3q1Custom(e.target.value),
                      placeholder: "Mô tả màu bạn muốn...",
                      className: "mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-3 border-t border-neutral-100", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold text-neutral-800", children: "Thùng 5kg" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold mt-0.5", style: { color: ORANGE }, children: "890.000đ" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c3q2, onChange: setC3q2 })
                ] }),
                c3q2 > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 pl-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-neutral-500 uppercase tracking-wider", children: "Mã màu sơn:" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      value: c3q2Color,
                      onChange: (e) => setC3q2Color(e.target.value),
                      className: selectCls,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Chưa chọn màu" }),
                        COLOR_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  ),
                  c3q2Color === "Tùy chỉnh" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "text",
                      value: c3q2Custom,
                      onChange: (e) => setC3q2Custom(e.target.value),
                      placeholder: "Mô tả màu bạn muốn...",
                      className: "mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-neutral-500", children: "Tạm tính" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold text-neutral-800", children: [
                "Tổng: ",
                formatVND(total3)
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6", style: { background: OFFWHITE }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[18px] sm:text-[20px] font-bold text-neutral-900", children: "Tổng giá trị đơn hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] text-neutral-500 mt-1", children: "Định mức: hũ 1kg ~ 5m2; thùng 5kg ~ 25m2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-right", children: paymentMethod === "online" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-neutral-400 line-through font-medium", children: formatVND(grandTotal) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-extrabold", style: { color: ORANGE }, children: formatVND(Math.round(grandTotal * 0.9)) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-extrabold", style: { color: ORANGE }, children: formatVND(grandTotal) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#order-form",
        onClick: (e) => {
          e.preventDefault();
          document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
        },
        className: "inline-flex w-full items-center justify-center rounded-xl py-4 text-[17px] sm:text-[18px] font-bold text-white transition hover:opacity-95 shadow-md",
        style: { background: ORANGE },
        children: "Tiếp tục điền thông tin đặt hàng"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-[13px] text-neutral-500", children: "Hơn 500+ đơn hàng đã giao thành công" })
  ] }) });
}
function FormSection({
  c1q1,
  c1q1Color,
  setC1q1Color,
  c1q1Custom,
  setC1q1Custom,
  c1q2,
  c1q2Color,
  setC1q2Color,
  c1q2Custom,
  setC1q2Custom,
  c2q1,
  c2q1Color,
  setC2q1Color,
  c2q1Custom,
  setC2q1Custom,
  c2q2,
  c2q2Color,
  setC2q2Color,
  c2q2Custom,
  setC2q2Custom,
  c3q1,
  c3q1Color,
  setC3q1Color,
  c3q1Custom,
  setC3q1Custom,
  c3q2,
  c3q2Color,
  setC3q2Color,
  c3q2Custom,
  setC3q2Custom,
  paymentMethod,
  setPaymentMethod
}) {
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [address, setAddress] = reactExports.useState("");
  const [note, setNote] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const orderItems = [
    { name: "Combo thông dụng nhỏ", qty: c1q1, price: 375e3, color: c1q1Color, custom: c1q1Custom },
    { name: "Combo thông dụng lớn", qty: c1q2, price: 168e4, color: c1q2Color, custom: c1q2Custom },
    { name: "Combo cao cấp nhỏ", qty: c2q1, price: 61e4, color: c2q1Color, custom: c2q1Custom },
    { name: "Combo cao cấp lớn", qty: c2q2, price: 2745e3, color: c2q2Color, custom: c2q2Custom },
    { name: "Hũ 1kg 2in1", qty: c3q1, price: 21e4, color: c3q1Color, custom: c3q1Custom },
    { name: "Thùng 5kg 2in1", qty: c3q2, price: 89e4, color: c3q2Color, custom: c3q2Custom }
  ];
  const activeItems = orderItems.filter((it) => it.qty > 0);
  const grandTotal = orderItems.reduce((sum, it) => sum + it.qty * it.price, 0);
  const discount = paymentMethod === "online" ? Math.round(grandTotal * 0.1) : 0;
  const finalTotal = grandTotal - discount;
  function formatVND(val) {
    return val.toLocaleString("vi-VN") + "đ";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!name.trim()) errs.name = "Vui lòng nhập họ tên";
    const cleanPhone = phone.trim().replace(/\s/g, "");
    if (!phone.trim()) {
      errs.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^\d{10}$/.test(cleanPhone)) {
      errs.phone = "Số điện thoại phải gồm đúng 10 chữ số";
    }
    if (!address.trim()) errs.address = "Vui lòng nhập địa chỉ giao hàng";
    if (activeItems.length === 0) {
      errs.combos = "Vui lòng chọn ít nhất 1 combo ở phía trên";
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const activeItemsData = activeItems.map((it) => {
      const chosenColor = it.color === "Tùy chỉnh" ? it.custom || "Màu tùy chỉnh" : it.color || "Chưa chọn";
      return {
        name: it.name,
        quantity: it.qty,
        unitPrice: it.price,
        color: chosenColor
      };
    });
    const orderData = {
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      note: note.trim(),
      paymentMethod,
      items: activeItemsData,
      subtotal: grandTotal,
      discount,
      total: finalTotal,
      timestamp: Date.now()
    };
    sessionStorage.setItem("lotusOrder", JSON.stringify(orderData));
    window.location.href = `/thank-you?phone=${encodeURIComponent(phone.trim())}`;
  };
  const inputCls = "w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1C2B2B] focus:ring-2 focus:ring-[#1C2B2B]/20";
  const errorInputCls = "border-red-500 ring-2 ring-red-500/20 focus:border-red-500";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "order-form", className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-12 lg:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "ĐẶT HÀNG NGAY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "mt-4 font-display font-bold text-balance text-[#1C2B2B]",
          style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
          children: "Hoàn tất đơn hàng — Lotus giao hàng tận nơi."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[17px] leading-relaxed text-neutral-600", children: "Đặt ngay hôm nay — Nhận sơn tại nhà, bắt đầu thi công cuối tuần này. Giao hàng 24–48h tại TP.HCM và các tỉnh lân cận." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, className: "mt-8 rounded-2xl border border-[#E8E4DC] bg-white p-6 sm:p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500", children: "Họ và tên *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: name,
                onChange: (e) => setName(e.target.value),
                placeholder: "Nguyễn Văn A",
                className: `${inputCls} ${errors.name ? errorInputCls : ""}`
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-10 mt-1.5 rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm after:absolute after:bottom-full after:left-4 after:border-4 after:border-transparent after:border-b-red-500", children: errors.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "block relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500", children: "Số điện thoại *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: phone,
                onChange: (e) => setPhone(e.target.value),
                placeholder: "09xx xxx xxx",
                className: `${inputCls} ${errors.phone ? errorInputCls : ""}`
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-10 mt-1.5 rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm after:absolute after:bottom-full after:left-4 after:border-4 after:border-transparent after:border-b-red-500", children: errors.phone })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 block relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500", children: "Địa chỉ giao hàng *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: address,
              onChange: (e) => setAddress(e.target.value),
              placeholder: "Số nhà, đường, phường/xã, quận/huyện, thành phố",
              className: `${inputCls} ${errors.address ? errorInputCls : ""}`
            }
          ),
          errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute z-10 mt-1.5 rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm after:absolute after:bottom-full after:left-4 after:border-4 after:border-transparent after:border-b-red-500", children: errors.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-4 block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500", children: "Ghi chú" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 3,
              value: note,
              onChange: (e) => setNote(e.target.value),
              placeholder: 'Ghi yêu cầu bề mặt "Bóng - Bóng 50% - Mờ"',
              className: inputCls
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-xl border border-[#E8541A]/30 bg-[#FDFBF7] p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold uppercase tracking-wide", style: { color: ORANGE }, children: "Thông tin đơn hàng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-3.5 text-sm text-neutral-800", children: [
            activeItems.length > 0 ? activeItems.map((it) => {
              const displayColor = it.color === "Tùy chỉnh" ? it.custom || "Màu tùy chỉnh chưa ghi chú" : it.color || "Chưa chọn";
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-2 px-1 border-b border-neutral-100/50 last:border-none flex justify-between items-center text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-snug", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-neutral-800", children: [
                    "— ",
                    it.name,
                    " x",
                    it.qty
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-neutral-500 font-medium", children: [
                    "Màu sơn: ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[#2D7A3A]", children: displayColor })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-900", children: formatVND(it.qty * it.price) })
              ] }, it.name);
            }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm italic text-neutral-500", children: "Chưa chọn sản phẩm — vui lòng chọn combo ở trên." }),
            paymentMethod === "online" && grandTotal > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[#2D7A3A] font-semibold text-sm pt-2.5 border-t border-dashed border-neutral-200", children: [
              "— Giảm giá Online (10%): -",
              formatVND(discount)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 border-t border-[#E8E4DC]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-neutral-700", children: "Thành tiền:" }),
            paymentMethod === "online" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-neutral-400 line-through font-medium", children: formatVND(grandTotal) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-extrabold", style: { color: ORANGE }, children: formatVND(finalTotal) })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-extrabold", style: { color: ORANGE }, children: formatVND(grandTotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] leading-relaxed text-neutral-400", children: "* Giá chưa bao gồm phí vận chuyển. Có thể thay đổi tùy diện tích thực tế." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] leading-relaxed text-neutral-400", children: "Định mức: Combo nhỏ 1kg ~ 5m²; Combo lớn 5kg ~ 25m²" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-[#E8E4DC] pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-3 block text-xs font-semibold uppercase tracking-wide text-neutral-500", children: "Phương thức thanh toán" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => setPaymentMethod("cod"),
                className: `flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${paymentMethod === "cod" ? "border-[#2D7A3A] bg-[#E8F5E9]/10" : "border-[#E8E4DC] bg-white hover:bg-neutral-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "payment",
                      value: "cod",
                      checked: paymentMethod === "cod",
                      onChange: () => setPaymentMethod("cod"),
                      className: "accent-[#2D7A3A] size-4 cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-neutral-800", children: "Thanh toán khi nhận hàng (COD)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-0.5", children: "Không giảm giá" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                onClick: () => setPaymentMethod("online"),
                className: `flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${paymentMethod === "online" ? "border-[#2D7A3A] bg-[#E8F5E9]/10" : "border-[#E8E4DC] bg-white hover:bg-neutral-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "radio",
                      name: "payment",
                      value: "online",
                      checked: paymentMethod === "online",
                      onChange: () => setPaymentMethod("online"),
                      className: "accent-[#2D7A3A] size-4 cursor-pointer"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-neutral-800", children: "Chuyển khoản Online" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-[#E8F5E9] px-2 py-0.5 text-[10px] font-bold text-[#2D7A3A]", children: "Tiết kiệm 10%" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#2D7A3A] font-semibold mt-0.5", children: "Giảm ngay 10% và miễn phí giao hàng" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        errors.combos && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-xs text-red-600 font-semibold flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "⚠️ ",
          errors.combos
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            className: "mt-6 flex w-full items-center justify-center rounded-lg py-4 text-base font-bold text-white transition hover:opacity-95 shadow-sm",
            style: { background: "#E8541A" },
            children: "Xác nhận đặt hàng →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs leading-relaxed text-neutral-500", children: "Bằng cách đặt hàng, bạn đồng ý để Lotus liên hệ xác nhận đơn hàng và giao hàng. Đổi trả/hoàn tiền trong vòng 7 ngày nếu sơn không đúng màu đã chọn." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-[#1C2B2B] p-8 text-white lg:sticky lg:top-24 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400", children: "TƯ VẤN NHANH NHẤT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold text-white", children: "Nhắn Zalo Lotus" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] leading-relaxed text-neutral-300", children: "Gửi ảnh hạng mục qua Zalo để được tư vấn đúng hệ sơn, đúng combo và bảng màu phù hợp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-sm text-neutral-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold text-base", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Phản hồi nhanh trong vòng 15 phút" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold text-base", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tư vấn đúng hệ theo từng hạng mục" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 font-bold text-base", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Báo giá rõ ràng, hướng dẫn kỹ thuật chi tiết" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://zalo.me/0943966662",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-8 flex w-full items-center justify-center rounded-lg py-4 text-base font-bold text-white transition hover:opacity-95 shadow-sm",
          style: { background: "#E8541A" },
          children: "Gửi ảnh qua Zalo →"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 border-t border-neutral-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-white text-lg", children: "Hotline: 0943 966 662" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-neutral-400", children: "Giờ làm việc: 8:00 – 18:00, Thứ 2 – Thứ 7" })
      ] })
    ] }) })
  ] }) });
}
function Projects() {
  const items = [
    {
      img: project2,
      item: "Cổng sắt 2 cánh",
      system: "Primer + Finish",
      area: "TP.HCM",
      quote: "Trước giờ toàn dùng sơn dầu, lần này thử Lotus thấy khác hẳn — không có mùi xăng, sơn xong ở nhà luôn được. Bề mặt ra đẹp, mịn không thua gì.",
      author: "Anh Hùng — Chủ nhà"
    },
    {
      img: project1,
      item: "Hàng rào sắt + lan can",
      system: "2in1 / DTM",
      area: "Bình Dương",
      quote: "Dùng 2in1 cho hàng rào mạ kẽm, không cần lót riêng mà vẫn bám chắc. Tiết kiệm được một bước, thi công nhanh hơn rõ ràng. Sau mưa vẫn ổn.",
      author: "Anh Tâm — Nhà thầu"
    },
    {
      img: appSteel,
      item: "Khung thép xưởng",
      system: "Primer + Finish",
      area: "Long An",
      quote: "Chuyển từ sơn dầu sang Lotus cho khung thép xưởng — thợ làm dễ hơn vì không mùi, rửa cọ bằng nước là xong. Chống gỉ tốt, bám chắc trên thép cũ.",
      author: "Anh Phong — Chủ xưởng"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "du-an", className: "bg-white py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "DỰ ÁN THỰC TẾ" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Một số hạng mục đã thi công với hệ sơn Lotus Metal Coat."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-xl border border-[#E8E4DC] bg-white group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: it.img,
            alt: it.item === "Cổng sắt 2 cánh" ? "Dự án cổng sắt 2 cánh thi công Lotus Metal Coat Primer + Finish tại TP.HCM" : it.item === "Hàng rào + lan can" ? "Dự án hàng rào sắt và lan can sơn 2in1 DTM tại Bình Dương" : "Dự án khung thép xưởng sơn Lotus Metal Coat Primer + Finish tại Long An",
            loading: "lazy",
            width: 800,
            height: 600,
            className: "relative aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Chip, { children: [
            "Hạng mục: ",
            it.item
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Chip, { children: [
            "Hệ sơn: ",
            it.system
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Chip, { children: [
            "Khu vực: ",
            it.area
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-[15px] italic leading-relaxed text-neutral-800", children: [
          '"',
          it.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm font-medium text-neutral-500", children: [
          "— ",
          it.author
        ] })
      ] })
    ] }, it.item)) })
  ] }) });
}
function Chip({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700", children });
}
function FAQ() {
  const qa = [
    {
      q: "Sơn gốc nước có bền bằng sơn dầu không?",
      a: "Có, thậm chí bền hơn. Sơn dầu truyền thống dễ bị oxy hóa dẫn đến giòn và nứt nẻ khi sắt co giãn nhiệt dưới nắng. Sơn gốc nước Lotus có màng nhựa dẻo co giãn linh hoạt, chịu nhiệt và kháng UV cực tốt, không bị ố vàng hay bay màu."
    },
    {
      q: "Tôi đang dùng sơn dầu — chuyển sang Lotus có cần xử lý gì trước không?",
      a: "Bạn chỉ cần cạo sạch lớp sơn cũ bị bong tróc, chà nhám nhẹ để tạo độ nhám bề mặt, lau sạch bụi bẩn và dầu mỡ là có thể sơn trực tiếp hệ sơn gốc nước Lotus."
    },
    {
      q: "Lotus 2in1 / DTM có thực sự không cần lót không, hay vẫn cần một bước nào đó?",
      a: "Thực sự không cần sơn lót chống gỉ riêng. Bạn chỉ cần làm sạch bề mặt kim loại rồi sơn trực tiếp 2 lớp Lotus 2in1 / DTM là hoàn thành công việc."
    },
    {
      q: "Sơn lên bề mặt mạ kẽm được không?",
      a: "Hoàn toàn được. Dòng Lotus 2in1 / DTM được thiết kế chuyên biệt với độ bám dính siêu hạng trên các bề mặt khó bám như sắt hộp mạ kẽm mà không cần lót riêng."
    },
    {
      q: "Sơn gốc nước khô bao lâu? Có nhanh hơn sơn dầu không?",
      a: "Nhanh hơn rất nhiều. Sơn Lotus khô bề mặt chỉ sau 30-60 phút và có thể sơn lớp tiếp theo sau 2 giờ, giúp bạn hoàn thành toàn bộ công trình ngay trong ngày thay vì phải chờ qua đêm như sơn dầu."
    },
    {
      q: "Rửa cọ và rulo bằng nước được không — sạch thật không?",
      a: "Được và sạch hoàn toàn cực kỳ dễ dàng. Vì là sơn gốc nước, khi màng sơn chưa khô hoàn toàn, toàn bộ sơn bám trên chổi, rulo hay súng phun đều tan trong nước và dễ dàng rửa sạch dưới vòi nước chảy sinh hoạt."
    },
    {
      q: "Có hỗ trợ tư vấn lượng sơn theo diện tích không?",
      a: "Có. Bạn chỉ cần gửi kích thước hoặc ảnh chụp hạng mục qua Zalo, đội ngũ kỹ thuật của Lotus sẽ tính toán chính xác lượng sơn cần dùng để tránh lãng phí."
    },
    {
      q: "Đặt hàng và giao hàng như thế nào?",
      a: "Rất đơn giản. Bạn chỉ cần điền form liên hệ hoặc nhắn Zalo. Lotus hỗ trợ tư vấn miễn phí, giao hàng tận nơi trên toàn quốc, thanh toán khi nhận hàng."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-3 lg:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "mt-4 font-display font-bold text-balance",
          style: { fontSize: "clamp(26px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
          children: "Câu hỏi hay gặp khi chuyển từ sơn dầu sang sơn gốc nước."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-neutral-600", children: "Câu hỏi thường gặp về sơn Lotus Metal Coat." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: qa.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      AccordionItem,
      {
        value: `item-${i}`,
        className: "overflow-hidden rounded-xl border border-[#E8E4DC] bg-white px-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-display text-base font-semibold hover:no-underline", children: item.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-[15px] leading-relaxed text-neutral-600", children: item.a })
        ]
      },
      i
    )) }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-[#E8E4DC] bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 py-12 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: `${BRAND} logo`, className: "h-12 w-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leading-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-neutral-500", children: PRODUCT_LINE }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-neutral-600", children: "Giải pháp sơn kim loại gốc nước cho cổng, hàng rào, lan can, khung thép và nhiều hạng mục kim loại khác — trong nhà và ngoài trời." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-1.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: COMPANY_NAME }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-neutral-600", children: [
            "MST: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black", children: COMPANY_TAX_ID })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-neutral-600", children: [
            "Đ/c: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black", children: COMPANY_ADDRESS })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neutral-600", children: "Phục vụ khu vực: TP.HCM · Bình Dương · Đồng Nai · Long An · Tây Ninh" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-wider text-neutral-500", children: "Sản phẩm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#san-pham", className: "hover:opacity-70", children: "Metal Coat Primer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#san-pham", className: "hover:opacity-70", children: "Metal Coat Finish" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#san-pham", className: "hover:opacity-70", children: "Metal Coat 2in1 / DTM" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#chon-he-son", className: "hover:opacity-70", children: "So sánh hệ sơn" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold uppercase tracking-wider text-neutral-500", children: "Liên hệ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${HOTLINE_TEL}`, className: "font-semibold hover:opacity-70", children: [
            "Hotline: ",
            HOTLINE
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO_URL, target: "_blank", rel: "noopener noreferrer", className: "hover:opacity-70", children: [
            "Zalo: ",
            HOTLINE
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-neutral-600", children: "Giờ làm việc: 8:00 – 18:00 (T2 – T7)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-[#E8E4DC]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        BRAND,
        " — Lotus Metal Coat. Mọi quyền được bảo lưu."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sơn kim loại gốc nước · Chống gỉ · Bền màu · Dễ thi công" })
    ] }) })
  ] });
}
const SplitComponent = LotusLanding;
export {
  SplitComponent as component
};
