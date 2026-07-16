import { useState } from "react";
import { Shield, Sparkles, Droplets, Zap, Check, Trees, Paintbrush, ArrowRight, Star, Heart, Flame, ShieldAlert, Award, RefreshCw, Layers, Menu, X, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactForm } from "./ContactForm";
import { StickyBar } from "./StickyBar";
import { ColorChart } from "./ColorChart";
import {
  HOTLINE,
  HOTLINE_TEL,
  ZALO_URL,
  BRAND,
  PRODUCT_LINE,
  COMPANY_NAME,
  COMPANY_TAX_ID,
  COMPANY_ADDRESS,
} from "./constants";

import logoImg from "@/assets/lotus-logo.png";
import heroImg from "@/assets/son-kim-loai-lotus-hero.jpg";
import appRailing from "@/assets/son-cau-thang-sat-lotus.jpg";
import appFence from "@/assets/son-container-lotus.jpg";
import appSteel from "@/assets/son-ket-cau-thep-lotus.jpg";
import appAluminum from "@/assets/son-duong-ong-cuu-hoa-lotus.jpg";
import appGate from "@/assets/son-cong-sat-son-lotus-kim-loai.jpg";
import appDoor from "@/assets/son-thep-ma-kem-lotus.jpg";
import project1 from "@/assets/son-cau-thang-lan-can-lotus.jpg";
import project2 from "@/assets/son-cua-sat-khong-mui.jpg";
import primerImg from "@/assets/son-lot-cho-kim-loai-lotus-metal-coat-primer.png";
import finishImg from "@/assets/son-phu-mau-kim-loai-lotus-meta-coat-finish.png";
import dtmImg from "@/assets/son-kim-loai-da-nang-lotus-metal-coat-2in1.png";

/* Brand tokens */
const ORANGE = "#E8541A";
const OFFWHITE = "#F7F5F2";
const DARK = "#1C2B2B";
const TEXT = "#1A1A1A";

const LABEL_CLS =
  "text-[12px] font-semibold uppercase tracking-[0.12em]";

