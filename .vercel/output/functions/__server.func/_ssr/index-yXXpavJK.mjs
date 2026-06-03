import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { M as MessageCircle, P as Phone, C as CircleCheck, a as ChevronDown } from "../_libs/lucide-react.mjs";
import { o as objectType, e as enumType, s as stringType } from "../_libs/zod.mjs";
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
const HOTLINE = "0943 966 662";
const HOTLINE_TEL = "0943966662";
const ZALO_NUMBER = "0943966662";
const ZALO_URL = `https://zalo.me/${ZALO_NUMBER}`;
const BRAND = "Lotus Paint";
const PRODUCT_LINE = "Lotus Metal Coat";
const COMPANY_NAME = "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG";
const COMPANY_TAX_ID = "0313351528";
const COMPANY_ADDRESS = "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM";
const schema = objectType({
  name: stringType().trim().min(2, "Vui lòng nhập họ tên").max(80),
  phone: stringType().trim().regex(/^(0|\+84)\d{8,10}$/, "Số điện thoại chưa hợp lệ"),
  item: stringType().trim().min(2, "Vui lòng mô tả hạng mục").max(200),
  surface: enumType(["sat", "thep", "nhom", "ma-kem", "khac"]),
  location: enumType(["trong-nha", "ngoai-troi", "ca-hai"]),
  product: enumType(["primer", "finish", "2in1", "chua-ro"])
});
function ContactForm() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0]] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-[#E8E4DC] bg-white p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto size-12 text-[#1C2B2B]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold", children: "Đã gửi yêu cầu!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-neutral-600", children: "Lotus sẽ liên hệ lại trong giờ làm việc. Để được tư vấn nhanh, bạn có thể nhắn Zalo kèm ảnh hạng mục." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: ZALO_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-5 inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-white hover:bg-[#1C2B2B]/90 transition",
          style: { background: "#1C2B2B" },
          children: "Gửi ảnh qua Zalo ngay →"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "rounded-2xl border border-[#E8E4DC] bg-white p-6 sm:p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold sm:text-2xl", children: "Nhận tư vấn + báo giá phù hợp" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-neutral-600", children: "Lotus sẽ liên hệ lại trong vòng 30 phút trong giờ làm việc." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Họ và tên", error: errors.name, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "name", maxLength: 80, placeholder: "Nguyễn Văn A", className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Số điện thoại", error: errors.phone, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "phone", inputMode: "tel", maxLength: 15, placeholder: "09xx xxx xxx", className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Hạng mục cần sơn", error: errors.item, className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name: "item", maxLength: 200, placeholder: "VD: Cổng sắt 2 cánh, lan can ban công...", className: inputCls }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Loại bề mặt", error: errors.surface, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "surface", defaultValue: "sat", className: inputCls, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sat", children: "Sắt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "thep", children: "Thép" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "nhom", children: "Nhôm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ma-kem", children: "Mạ kẽm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "khac", children: "Khác / chưa rõ" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Vị trí sử dụng", error: errors.location, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "location", defaultValue: "ngoai-troi", className: inputCls, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "trong-nha", children: "Trong nhà" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ngoai-troi", children: "Ngoài trời" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ca-hai", children: "Cả trong và ngoài" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Muốn chọn", error: errors.product, className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "product", defaultValue: "chua-ro", className: inputCls, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "primer", children: "Lotus Metal Coat Primer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "finish", children: "Lotus Metal Coat Finish" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "2in1", children: "Lotus Metal Coat 2in1 / DTM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "chua-ro", children: "Chưa rõ — cần tư vấn" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "submit",
        className: "mt-6 flex w-full items-center justify-center rounded-lg px-6 py-4 text-base font-semibold text-white transition hover:opacity-95",
        style: { background: "#E8541A" },
        children: "Đặt hàng / Nhận tư vấn →"
      }
    )
  ] });
}
const inputCls = "w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1C2B2B] focus:ring-2 focus:ring-[#1C2B2B]/20";
function Field({
  label,
  children,
  error,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `block ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-medium uppercase tracking-wide text-neutral-500", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-red-600", children: error })
  ] });
}
function StickyBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: ZALO_URL,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#1C2B2B] px-4 py-3 text-sm font-semibold text-white active:scale-[0.98]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          "Nhắn Zalo"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: `tel:${HOTLINE_TEL}`,
        className: "flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground active:scale-[0.98]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
          "Đặt hàng"
        ]
      }
    )
  ] }) });
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold sm:text-2xl text-[#1C2B2B]", children: "Cần xem mã màu thật trước khi đặt hàng?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base", children: [
          "Nhắn Zalo gửi mã màu (ví dụ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "LDTM-201" }),
          ") — Lotus sẽ gửi ảnh thực tế, báo giá và tư vấn lượng sơn cần dùng."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: ZALO_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1C2B2B] hover:bg-[#1C2B2B]/90 px-5 py-3 text-sm font-semibold text-white transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
              " Nhắn Zalo xem mã màu thật"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const logoImg = "/assets/lotus-logo-C0CbJd0t.png";
const heroImg = "/assets/lotus-hero-C2qi7crC.jpg";
const appRailing = "/assets/app-railing-DOpXdMKv.jpg";
const appFence = "/assets/app-fence-CZQjZICG.jpg";
const appSteel = "/assets/app-steel-CWccN3Pg.jpg";
const appAluminum = "/assets/app-aluminum-AwgzTVTa.jpg";
const project1 = "/assets/project-1-CERSa3Z3.jpg";
const project2 = "/assets/project-2-DJJnqbfh.jpg";
const ORANGE = "#E8541A";
const OFFWHITE = "#F7F5F2";
const DARK = "#1C2B2B";
const TEXT = "#1A1A1A";
const LABEL_CLS = "text-[12px] font-semibold uppercase tracking-[0.12em]";
function LotusLanding() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white pb-20 md:pb-0", style: { color: TEXT }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Problem, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solution, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ColorChart, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Decision, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Applications, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Combos, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FormSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyBar, {})
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-[#E8E4DC] bg-white/90 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-16 items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "Lotus Paint logo", className: "h-9 w-auto sm:h-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden leading-tight sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-neutral-500", children: "Metal Coat" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 text-sm font-medium text-neutral-600 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#san-pham", className: "hover:text-black", children: "Sản phẩm" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#bang-mau", className: "hover:text-black", children: "Bảng màu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#chon-he-son", className: "hover:text-black", children: "Chọn hệ sơn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#combo", className: "hover:text-black", children: "Combo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hang-muc", className: "hover:text-black", children: "Hạng mục" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#du-an", className: "hover:text-black", children: "Dự án" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "hover:text-black", children: "FAQ" })
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
    ] })
  ] }) });
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: ZALO_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center rounded-lg px-7 py-4 text-base font-semibold text-white transition hover:opacity-95",
            style: { background: ORANGE },
            children: "Nhắn Zalo để chọn đúng hệ sơn →"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#san-pham",
            className: "inline-flex items-center justify-center rounded-lg border-2 px-7 py-4 text-base font-semibold transition hover:bg-[#1C2B2B] hover:text-white",
            style: { borderColor: DARK, color: DARK },
            children: "Xem sản phẩm & đặt hàng"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: heroImg,
        alt: "Cổng kim loại sơn bằng Lotus Metal Coat — bề mặt mịn, bóng đẹp",
        width: 1536,
        height: 1024,
        className: "aspect-[4/5] w-full rounded-2xl object-cover"
      }
    ) })
  ] }) });
}
function Problem() {
  const pains = [
    "Mùi xăng nồng nặc — thợ phải đeo khẩu trang, chủ nhà phải bỏ đi mấy ngày",
    "Phải pha xăng hoặc dung môi — lỉnh kỉnh, nguy cơ cháy nổ, khó kiểm soát độ loãng",
    "Sơn lên mạ kẽm hoặc nhôm không bám — bong tróc sau vài tháng dù đã lót",
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
  const lines = [
    {
      tag: "LỚP LÓT",
      name: "Lotus Metal Coat Primer",
      desc: "Lớp nền chống gỉ gốc nước — bám chắc lên sắt mới, sắt cũ, cả nhôm và mạ kẽm. Lót trước khi sơn màu để hệ sơn bền lâu hơn đáng kể."
    },
    {
      tag: "LỚP PHỦ",
      name: "Lotus Metal Coat Finish",
      desc: "Sơn màu hoàn thiện gốc nước — phủ lên lớp lót để có bề mặt đẹp, đồng màu, bền thời tiết. Không mùi, dễ sơn lại nếu cần."
    },
    {
      tag: "ĐA NĂNG — KHUYÊN DÙNG",
      name: "Lotus Metal Coat 2in1 / DTM",
      desc: "Sơn thẳng lên sắt hộp mạ kẽm mà không cần lót riêng — lý tưởng cho thợ thi công cần tiết kiệm bước mà vẫn chống gỉ đạt yêu cầu."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "GIẢI PHÁP LOTUS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Một bộ sản phẩm. Ba lựa chọn rõ ràng."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Gốc nước hoàn toàn — pha nước, rửa nước, không xăng dung môi. Chọn đúng hệ theo hạng mục là xong." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: lines.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-[#E8E4DC] bg-white p-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "span",
              {
                className: "font-display text-3xl font-bold tabular-nums text-[#1C2B2B]",
                children: [
                  "0",
                  i + 1
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500", children: l.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-bold", children: l.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] leading-relaxed text-neutral-600", children: l.desc })
        ]
      },
      l.name
    )) })
  ] }) });
}
function Products() {
  const products = [
    {
      name: "Lotus Metal Coat Primer",
      tag: "SƠN LÓT CHỐNG GỈ",
      desc: "Lót gốc nước bám chắc trên sắt, thép, nhôm, mạ kẽm — ngay cả bề mặt khó bám mà sơn dầu thường trượt.",
      uses: "Bước đầu tiên của hệ chuẩn 2 lớp — cổng, lan can, hàng rào cần độ bền cao."
    },
    {
      name: "Lotus Metal Coat Finish",
      tag: "SƠN PHỦ MÀU",
      desc: "Màu hoàn thiện đẹp, đều, không loang — sơn lên sau lớp lót khi khô. Rửa cọ bằng nước, không mùi, thi công trong nhà được.",
      uses: "Đi cùng Primer tạo hệ 2 lớp chuẩn — cho cổng, cửa sắt, lan can, khung thép."
    },
    {
      name: "Lotus Metal Coat 2in1 / DTM",
      tag: "ĐA NĂNG — KHUYÊN DÙNG",
      desc: "Sơn trực tiếp lên sắt mạ kẽm, nhôm, sắt hộp — không cần lót. Một bước, tiết kiệm thời gian, vẫn chống gỉ và bám dính đạt yêu cầu.",
      uses: "Thi công nhanh, hạng mục không quá khắc nghiệt — cổng, hàng rào, nội thất sắt trong nhà.",
      featured: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "san-pham", className: "bg-white py-[72px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "SẢN PHẨM" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Chọn đúng sản phẩm cho hạng mục của bạn."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Mỗi sản phẩm phục vụ một bước khác nhau trong quy trình — hoặc gộp làm một nếu chọn 2in1." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex flex-col rounded-xl border bg-white p-8",
        style: {
          borderColor: "#E8E4DC"
        },
        children: [
          p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white",
              style: { background: ORANGE },
              children: "Khuyên dùng"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] leading-relaxed text-neutral-600", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 text-[14px] leading-relaxed text-neutral-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Phù hợp: " }),
            p.uses
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#form",
              className: "mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E8541A]/90",
              style: { background: ORANGE },
              children: "Chọn sản phẩm này →"
            }
          )
        ]
      },
      p.name
    )) })
  ] }) });
}
function Decision() {
  const rows = [
    {
      title: "Hệ chuẩn Primer + Finish",
      desc: "Chọn khi hạng mục ngoài trời, tiếp xúc thời tiết, hoặc cần bề mặt thật đẹp. Hai lớp — lót trước, phủ màu sau. Bền hơn đáng kể so với chỉ sơn phủ đơn.",
      tag: "BỀN LÂU"
    },
    {
      title: "Hệ 2in1 / DTM",
      desc: "Chọn khi sơn sắt hộp mạ kẽm, nhôm, hoặc hạng mục trong nhà không cần quá nhiều lớp. Một sản phẩm làm cả hai việc — không cần lót riêng.",
      tag: "THI CÔNG NHANH"
    },
    {
      title: "Chưa chắc nên chọn loại nào?",
      desc: "Nhắn Zalo gửi ảnh hạng mục thực tế — Lotus tư vấn đúng hệ sơn trong vài phút, miễn phí, không ép mua.",
      tag: "TƯ VẤN MIỄN PHÍ",
      zalo: true
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "chon-he-son", className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "CHỌN HỆ SƠN" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance text-[#1C2B2B]",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Hai hệ sơn — chọn theo hạng mục, không phải theo thói quen."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600", children: "Hệ chuẩn cho độ bền tối ưu. Hệ 2in1 cho thi công nhanh. Cả hai đều gốc nước — không xăng dung môi." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-[#E8E4DC] bg-white p-8 ring-soft",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em]", style: { color: ORANGE }, children: r.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold text-[#1C2B2B]", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[15px] leading-relaxed text-neutral-600", children: r.desc }),
          r.zalo && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: ZALO_URL,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-5 inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#E8541A]/90 transition",
              style: { background: ORANGE },
              children: "Gửi ảnh hạng mục qua Zalo →"
            }
          )
        ]
      },
      r.title
    )) })
  ] }) });
}
function Applications() {
  const apps = [
    { img: heroImg, label: "Cổng sắt" },
    { img: appFence, label: "Hàng rào" },
    { img: appRailing, label: "Lan can ban công" },
    { img: project2, label: "Cửa sắt" },
    { img: appSteel, label: "Khung thép, kết cấu" },
    { img: appAluminum, label: "Nhôm / mạ kẽm" }
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3", children: apps.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: a.img,
          alt: a.label,
          loading: "lazy",
          className: "aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-semibold", children: a.label }) })
    ] }, a.label)) })
  ] }) });
}
function Process() {
  const A = [
    "Vệ sinh bề mặt — tẩy gỉ, lau sạch dầu mỡ và bụi bẩn.",
    "Sơn lớp lót Primer — chống gỉ, tăng bám dính. Khô sau 1–2 giờ (không cần chờ qua đêm như sơn dầu).",
    "Sơn lớp phủ Finish — màu hoàn thiện đẹp, đều.",
    "Rửa cọ bằng nước — không cần xăng, sạch tay, xong việc."
  ];
  const B = [
    "Vệ sinh bề mặt — tẩy gỉ, lau sạch.",
    "Sơn lớp 1 Lotus 2in1 / DTM trực tiếp lên kim loại — không cần lót riêng.",
    "Khô sau 1–2 giờ, sơn lớp 2 để màu đều và chắc hơn.",
    "Rửa cọ bằng nước. Gọn, nhanh, không mùi."
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "QUY TRÌNH THI CÔNG" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "h2",
      {
        className: "mt-4 max-w-3xl font-display font-bold text-balance",
        style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
        children: "Hai cách thi công — đơn giản hơn sơn dầu nhiều."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessCard, { title: "Hệ chuẩn Primer + Finish", tag: "BỀN TỐI ƯU", steps: A }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessCard, { title: "Hệ 2in1 / DTM", tag: "THI CÔNG NHANH", steps: B, accent: true })
    ] })
  ] }) });
}
function ProcessCard({
  title,
  tag,
  steps,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-[#E8E4DC] bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-[#E8E4DC] px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white",
          style: { background: DARK },
          children: tag
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "divide-y divide-[#E8E4DC]", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 px-6 py-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "font-display text-base font-bold tabular-nums",
          style: { color: TEXT, minWidth: 22 },
          children: [
            i + 1,
            "."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-relaxed text-neutral-800", children: s })
    ] }, i)) })
  ] });
}
function Combos() {
  const [c1q1, setC1q1] = reactExports.useState(0);
  const [c1q2, setC1q2] = reactExports.useState(0);
  const [c2q1, setC2q1] = reactExports.useState(0);
  const [c2q2, setC2q2] = reactExports.useState(0);
  const [c3q1, setC3q1] = reactExports.useState(0);
  const [c3q2, setC3q2] = reactExports.useState(0);
  const total1 = c1q1 * 375e3 + c1q2 * 168e4;
  const total2 = c2q1 * 751e3 + c2q2 * 342e4;
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
          className: "relative flex flex-col rounded-xl border bg-white p-8",
          style: { borderColor: "#E8E4DC" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500", children: "CƠ BẢN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold", children: "Combo tiết kiệm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-neutral-600", children: "Sơn lót chống gỉ + Sơn phủ màu hoàn thiện" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700", children: "✓ Lotus Metal Coat Primer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700", children: "✓ Lotus Metal Coat Finish" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-neutral-800", children: "Combo nhỏ — 2 hũ 1kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", style: { color: ORANGE }, children: "375.000đ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c1q1, onChange: setC1q1 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-neutral-800", children: "Combo lớn — 2 thùng 5kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", style: { color: ORANGE }, children: "1.680.000đ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c1q2, onChange: setC1q2 })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500", children: "PHỔ BIẾN NHẤT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold", children: "Combo thông dụng" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-neutral-600", children: "Sơn lót + Sơn phủ màu + Sơn phủ trong suốt bảo vệ ngoài trời" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700", children: "✓ Primer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700", children: "✓ Finish" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700", children: "✓ Sơn phủ trong suốt bảo vệ ngoài trời" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-neutral-800", children: "Combo nhỏ — 3 hũ 1kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", style: { color: ORANGE }, children: "751.000đ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c2q1, onChange: setC2q1 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-neutral-800", children: "Combo lớn — 3 thùng 5kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", style: { color: ORANGE }, children: "3.420.000đ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c2q2, onChange: setC2q2 })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500", children: "THI CÔNG NHANH" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl font-bold", children: "Gói 2in1 / DTM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-neutral-600", children: "Sơn thẳng lên mạ kẽm, nhôm, sắt hộp — không cần lót riêng." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700", children: "✓ Lotus Metal Coat 2in1 / DTM" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-neutral-800", children: "Hũ 1kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", style: { color: ORANGE }, children: "210.000đ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c3q1, onChange: setC3q1 })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-neutral-800", children: "Thùng 5kg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mt-0.5", style: { color: ORANGE }, children: "890.000đ" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { value: c3q2, onChange: setC3q2 })
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-neutral-900", children: "Tổng giá trị đơn hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neutral-500 mt-1", children: "Định mức: hũ 1kg ~ 5m²; thùng 5kg ~ 25m²" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-extrabold", style: { color: ORANGE }, children: formatVND(grandTotal) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#order-form",
        onClick: (e) => {
          e.preventDefault();
          document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
        },
        className: "inline-flex w-full items-center justify-center rounded-xl py-4 text-base font-bold text-white transition hover:opacity-95 shadow-md",
        style: { background: ORANGE },
        children: "Tiếp tục điền thông tin đặt hàng →"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-neutral-500", children: "Hơn 500+ đơn hàng đã giao thành công · Nhắn Zalo gửi ảnh hạng mục để được tư vấn nhanh." })
  ] }) });
}
function FormSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "order-form", className: "py-[72px]", style: { background: OFFWHITE }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid gap-10 lg:grid-cols-2 lg:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: LABEL_CLS, style: { color: ORANGE }, children: "ĐẶT HÀNG & TƯ VẤN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "mt-4 font-display font-bold text-balance text-[#1C2B2B]",
          style: { fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" },
          children: "Nói cho Lotus biết hạng mục của bạn — tư vấn đúng ngay."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[17px] leading-relaxed text-neutral-600", children: "Không cần phải tự chọn sản phẩm nếu chưa chắc. Điền form hoặc gửi ảnh qua Zalo — Lotus xem và tư vấn đúng hệ sơn, đúng lượng, đúng cách thi công." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: ZALO_URL,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-between rounded-xl border border-[#E8E4DC] bg-white px-6 py-5 transition hover:bg-neutral-50 ring-soft",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-[#1C2B2B]", children: "Nhắn Zalo gửi ảnh hạng mục" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-neutral-600", children: "Tư vấn trong vài phút — miễn phí." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-[#1C2B2B]", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `tel:${HOTLINE_TEL}`,
            className: "flex items-center justify-between rounded-xl border border-[#E8E4DC] bg-white px-6 py-5 transition hover:bg-neutral-50 ring-soft",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-[#1C2B2B]", children: [
                  "Gọi ",
                  HOTLINE
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-neutral-600", children: "Giờ làm việc 8:00–18:00, T2–T7." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-[#1C2B2B]", children: "→" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-xl border border-[#E8E4DC] bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.item, loading: "lazy", className: "aspect-[4/3] w-full object-cover" }),
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
      q: "Sơn lên bề mặt mạ kẽm hoặc nhôm được không?",
      a: "Hoàn toàn được. Dòng Lotus 2in1 / DTM được thiết kế chuyên biệt với độ bám dính siêu hạng trên các bề mặt khó bám như sắt hộp mạ kẽm, nhôm, inox mà không cần lót riêng."
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-neutral-600", children: "Còn thắc mắc khác? Nhắn Zalo để được giải đáp trực tiếp." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: ZALO_URL,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-5 inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1C2B2B]/90 transition",
          style: { background: DARK },
          children: "Hỏi nhanh qua Zalo →"
        }
      )
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
          ] })
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