export function LotusLanding() {
  const [c1q1, setC1q1] = useState(0); // Combo tiết kiệm nhỏ
  const [c1q2, setC1q2] = useState(0); // Combo tiết kiệm lớn
  const [c2q1, setC2q1] = useState(0); // Combo thông dụng nhỏ
  const [c2q2, setC2q2] = useState(0); // Combo thông dụng lớn
  const [c3q1, setC3q1] = useState(0); // Hũ 1kg 2in1
  const [c3q2, setC3q2] = useState(0); // Thùng 5kg 2in1

  const [c1q1Color, setC1q1Color] = useState("");
  const [c1q2Color, setC1q2Color] = useState("");
  const [c2q1Color, setC2q1Color] = useState("");
  const [c2q2Color, setC2q2Color] = useState("");
  const [c3q1Color, setC3q1Color] = useState("");
  const [c3q2Color, setC3q2Color] = useState("");

  const [c1q1Custom, setC1q1Custom] = useState("");
  const [c1q2Custom, setC1q2Custom] = useState("");
  const [c2q1Custom, setC2q1Custom] = useState("");
  const [c2q2Custom, setC2q2Custom] = useState("");
  const [c3q1Custom, setC3q1Custom] = useState("");
  const [c3q2Custom, setC3q2Custom] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0" style={{ color: TEXT }}>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Products />
        <Decision />
        <Applications />
        <ColorChart />
        <Combos
          c1q1={c1q1} setC1q1={setC1q1}
          c1q1Color={c1q1Color} setC1q1Color={setC1q1Color}
          c1q1Custom={c1q1Custom} setC1q1Custom={setC1q1Custom}
          c1q2={c1q2} setC1q2={setC1q2}
          c1q2Color={c1q2Color} setC1q2Color={setC1q2Color}
          c1q2Custom={c1q2Custom} setC1q2Custom={setC1q2Custom}
          c2q1={c2q1} setC2q1={setC2q1}
          c2q1Color={c2q1Color} setC2q1Color={setC2q1Color}
          c2q1Custom={c2q1Custom} setC2q1Custom={setC2q1Custom}
          c2q2={c2q2} setC2q2={setC2q2}
          c2q2Color={c2q2Color} setC2q2Color={setC2q2Color}
          c2q2Custom={c2q2Custom} setC2q2Custom={setC2q2Custom}
          c3q1={c3q1} setC3q1={setC3q1}
          c3q1Color={c3q1Color} setC3q1Color={setC3q1Color}
          c3q1Custom={c3q1Custom} setC3q1Custom={setC3q1Custom}
          c3q2={c3q2} setC3q2={setC3q2}
          c3q2Color={c3q2Color} setC3q2Color={setC3q2Color}
          c3q2Custom={c3q2Custom} setC3q2Custom={setC3q2Custom}
          paymentMethod={paymentMethod}
        />
        <FormSection
          c1q1={c1q1}
          c1q1Color={c1q1Color}
          setC1q1Color={setC1q1Color}
          c1q1Custom={c1q1Custom}
          setC1q1Custom={setC1q1Custom}
          c1q2={c1q2}
          c1q2Color={c1q2Color}
          setC1q2Color={setC1q2Color}
          c1q2Custom={c1q2Custom}
          setC1q2Custom={setC1q2Custom}
          c2q1={c2q1}
          c2q1Color={c2q1Color}
          setC2q1Color={setC2q1Color}
          c2q1Custom={c2q1Custom}
          setC2q1Custom={setC2q1Custom}
          c2q2={c2q2}
          c2q2Color={c2q2Color}
          setC2q2Color={setC2q2Color}
          c2q2Custom={c2q2Custom}
          setC2q2Custom={setC2q2Custom}
          c3q1={c3q1}
          c3q1Color={c3q1Color}
          setC3q1Color={setC3q1Color}
          c3q1Custom={c3q1Custom}
          setC3q1Custom={setC3q1Custom}
          c3q2={c3q2}
          c3q2Color={c3q2Color}
          setC3q2Color={setC3q2Color}
          c3q2Custom={c3q2Custom}
          setC3q2Custom={setC3q2Custom}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <Projects />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200/50">
      <div className="container-x flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoImg} alt="Lotus Paint logo" className="h-8 w-auto" />
          <div className="hidden leading-none sm:block">
            <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
              Metal Coat
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-xs font-medium text-neutral-500 md:flex">
          <a href="#san-pham" className="hover:text-neutral-900 transition-colors">Sản phẩm</a>
          <a href="#chon-he-son" className="hover:text-neutral-900 transition-colors">Chọn hệ sơn</a>
          <a href="#hang-muc" className="hover:text-neutral-900 transition-colors">Hạng mục</a>
          <a href="#bang-mau" className="hover:text-neutral-900 transition-colors">Bảng màu</a>
          <a href="#combo" className="hover:text-neutral-900 transition-colors">Combo</a>
          <a href="#du-an" className="hover:text-neutral-900 transition-colors">Dự án</a>
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden items-center md:flex">
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            {HOTLINE}
          </a>
          <span className="mx-3 text-neutral-300">/</span>
          <a
            href="#order-form"
            className="text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            Đặt hàng
          </a>
        </div>

        {/* Mobile Menu Button & Zalo */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg"
          >
            <MessageCircle className="size-5" />
            <span>Zalo</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-2 text-neutral-600 hover:bg-neutral-50"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200/50 bg-white">
          <nav className="container-x py-6 space-y-4">
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Sản phẩm
            </a>
            <a
              href="#chon-he-son"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Chọn hệ sơn
            </a>
            <a
              href="#hang-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Hạng mục
            </a>
            <a
              href="#bang-mau"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Bảng màu
            </a>
            <a
              href="#combo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Combo
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Dự án
            </a>
            <div className="pt-4 border-t border-neutral-200/50">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-neutral-900"
              >
                {HOTLINE}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="container-x">
        <div className="grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Sơn kim loại gốc nước
            </p>
            <h1
              className="mt-6 font-display font-bold tracking-tight text-balance text-neutral-900"
              style={{
                fontSize: "clamp(40px, 6.5vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Không mùi xăng. Không cần pha dung môi. Sơn sắt đẹp và bền hơn.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-neutral-600">
              Gốc nước hoàn toàn · Thi công sạch, an toàn trong nhà · Giao hàng toàn quốc
            </p>

            <div className="mt-10 hidden flex-col gap-3 sm:flex sm:flex-row sm:gap-4">
              <a
                href="#san-pham"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                Xem sản phẩm
              </a>
              <a
                href="#order-form"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: ORANGE }}
              >
                Đặt hàng ngay
              </a>
            </div>

            <p className="mt-6 text-[14px] text-neutral-500">
              Hơn 500+ đơn hàng đã giao thành công trong 2 tháng gần nhất. Nhận hàng kiểm tra & thanh toán sau khi nhận hàng
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <img
                src={heroImg}
                alt="Cổng sắt sơn bằng Lotus Metal Coat gốc nước — bề mặt mịn bóng đẹp"
                width={1536}
                height={1024}
                loading="eager"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const pains = [
    "Mùi xăng nồng nặc — thợ phải đeo khẩu trang, chủ nhà phải bỏ đi mấy ngày",
    "Phải pha xăng hoặc dung môi — lỉnh kỉnh, nguy cơ cháy nổ, khó kiểm soát độ loãng",
    "Sơn lên mạ kẽm không bám — bong tróc sau vài tháng dù đã lót",
    "Khô chậm — phải chờ lớp 1 qua ngày mới sơn lớp 2 được",
    "Dư sơn đổ đi — không pha nước được, để lâu đóng cứng lãng phí",
    "Vệ sinh cọ, rulo phải dùng xăng — hôi tay, hại da, khó rửa sạch",
  ];
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container-x max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Vấn đề thường gặp
        </p>
        <h2
          className="mt-6 font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 5vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Sơn dầu đang cho bạn kết quả tốt — hay chỉ quen dùng từ lâu?
        </h2>
        <p className="mt-8 text-[17px] leading-relaxed text-neutral-600">
          Nhiều người chuyển sang sơn gốc nước rồi mới nhận ra mình đã chịu đựng những vấn đề không đáng có.
        </p>
        <div className="mt-12 space-y-6">
          {pains.map((p, i) => (
            <div key={p} className="flex gap-6">
              <span className="font-display text-sm font-semibold tabular-nums text-neutral-400 w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[17px] leading-relaxed text-neutral-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const comparison = [
    {
      criteria: "Mùi sơn & An toàn",
      oil: "Hôi nồng nặc mùi xăng dung môi, chứa hàm lượng chất hữu cơ dễ bay hơi (VOCs) độc hại kéo dài.",
      lotus: "Không mùi, dung môi hoàn toàn từ nước sạch. Thi công dễ chịu, an toàn cho thợ và gia đình.",
      highlight: true,
    },
    {
      criteria: "Độ bám dính kẽm",
      oil: "Rất dễ bong tróc từng mảng lớn sau vài tháng sử dụng nếu không lót hoặc xử lý bề mặt cực kỳ phức tạp.",
      lotus: "Bám dính cực chắc nhờ công nghệ Acrylic liên kết chéo cải tiến, thách thức sắt hộp mạ kẽm.",
      highlight: true,
    },
    {
      criteria: "Thời gian thi công",
      oil: "Khô rất chậm (8-12 tiếng), phải chờ qua ngày mới phủ lớp tiếp theo. Dễ bám bụi bẩn khi màng sơn chưa khô.",
      lotus: "Khô nhanh chỉ trong 30 phút, sơn phủ lớp kế tiếp sau 2 giờ. Hoàn thành toàn bộ công trình trong ngày.",
      highlight: true,
    },
    {
      criteria: "Độ bền thời tiết",
      oil: "Dưới nắng nóng gắt, màng sơn dầu cứng giòn, dễ rạn nứt chân chim và bị ngả màu, ố vàng nhanh chóng.",
      lotus: "Màng sơn dẻo dai đàn hồi cao, chống tia UV cực tốt, không bị giòn nứt hay ngả màu dưới mọi thời tiết.",
      highlight: true,
    },
    {
      criteria: "Vệ sinh & Dọn dẹp",
      oil: "Bắt buộc dùng dung môi (xăng thơm, dầu hỏa) để tẩy rửa. Gây hôi tay, hại da và nguy cơ cháy nổ cao.",
      lotus: "Dễ dàng rửa sạch cọ, rulo, tay chân chỉ bằng nước sạch. Thân thiện với môi trường, dọn dẹp cực nhanh.",
      highlight: true,
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-neutral-50">
      <div className="container-x">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left info */}
          <div className="lg:col-span-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Giải pháp đột phá
            </p>
            <h2
              className="mt-6 font-display font-bold text-balance text-neutral-900"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Công nghệ gốc nước giảm thiểu nhược điểm sơn dầu.
            </h2>
            <p className="mt-8 text-[17px] leading-relaxed text-neutral-600">
              Lotus Metal Coat giải quyết hiệu quả những nỗi lo lớn nhất của người thợ và chủ nhà khi sơn kim loại. Không chỉ là sơn, đây là giải pháp bảo vệ.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-5">
                <span className="text-4xl font-extrabold text-neutral-900 font-display">0%</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Không mùi xăng dung môi</h4>
                  <p className="text-sm text-neutral-500 mt-1">Sơn xong dọn dẹp nhẹ nhàng, dọn vào ở được ngay.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="text-4xl font-extrabold text-neutral-900 font-display">2x</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Bền màu & Kháng UV gấp đôi</h4>
                  <p className="text-sm text-neutral-500 mt-1">Không giòn nứt hay ố vàng dưới nắng nóng khắc nghiệt.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right comparison */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              {comparison.map((row, i) => (
                <div key={row.criteria} className="space-y-4">
                  <h3 className="text-sm font-bold text-neutral-900">{row.criteria}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="text-sm text-neutral-600 leading-relaxed">
                      <span className="text-neutral-500 block text-xs mb-1">Sơn dầu truyền thống</span>
                      {row.oil}
                    </div>
                    <div className="text-sm text-neutral-900 leading-relaxed font-medium">
                      <span className="text-neutral-500 block text-xs mb-1">Sơn gốc nước Lotus</span>
                      {row.lotus}
                    </div>
                  </div>
                  {i < comparison.length - 1 && <div className="border-b border-neutral-200 pt-8" />}
                </div>
              ))}
            </div>
            
            <p className="mt-10 text-xs text-neutral-500">
              * Khảo sát thực tế dựa trên phản hồi của thợ thi công và chủ hộ gia đình tại Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */
function Products() {
  const products = [
    {
      name: "Lotus Metal Coat Primer",
      tag: "Sơn lót chống gỉ",
      desc: "Lót gốc nước chuyên dụng bám dính chắc chắn trên sắt, thép, mạ kẽm — tạo liên kết bền vững ngăn chặn ăn mòn và gỉ sét từ lõi kim loại.",
      uses: "Lớp sơn đầu tiên bắt buộc cho hệ sơn 2 lớp tiêu chuẩn. Cực kỳ khuyên dùng cho cửa cổng ngoài trời, hàng rào, giàn sắt chịu nắng mưa liên tục.",
      color: "Trắng",
      dilution: "Nước sạch ~ 10% (nếu cần thiết)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30-60 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng",
      image: primerImg,
    },
    {
      name: "Lotus Metal Coat Finish",
      tag: "Sơn phủ màu hoàn thiện",
      desc: "Sơn màu cao cấp phủ bảo vệ và trang trí. Tạo màng sơn mịn đẹp vượt trội, bóng nhẹ sang trọng, giữ màu tối ưu dưới thời tiết nắng nóng khắc nghiệt.",
      uses: "Sơn phủ màu trang trí (lớp thứ 2) sau khi đã lót Primer. Thích hợp cho tất cả bề mặt kim loại nội và ngoại thất cần độ thẩm mỹ và độ bền màu cao.",
      color: "28 mã màu chính hãng",
      dilution: "Nước sạch ~ 10% (nếu cần thiết)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30-45 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng - Bóng 50% - Mờ",
      image: finishImg,
    },
    {
      name: "Lotus Metal Coat 2in1 / DTM",
      tag: "Sơn đa năng đồng thời (2-trong-1)",
      desc: "Sản phẩm đột phá tích hợp lót chống gỉ và phủ màu trong cùng một bước sơn. Bám dính trực tiếp cực mạnh lên sắt mạ kẽm, sắt hộp không cần sơn lót.",
      uses: "Giải pháp thi công siêu tốc cho các công trình sắt mạ kẽm trong nhà và ngoài trời ít chịu tác động ăn mòn trực tiếp từ thời tiết.",
      color: "28 mã màu chính hãng",
      dilution: "Nước sạch ~ 10% (nếu cần thiết)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng - Bóng 50% - Mờ",
      image: dtmImg,
    },
  ];

  return (
    <section id="san-pham" className="bg-white py-12 lg:py-16">
      <div className="container-x">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Chi tiết sản phẩm
        </p>
        <h2
          className="mt-6 max-w-3xl font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Thông số kỹ thuật & Hướng dẫn sử dụng chi tiết.
        </h2>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Mỗi dòng sản phẩm được Lotus thiết kế chuyên biệt để mang lại hiệu quả bảo vệ bền vững nhất cho từng loại công trình.
        </p>

        <div className="mt-10 space-y-10 lg:mt-12 lg:space-y-12">
          {/* Featured Product - Primer */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] bg-neutral-50 flex items-center justify-center p-8">
                <img
                  src={primerImg}
                  alt="Lotus Metal Coat Primer — sơn lót chống gỉ gốc nước cho sắt thép"
                  loading="lazy"
                  width={400}
                  height={300}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400">
                {products[0].tag}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-neutral-900">{products[0].name}</h3>
              <p className="mt-6 text-[17px] leading-relaxed text-neutral-600">{products[0].desc}</p>
              <p className="mt-5 text-[16px] leading-relaxed text-neutral-700">{products[0].uses}</p>
              
              <div className="mt-8 grid grid-cols-2 gap-5 text-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Màu sơn</span>
                  <p className="mt-2 font-medium text-neutral-900">{products[0].color}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Định mức phủ</span>
                  <p className="mt-2 font-medium text-neutral-900">{products[0].coverage}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Thời gian khô</span>
                  <p className="mt-2 font-medium text-neutral-900">{products[0].time}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Bề mặt màng sơn</span>
                  <p className="mt-2 font-medium text-neutral-900">{products[0].finish}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Finish & DTM - Side by side */}
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {products.slice(1).map((p) => (
              <div key={p.name} className="space-y-6">
                <div className="aspect-[4/3] bg-neutral-50 flex items-center justify-center p-8">
                  <img
                    src={p.image}
                    alt={p.name === "Lotus Metal Coat Finish" ? "Lotus Metal Coat Finish — sơn phủ màu hoàn thiện gốc nước 28 màu" : "Lotus Metal Coat 2in1 DTM — sơn thẳng lên mạ kẽm không cần lót riêng"}
                    loading="lazy"
                    width={300}
                    height={225}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-neutral-900">{p.name}</h3>
                  <p className="mt-5 text-[16px] leading-relaxed text-neutral-600">{p.desc}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">{p.uses}</p>
                  
                  <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Màu sơn</span>
                      <p className="mt-2 font-medium text-neutral-900">{p.color}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Định mức phủ</span>
                      <p className="mt-2 font-medium text-neutral-900">{p.coverage}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Thời gian khô</span>
                      <p className="mt-2 font-medium text-neutral-900">{p.time}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Bề mặt màng sơn</span>
                      <p className="mt-2 font-medium text-neutral-900">{p.finish}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- DECISION ---------------- */
function Decision() {
  const systems = [
    {
      id: "standard",
      name: "Hệ Chuẩn — Lót + Phủ",
      subtitle: "Bền bỉ tối đa cho ngoài trời",
      description: "Khuyên dùng tuyệt đối cho cổng sắt ngoài trời, lan can ban công, hàng rào sắt chịu nắng mưa trực tiếp. Lót chống gỉ trước giúp màng sơn màu bền bỉ gấp hai lần.",
      steps: [
        "Vệ sinh bề mặt kim loại — chà nhám sạch gỉ sét, bụi bẩn, dầu mỡ",
        "Sơn 1 lớp lót Primer chống gỉ — lớp bảo vệ cốt lõi ngăn ăn mòn",
        "Sơn 1 lớp màu phủ hoàn thiện — lên màu chuẩn, mịn bóng, kháng UV",
        "Rửa sạch dụng cụ bằng nước — không cần xăng dầu",
      ],
      recommended: true,
    },
    {
      id: "dtm",
      name: "Hệ 2in1 — DTM Trực Tiếp",
      subtitle: "Thi công siêu tốc",
      description: "Giải pháp tiết kiệm 50% thời gian thi công cho sắt hộp mạ kẽm, vật dụng sắt mỹ thuật trong nhà. Sơn trực tiếp không cần sơn lót riêng.",
      steps: [
        "Vệ sinh bề mặt sắt hộp — lau sạch dầu mỡ phủ chống gỉ",
        "Sơn trực tiếp lớp thứ nhất — không cần lót, bám dính siêu chắc",
        "Sơn lớp thứ hai — chờ 2 giờ, lên màu đều và bóng đẹp",
        "Rửa cọ lăn bằng nước sạch — vệ sinh nhanh gọn",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="chon-he-son" className="py-12 lg:py-16 bg-neutral-50">
      <div className="container-x">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Hệ sơn & thi công
        </p>
        <h2
          className="mt-6 max-w-3xl font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Chọn đúng hệ sơn — Thi công đúng quy trình.
        </h2>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Lotus mang đến quy trình thi công tối giản, tiết kiệm thời gian mà vẫn đảm bảo độ bền tối ưu nhất cho từng hạng mục công trình.
        </p>

        <div className="mt-10 space-y-10 lg:mt-12 lg:space-y-12">
          {systems.map((system) => (
            <div key={system.id} className="space-y-6">
              {system.recommended && (
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-900">
                    Khuyên dùng
                  </span>
                </div>
              )}
              <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <h3 className="font-display text-2xl font-bold text-neutral-900">{system.name}</h3>
                  <p className="mt-4 text-sm font-medium text-neutral-500">{system.subtitle}</p>
                  <p className="mt-6 text-[17px] leading-relaxed text-neutral-600">{system.description}</p>
                  <a
                    href="#combo"
                    className="mt-10 inline-flex items-center text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    Xem combo phù hợp →
                  </a>
                </div>
                <div className="lg:col-span-7">
                  <ol className="space-y-6">
                    {system.steps.map((step, i) => (
                      <li key={i} className="flex gap-6">
                        <span className="font-display text-sm font-semibold tabular-nums text-neutral-400 w-6 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[16px] leading-relaxed text-neutral-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              {system.id !== systems[systems.length - 1].id && <div className="border-b border-neutral-200 pt-10" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPLICATIONS ---------------- */
function Applications() {
  const apps = [
    { img: appGate, label: "Cổng sắt" },
    { img: appFence, label: "Vỏ container" },
    { img: appRailing, label: "Cầu thang sắt" },
    { img: appDoor, label: "Thép hộp mạ kẽm" },
    { img: appSteel, label: "Khung thép, kết cấu" },
    { img: appAluminum, label: "Đường ống PCCC" },
  ];
  return (
    <section id="hang-muc" className="bg-neutral-50 py-12 lg:py-16">
      <div className="container-x">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Hạng mục ứng dụng
        </p>
        <h2
          className="mt-6 max-w-3xl font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Dùng được cho nhiều hạng mục — trong nhà và ngoài trời.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a) => (
            <figure key={a.label} className="group">
              <div className="relative overflow-hidden bg-white border border-neutral-200">
                <img
                  src={a.img}
                  alt={a.label === "Cổng sắt" ? "Cổng sắt thi công sơn Lotus Metal Coat tại TP.HCM" : a.label === "Hàng rào" ? "Hàng rào sắt mạ kẽm sơn 2in1 DTM Lotus — không cần lót riêng" : a.label === "Lan can ban công" ? "Lan can ban công sơn Lotus Metal Coat chống gỉ ngoài trời" : a.label === "Cửa sắt" ? "Cửa sắt sơn hệ Primer + Finish Lotus Metal Coat" : a.label === "Khung thép, kết cấu" ? "Khung thép kết cấu công trình sơn Lotus Metal Coat" : "Mạ kẽm sơn Lotus Metal Coat 2in1 không cần lót"}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="relative aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4">
                <span className="text-[15px] font-medium text-neutral-900">{a.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMBOS ---------------- */
function Combos({
  c1q1, setC1q1,
  c1q1Color, setC1q1Color,
  c1q1Custom, setC1q1Custom,
  c1q2, setC1q2,
  c1q2Color, setC1q2Color,
  c1q2Custom, setC1q2Custom,
  c2q1, setC2q1,
  c2q1Color, setC2q1Color,
  c2q1Custom, setC2q1Custom,
  c2q2, setC2q2,
  c2q2Color, setC2q2Color,
  c2q2Custom, setC2q2Custom,
  c3q1, setC3q1,
  c3q1Color, setC3q1Color,
  c3q1Custom, setC3q1Custom,
  c3q2, setC3q2,
  c3q2Color, setC3q2Color,
  c3q2Custom, setC3q2Custom,
  paymentMethod,
}: {
  c1q1: number; setC1q1: (v: number) => void;
  c1q1Color: string; setC1q1Color: (v: string) => void;
  c1q1Custom: string; setC1q1Custom: (v: string) => void;
  c1q2: number; setC1q2: (v: number) => void;
  c1q2Color: string; setC1q2Color: (v: string) => void;
  c1q2Custom: string; setC1q2Custom: (v: string) => void;
  c2q1: number; setC2q1: (v: number) => void;
  c2q1Color: string; setC2q1Color: (v: string) => void;
  c2q1Custom: string; setC2q1Custom: (v: string) => void;
  c2q2: number; setC2q2: (v: number) => void;
  c2q2Color: string; setC2q2Color: (v: string) => void;
  c2q2Custom: string; setC2q2Custom: (v: string) => void;
  c3q1: number; setC3q1: (v: number) => void;
  c3q1Color: string; setC3q1Color: (v: string) => void;
  c3q1Custom: string; setC3q1Custom: (v: string) => void;
  c3q2: number; setC3q2: (v: number) => void;
  c3q2Color: string; setC3q2Color: (v: string) => void;
  c3q2Custom: string; setC3q2Custom: (v: string) => void;
  paymentMethod: string;
}) {
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

  const total1 = c1q1 * 375000 + c1q2 * 1680000;
  const total2 = c2q1 * 610000 + c2q2 * 2745000;
  const total3 = c3q1 * 210000 + c3q2 * 890000;
  const grandTotal = total1 + total2 + total3;

  function formatVND(val: number) {
    return val.toLocaleString("vi-VN") + "đ";
  }

  function Stepper({ value, onChange }: { value: number; onChange: (v: number) => void }) {
    return (
      <div className="inline-flex items-center rounded-lg border border-[#E8E4DC] bg-[#F9F8F6]">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="flex size-8 items-center justify-center font-semibold text-neutral-600 transition hover:bg-neutral-200/50 disabled:opacity-30 disabled:hover:bg-transparent"
          disabled={value <= 0}
        >
          —
        </button>
        <span className="w-8 text-center text-sm font-semibold tabular-nums text-neutral-950">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex size-8 items-center justify-center font-semibold text-neutral-600 transition hover:bg-neutral-200/50"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <section id="combo" className="bg-white py-12 lg:py-16">
      <div className="container-x">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Combo sản phẩm
        </p>
        <h2
          className="mt-6 max-w-3xl font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Chọn combo phù hợp với hạng mục của bạn.
        </h2>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Thi công được bằng chổi quét, rulo lăn hoặc súng phun — tùy hạng mục và sở thích.
        </p>

        <div className="mt-10 space-y-10 lg:mt-12 lg:space-y-12">
          {/* Combo 1 - Standard */}
          <div className="space-y-6 border border-neutral-100 rounded-lg p-5 bg-neutral-50">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-900">
                Khuyên dùng
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-neutral-900">Combo thông dụng</h3>
              <p className="mt-3 text-[17px] text-neutral-600">Sơn lót chống gỉ + Sơn phủ màu hoàn thiện</p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-sm text-neutral-700">Lotus Metal Coat Primer</span>
                <span className="text-neutral-300">·</span>
                <span className="text-sm text-neutral-700">Lotus Metal Coat Finish</span>
              </div>
            </div>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-800">Combo nhỏ — 2 hũ 1kg</p>
                    <p className="text-[15px] font-semibold mt-0.5 text-neutral-900">375.000đ</p>
                  </div>
                  <Stepper value={c1q1} onChange={setC1q1} />
                </div>
                {c1q1 > 0 && (
                  <div className="flex flex-col gap-2 pl-1">
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c1q1Color}
                      onChange={(e) => setC1q1Color(e.target.value)}
                      className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                    >
                      <option value="">Chưa chọn màu</option>
                      {COLOR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {c1q1Color === "Tùy chỉnh" && (
                      <input
                        type="text"
                        value={c1q1Custom}
                        onChange={(e) => setC1q1Custom(e.target.value)}
                        placeholder="Mô tả màu bạn muốn..."
                        className="mt-2 w-full rounded border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                      />
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-800">Combo lớn — 2 thùng 5kg</p>
                    <p className="text-[15px] font-semibold mt-0.5 text-neutral-900">1.680.000đ</p>
                  </div>
                  <Stepper value={c1q2} onChange={setC1q2} />
                </div>
                {c1q2 > 0 && (
                  <div className="flex flex-col gap-2 pl-1">
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c1q2Color}
                      onChange={(e) => setC1q2Color(e.target.value)}
                      className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                    >
                      <option value="">Chưa chọn màu</option>
                      {COLOR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {c1q2Color === "Tùy chỉnh" && (
                      <input
                        type="text"
                        value={c1q2Custom}
                        onChange={(e) => setC1q2Custom(e.target.value)}
                        placeholder="Mô tả màu bạn muốn..."
                        className="mt-2 w-full rounded border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            {total1 > 0 && (
              <div className="pt-6 border-t border-neutral-200">
                <span className="font-display text-lg font-bold text-neutral-900">Tổng: {formatVND(total1)}</span>
              </div>
            )}

          {/* Combo 2 - Premium */}
          <div className="space-y-6 border border-neutral-100 rounded-lg p-5 bg-orange-50/30">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
                Cao cấp
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-neutral-900">Combo cao cấp</h3>
              <p className="mt-3 text-[17px] text-neutral-600">Sơn lót chống gỉ + Sơn phủ màu hoàn thiện</p>
              
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-sm text-neutral-700">Lotus Metal Coat Primer</span>
                <span className="text-neutral-300">·</span>
                <span className="text-sm text-neutral-700">Lotus Metal Coat Finish</span>
              </div>
            </div>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-800">Combo nhỏ — 2 hũ 1kg</p>
                    <p className="text-[15px] font-semibold mt-0.5 text-neutral-900">610.000đ</p>
                  </div>
                  <Stepper value={c2q1} onChange={setC2q1} />
                </div>
                {c2q1 > 0 && (
                  <div className="flex flex-col gap-2 pl-1">
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c2q1Color}
                      onChange={(e) => setC2q1Color(e.target.value)}
                      className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                    >
                      <option value="">Chưa chọn màu</option>
                      {COLOR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {c2q1Color === "Tùy chỉnh" && (
                      <input
                        type="text"
                        value={c2q1Custom}
                        onChange={(e) => setC2q1Custom(e.target.value)}
                        placeholder="Mô tả màu bạn muốn..."
                        className="mt-2 w-full rounded border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                      />
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-800">Combo lớn — 2 thùng 5kg</p>
                    <p className="text-[15px] font-semibold mt-0.5 text-neutral-900">2.745.000đ</p>
                  </div>
                  <Stepper value={c2q2} onChange={setC2q2} />
                </div>
                {c2q2 > 0 && (
                  <div className="flex flex-col gap-2 pl-1">
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c2q2Color}
                      onChange={(e) => setC2q2Color(e.target.value)}
                      className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                    >
                      <option value="">Chưa chọn màu</option>
                      {COLOR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {c2q2Color === "Tùy chỉnh" && (
                      <input
                        type="text"
                        value={c2q2Custom}
                        onChange={(e) => setC2q2Custom(e.target.value)}
                        placeholder="Mô tả màu bạn muốn..."
                        className="mt-2 w-full rounded border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            {total2 > 0 && (
              <div className="pt-6 border-t border-neutral-200">
                <span className="font-display text-lg font-bold text-neutral-900">Tổng: {formatVND(total2)}</span>
              </div>
            )}

          {/* Combo 3 - DTM */}
          <div className="space-y-6 border border-neutral-100 rounded-lg p-5 bg-stone-50">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-500">
                2in1 / DTM
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-neutral-900">Sơn thẳng không cần lót</h3>
              <p className="mt-3 text-[17px] text-neutral-600">Lotus Metal Coat 2in1 / DTM</p>
              
              <div className="mt-5">
                <span className="text-sm text-neutral-700">Sơn trực tiếp lên mạ kẽm, không cần sơn lót riêng</span>
              </div>
            </div>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-200">
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-800">Hũ 1kg</p>
                    <p className="text-[15px] font-semibold mt-0.5 text-neutral-900">210.000đ</p>
                  </div>
                  <Stepper value={c3q1} onChange={setC3q1} />
                </div>
                {c3q1 > 0 && (
                  <div className="flex flex-col gap-2 pl-1">
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c3q1Color}
                      onChange={(e) => setC3q1Color(e.target.value)}
                      className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                    >
                      <option value="">Chưa chọn màu</option>
                      {COLOR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {c3q1Color === "Tùy chỉnh" && (
                      <input
                        type="text"
                        value={c3q1Custom}
                        onChange={(e) => setC3q1Custom(e.target.value)}
                        placeholder="Mô tả màu bạn muốn..."
                        className="mt-2 w-full rounded border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                      />
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                  <div>
                    <p className="text-[15px] font-semibold text-neutral-800">Thùng 5kg</p>
                    <p className="text-[15px] font-semibold mt-0.5 text-neutral-900">890.000đ</p>
                  </div>
                  <Stepper value={c3q2} onChange={setC3q2} />
                </div>
                {c3q2 > 0 && (
                  <div className="flex flex-col gap-2 pl-1">
                    <span className="text-[12px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c3q2Color}
                      onChange={(e) => setC3q2Color(e.target.value)}
                      className="w-full rounded border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                    >
                      <option value="">Chưa chọn màu</option>
                      {COLOR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {c3q2Color === "Tùy chỉnh" && (
                      <input
                        type="text"
                        value={c3q2Custom}
                        onChange={(e) => setC3q2Custom(e.target.value)}
                        placeholder="Mô tả màu bạn muốn..."
                        className="mt-2 w-full rounded border border-neutral-200 px-3 py-2 text-sm text-neutral-800 outline-none transition focus:border-neutral-900"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            {total3 > 0 && (
              <div className="pt-6 border-t border-neutral-200">
                <span className="font-display text-lg font-bold text-neutral-900">Tổng: {formatVND(total3)}</span>
              </div>
            )}
        </div>

        <div className="mt-12 p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 border border-neutral-100">
          <div>
            <p className="text-[18px] sm:text-[20px] font-bold text-neutral-900">Tổng giá trị đơn hàng</p>
            <p className="text-[15px] text-neutral-500 mt-1">Định mức: hũ 1kg ~ 5m2; thùng 5kg ~ 25m2</p>
          </div>
          <div className="md:text-right">
            {paymentMethod === "online" ? (
              <div className="flex flex-col md:items-end">
                <span className="text-sm text-neutral-500 line-through font-medium">
                  {formatVND(grandTotal)}
                </span>
                <span className="font-display text-3xl font-extrabold text-neutral-900">
                  {formatVND(Math.round(grandTotal * 0.9))}
                </span>
              </div>
            ) : (
              <span className="font-display text-3xl font-extrabold text-neutral-900">
                {formatVND(grandTotal)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#order-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex w-full items-center justify-center py-4 text-[17px] sm:text-[18px] font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: ORANGE }}
          >
            Tiếp tục điền thông tin đặt hàng
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FORM SECTION ---------------- */
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
  setPaymentMethod,
}: {
  c1q1: number;
  c1q1Color: string;
  setC1q1Color: (v: string) => void;
  c1q1Custom: string;
  setC1q1Custom: (v: string) => void;
  c1q2: number;
  c1q2Color: string;
  setC1q2Color: (v: string) => void;
  c1q2Custom: string;
  setC1q2Custom: (v: string) => void;
  c2q1: number;
  c2q1Color: string;
  setC2q1Color: (v: string) => void;
  c2q1Custom: string;
  setC2q1Custom: (v: string) => void;
  c2q2: number;
  c2q2Color: string;
  setC2q2Color: (v: string) => void;
  c2q2Custom: string;
  setC2q2Custom: (v: string) => void;
  c3q1: number;
  c3q1Color: string;
  setC3q1Color: (v: string) => void;
  c3q1Custom: string;
  setC3q1Custom: (v: string) => void;
  c3q2: number;
  c3q2Color: string;
  setC3q2Color: (v: string) => void;
  c3q2Custom: string;
  setC3q2Custom: (v: string) => void;
  paymentMethod: string;
  setPaymentMethod: (v: string) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const orderItems = [
    { name: "Combo thông dụng nhỏ", qty: c1q1, price: 375000, color: c1q1Color, custom: c1q1Custom },
    { name: "Combo thông dụng lớn", qty: c1q2, price: 1680000, color: c1q2Color, custom: c1q2Custom },
    { name: "Combo cao cấp nhỏ", qty: c2q1, price: 610000, color: c2q1Color, custom: c2q1Custom },
    { name: "Combo cao cấp lớn", qty: c2q2, price: 2745000, color: c2q2Color, custom: c2q2Custom },
    { name: "Hũ 1kg 2in1", qty: c3q1, price: 210000, color: c3q1Color, custom: c3q1Custom },
    { name: "Thùng 5kg 2in1", qty: c3q2, price: 890000, color: c3q2Color, custom: c3q2Custom },
  ];

  const activeItems = orderItems.filter((it) => it.qty > 0);
  const grandTotal = orderItems.reduce((sum, it) => sum + it.qty * it.price, 0);
  const discount = paymentMethod === "online" ? Math.round(grandTotal * 0.1) : 0;
  const finalTotal = grandTotal - discount;

  function formatVND(val: number) {
    return val.toLocaleString("vi-VN") + "đ";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
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

    // Save to sessionStorage
    const activeItemsData = activeItems.map((it) => {
      const chosenColor = it.color === "Tùy chỉnh" ? (it.custom || "Màu tùy chỉnh") : (it.color || "Chưa chọn");
      return {
        name: it.name,
        quantity: it.qty,
        unitPrice: it.price,
        color: chosenColor,
      };
    });

    // Format items for thank-you page
    const itemsArray = activeItemsData.map(item => ({
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      color: item.color,
    }));

    // Format items as readable string for Google Sheet
    const itemsStr = activeItemsData.map(item =>
      `${item.name} x${item.quantity} (${item.color})`
    ).join("; ");

    const orderData = {
      source: "metal-coat",
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      note: note.trim(),
      paymentMethod,
      items: itemsArray,
      subtotal: grandTotal,
      discount,
      total: finalTotal,
      timestamp: Date.now(),
    };

    // Send data to Google Apps Script
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyv7gIgwksqqalJhhqqUp8KUGCM9r0LEu6LtRd8wuGE86lmFHQGXZGJp8gHWNzBaC_T/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
    } catch (error) {
      console.error("Error sending data to Google Sheet:", error);
    }

    sessionStorage.setItem("lotusOrder", JSON.stringify(orderData));

    // Redirect to /thank-you?phone={phone}
    window.location.href = `/thank-you?phone=${encodeURIComponent(phone.trim())}`;
  };

  const inputCls =
    "w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1C2B2B] focus:ring-2 focus:ring-[#1C2B2B]/20";

  const errorInputCls = "border-red-500 ring-2 ring-red-500/20 focus:border-red-500";

  return (
    <section id="order-form" className="py-12 lg:py-16 bg-white">
      <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN — ORDER FORM */}
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">ĐẶT HÀNG NGAY</p>
          <h2
            className="mt-6 font-display font-bold text-balance text-neutral-900"
            style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Hoàn tất đơn hàng — Lotus giao hàng tận nơi.
          </h2>
          <p className="mt-8 text-[17px] leading-relaxed text-neutral-600">
            Đặt ngay hôm nay — Nhận sơn tại nhà, bắt đầu thi công cuối tuần này. Giao hàng 24–48h tại TP.HCM và các tỉnh lân cận.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6 border border-neutral-200 rounded-lg p-4 md:p-6 bg-neutral-50/30">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="block relative">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Họ và tên *
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className="w-full border-b border-neutral-200 bg-transparent px-0 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
                />
                {errors.name && (
                  <div className="mt-1 text-xs text-red-600">{errors.name}</div>
                )}
              </div>

              <div className="block relative">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Số điện thoại *
                </span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xx xxx xxx"
                  className="w-full border-b border-neutral-200 bg-transparent px-0 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
                />
                {errors.phone && (
                  <div className="mt-1 text-xs text-red-600">{errors.phone}</div>
                )}
              </div>
            </div>

            <div className="mt-6 block relative">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Địa chỉ giao hàng *
              </span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố"
                className="w-full border-b border-neutral-200 bg-transparent px-0 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
              />
              {errors.address && (
                <div className="mt-1 text-xs text-red-600">{errors.address}</div>
              )}
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Ghi chú
              </span>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder='Ghi yêu cầu bề mặt "Bóng - Bóng 50% - Mờ"'
                className="w-full border-b border-neutral-200 bg-transparent px-0 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 resize-none"
              />
            </label>

            {/* ORDER SUMMARY BOX */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
                Thông tin đơn hàng
              </p>
              <div className="mt-6 space-y-5 text-sm text-neutral-800">
                {activeItems.length > 0 ? (
                  activeItems.map((it) => {
                    const displayColor = it.color === "Tùy chỉnh" ? (it.custom || "Màu tùy chỉnh chưa ghi chú") : (it.color || "Chưa chọn");
                    return (
                      <div key={it.name} className="flex justify-between items-center text-sm">
                        <div className="flex flex-col leading-snug">
                          <span className="font-medium text-neutral-900">— {it.name} x{it.qty}</span>
                          <span className="text-xs text-neutral-500 mt-0.5">
                            Màu sơn: <span className="font-bold text-[#2D7A3A]">{displayColor}</span>
                          </span>
                        </div>
                        <span className="font-bold text-neutral-900">{formatVND(it.qty * it.price)}</span>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm italic text-neutral-500">
                    Chưa chọn sản phẩm — vui lòng chọn combo ở trên.
                  </p>
                )}

                {paymentMethod === "online" && grandTotal > 0 && (
                  <p className="text-neutral-600 font-semibold text-sm pt-3 border-t border-dashed border-neutral-200">
                    — Giảm giá Online (10%): -{formatVND(discount)}
                  </p>
                )}
              </div>
              <div className="my-6 border-t border-neutral-200" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-700">Thành tiền:</span>
                {paymentMethod === "online" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-500 line-through font-medium">
                      {formatVND(grandTotal)}
                    </span>
                    <span className="font-display text-xl font-extrabold text-neutral-900">
                      {formatVND(finalTotal)}
                    </span>
                  </div>
                ) : (
                  <span className="font-display text-xl font-extrabold text-neutral-900">
                    {formatVND(grandTotal)}
                  </span>
                )}
              </div>
              <p className="mt-4 text-[12px] leading-relaxed text-neutral-500">
                * Giá chưa bao gồm phí vận chuyển. Có thể thay đổi tùy diện tích thực tế.
              </p>
              <p className="mt-2 text-[12px] leading-relaxed text-neutral-500">
                Định mức: Combo nhỏ 1kg ~ 5m²; Combo lớn 5kg ~ 25m²
              </p>
            </div>

            {/* PAYMENT METHOD SECTION */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Phương thức thanh toán
              </span>
              <div className="grid gap-4 sm:grid-cols-2">
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center gap-3 border-b pb-3 cursor-pointer transition ${
                    paymentMethod === "cod"
                      ? "border-neutral-900"
                      : "border-neutral-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-neutral-900 size-4 cursor-pointer"
                  />
                  <div className="leading-tight">
                    <p className="text-sm font-medium text-neutral-800">Thanh toán khi nhận hàng (COD)</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("online")}
                  className={`flex items-center gap-3 border-b pb-3 cursor-pointer transition ${
                    paymentMethod === "online"
                      ? "border-neutral-900"
                      : "border-neutral-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    className="accent-neutral-900 size-4 cursor-pointer"
                  />
                  <div className="leading-tight flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-sm font-medium text-neutral-800">Chuyển khoản Online</p>
                      <span className="bg-neutral-100 px-2 py-0.5 text-[11px] font-bold text-neutral-900">
                        Tiết kiệm 10%
                      </span>
                    </div>
                    <p className="text-xs font-bold mt-0.5" style={{ color: ORANGE }}>Giảm ngay 10% và miễn phí giao hàng</p>
                  </div>
                </div>
              </div>
            </div>

            {errors.combos && (
              <div className="mt-4 text-xs text-red-600 font-semibold">
                ⚠️ {errors.combos}
              </div>
            )}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center py-4 text-base font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              Xác nhận đặt hàng →
            </button>

            <p className="mt-4 text-center text-xs leading-relaxed text-neutral-500">
              Bằng cách đặt hàng, bạn đồng ý để Lotus liên hệ xác nhận đơn hàng và giao hàng. Đổi trả/hoàn tiền trong vòng 7 ngày nếu sơn không đúng màu đã chọn.
            </p>
          </form>
        </div>

        {/* RIGHT COLUMN — ZALO CARD */}
        <div className="lg:col-span-5">
          <div className="p-8 lg:sticky lg:top-24">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              TƯ VẤN NHANH NHẤT
            </p>
            <h3 className="mt-4 text-2xl font-bold text-neutral-900">Nhắn Zalo Lotus</h3>
            <p className="mt-5 text-[16px] leading-relaxed text-neutral-600">
              Gửi ảnh hạng mục qua Zalo để được tư vấn đúng hệ sơn, đúng combo và bảng màu phù hợp.
            </p>

            <ul className="mt-8 space-y-5 text-sm text-neutral-700">
              <li className="flex items-center gap-3">
                <span className="text-neutral-900 font-bold">✓</span>
                <span>Phản hồi nhanh trong vòng 15 phút</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-neutral-900 font-bold">✓</span>
                <span>Tư vấn đúng hệ theo từng hạng mục</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-neutral-900 font-bold">✓</span>
                <span>Báo giá rõ ràng, hướng dẫn kỹ thuật chi tiết</span>
              </li>
            </ul>

            <a
              href="https://zalo.me/0943966662"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center py-4 text-base font-medium text-white transition hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              Gửi ảnh qua Zalo →
            </a>

            <div className="my-6 border-t border-neutral-200" />

            <div className="leading-tight">
              <p className="font-bold text-neutral-900 text-lg">Hotline: 0943 966 662</p>
              <p className="mt-2 text-xs text-neutral-500">Giờ làm việc: 8:00 – 18:00, Thứ 2 – Thứ 7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const items = [
    {
      img: project2,
      item: "Cổng sắt 2 cánh",
      system: "Primer + Finish",
      area: "TP.HCM",
      quote:
        "Trước giờ toàn dùng sơn dầu, lần này thử Lotus thấy khác hẳn — không có mùi xăng, sơn xong ở nhà luôn được. Bề mặt ra đẹp, mịn không thua gì sơn dầu.",
      author: "Anh Hùng — Chủ nhà",
    },
    {
      img: project1,
      item: "Lan can + cầu thang sắt",
      system: "Primer + Finish",
      area: "Bình Dương",
      quote:
        "Dùng hệ Primer + Finish cho lan can cầu thang sắt — bám dính cực tốt, bền bỉ ngoài trời. Thi công nhanh hơn sơn dầu, không mùi xăng, sơn xong ở nhà luôn được.",
      author: "Anh Tâm — Nhà thầu",
    },
    {
      img: appSteel,
      item: "Khung thép xưởng",
      system: "Primer + Finish",
      area: "Long An",
      quote:
        "Chuyển từ sơn dầu sang Lotus cho khung thép xưởng — thợ làm dễ hơn vì không mùi, rửa cọ bằng nước là xong. Nhà máy được an toàn, không còn mùi hôi khó chịu nữa.",
      author: "Anh Phong — Chủ xưởng",
    },
  ];
  return (
    <section id="du-an" className="bg-white py-12 lg:py-16">
      <div className="container-x">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Dự án thực tế
        </p>
        <h2
          className="mt-6 max-w-3xl font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Một số hạng mục đã thi công với hệ sơn Lotus Metal Coat.
        </h2>
        <div className="mt-12 space-y-12">
          {items.map((it) => (
            <article key={it.item} className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img 
                    src={it.img} 
                    alt={it.item === "Cổng sắt 2 cánh" ? "Dự án cổng sắt 2 cánh thi công Lotus Metal Coat Primer + Finish tại TP.HCM" : it.item === "Lan can + cầu thang sắt" ? "Dự án lan can và cầu thang sắt sơn Lotus Metal Coat Primer + Finish tại Bình Dương" : "Dự án khung thép xưởng sơn Lotus Metal Coat Primer + Finish tại Long An"} 
                    loading="lazy" 
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-medium text-neutral-500">Hạng mục</span>
                    <p className="text-[17px] font-semibold text-neutral-900">{it.item}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-neutral-500">Hệ sơn</span>
                    <p className="text-sm text-neutral-800">{it.system}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-neutral-500">Khu vực</span>
                    <p className="text-sm text-neutral-800">{it.area}</p>
                  </div>
                  <blockquote className="mt-5 border-l-2 border-neutral-200 pl-5">
                    <p className="text-[16px] italic leading-relaxed text-neutral-700">"{it.quote}"</p>
                    <p className="mt-3 text-sm font-medium text-neutral-600">— {it.author}</p>
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const qa = [
    {
      q: "Sơn gốc nước có bền bằng sơn dầu không?",
      a: "Có, thậm chí bền hơn. Sơn dầu truyền thống dễ bị oxy hóa dẫn đến giòn và nứt nẻ khi sắt co giãn nhiệt dưới nắng. Sơn gốc nước Lotus có màng nhựa dẻo co giãn linh hoạt, chịu nhiệt và kháng UV cực tốt, không bị ố vàng hay bay màu.",
    },
    {
      q: "Tôi đang dùng sơn dầu — chuyển sang Lotus có cần xử lý gì trước không?",
      a: "Bạn chỉ cần cạo sạch lớp sơn cũ bị bong tróc, chà nhám nhẹ để tạo độ nhám bề mặt, lau sạch bụi bẩn và dầu mỡ là có thể sơn trực tiếp hệ sơn gốc nước Lotus.",
    },
    {
      q: "Lotus 2in1 / DTM có thực sự không cần lót không, hay vẫn cần một bước nào đó?",
      a: "Thực sự không cần sơn lót chống gỉ riêng. Bạn chỉ cần làm sạch bề mặt kim loại rồi sơn trực tiếp 2 lớp Lotus 2in1 / DTM là hoàn thành công việc.",
    },
    {
      q: "Sơn lên bề mặt mạ kẽm được không?",
      a: "Hoàn toàn được. Dòng Lotus 2in1 / DTM được thiết kế chuyên biệt với độ bám dính siêu hạng trên các bề mặt khó bám như sắt hộp mạ kẽm mà không cần lót riêng.",
    },
    {
      q: "Sơn gốc nước khô bao lâu? Có nhanh hơn sơn dầu không?",
      a: "Nhanh hơn rất nhiều. Sơn Lotus khô bề mặt chỉ sau 30-60 phút và có thể sơn lớp tiếp theo sau 2 giờ, giúp bạn hoàn thành toàn bộ công trình ngay trong ngày thay vì phải chờ qua đêm như sơn dầu.",
    },
    {
      q: "Rửa cọ và rulo bằng nước được không — sạch thật không?",
      a: "Được và sạch hoàn toàn cực kỳ dễ dàng. Vì là sơn gốc nước, khi màng sơn chưa khô hoàn toàn, toàn bộ sơn bám trên chổi, rulo hay súng phun đều tan trong nước và dễ dàng rửa sạch dưới vòi nước chảy sinh hoạt.",
    },
    {
      q: "Có hỗ trợ tư vấn lượng sơn theo diện tích không?",
      a: "Có. Bạn chỉ cần gửi kích thước hoặc ảnh chụp hạng mục qua Zalo, đội ngũ kỹ thuật của Lotus sẽ tính toán chính xác lượng sơn cần dùng để tránh lãng phí.",
    },
    {
      q: "Đặt hàng và giao hàng như thế nào?",
      a: "Rất đơn giản. Bạn chỉ cần điền form liên hệ hoặc nhắn Zalo. Lotus hỗ trợ tư vấn miễn phí, giao hàng tận nơi trên toàn quốc, thanh toán khi nhận hàng.",
    },
  ];
  return (
    <section id="faq" className="bg-neutral-50 py-12 lg:py-16">
      <div className="container-x">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          FAQ
        </p>
        <h2
          className="mt-6 max-w-3xl font-display font-bold text-balance text-neutral-900"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Câu hỏi hay gặp khi chuyển từ sơn dầu sang sơn gốc nước.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Câu hỏi thường gặp về sơn Lotus Metal Coat.
        </p>

        <div className="mt-12 space-y-6">
          {qa.map((item, i) => (
            <div key={i} className="border-b border-neutral-200 pb-6 last:border-0">
              <h3 className="font-display text-lg font-semibold text-neutral-900">{item.q}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-neutral-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt={`${BRAND} logo`} className="h-10 w-auto" />
              <div className="leading-none">
                <div className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">{PRODUCT_LINE}</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-600">
              Giải pháp sơn kim loại gốc nước cho cổng, hàng rào, lan can, khung thép và nhiều hạng mục kim loại khác — trong nhà và ngoài trời.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="font-semibold text-neutral-900">{COMPANY_NAME}</div>
              <div className="text-neutral-600">MST: <span className="text-neutral-900">{COMPANY_TAX_ID}</span></div>
              <div className="text-neutral-600">Đ/c: <span className="text-neutral-900">{COMPANY_ADDRESS}</span></div>
              <div className="text-neutral-600">Phục vụ khu vực: TP.HCM · Bình Dương · Đồng Nai · Long An · Tây Ninh</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400">Sản phẩm</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#san-pham" className="text-neutral-600 hover:text-neutral-900 transition-colors">Metal Coat Primer</a></li>
              <li><a href="#san-pham" className="text-neutral-600 hover:text-neutral-900 transition-colors">Metal Coat Finish</a></li>
              <li><a href="#san-pham" className="text-neutral-600 hover:text-neutral-900 transition-colors">Metal Coat 2in1 / DTM</a></li>
              <li><a href="#chon-he-son" className="text-neutral-600 hover:text-neutral-900 transition-colors">So sánh hệ sơn</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400">Liên hệ</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href={`tel:${HOTLINE_TEL}`} className="font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">Hotline: {HOTLINE}</a></li>
              <li><a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-900 transition-colors">Zalo: {HOTLINE}</a></li>
              <li className="text-neutral-500">Giờ làm việc: 8:00 – 18:00 (T2 – T7)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-neutral-500 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} {BRAND} — Lotus Metal Coat. Mọi quyền được bảo lưu.</span>
            <span>Sơn kim loại gốc nước · Chống gỉ · Bền màu · Dễ thi công</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
