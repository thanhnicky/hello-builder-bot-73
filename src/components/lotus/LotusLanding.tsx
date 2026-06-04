import { useState } from "react";
import { Shield, Sparkles, Droplets, Zap, Check, Trees, Paintbrush, ArrowRight, Star, Heart, Flame, ShieldAlert, Award, RefreshCw, Layers, Menu, X } from "lucide-react";
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
import heroImg from "@/assets/lotus-hero.jpg";
import appRailing from "@/assets/app-railing.jpg";
import appFence from "@/assets/app-fence.jpg";
import appSteel from "@/assets/app-steel.jpg";
import appAluminum from "@/assets/app-aluminum.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
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
    <header className="sticky top-0 z-40 border-b border-[#E8E4DC] bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoImg} alt="Lotus Paint logo" className="h-9 w-auto sm:h-10" />
          <div className="hidden leading-tight sm:block">
            <div className="text-[10px] uppercase tracking-widest text-neutral-500">
              Metal Coat
            </div>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-600 md:flex">
          <a href="#san-pham" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Sản phẩm</a>
          <a href="#chon-he-son" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Chọn hệ sơn</a>
          <a href="#hang-muc" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Hạng mục</a>
          <a href="#bang-mau" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Bảng màu</a>
          <a href="#combo" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Combo</a>
          <a href="#order-form" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Đặt Hàng</a>
          <a href="#du-an" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">Dự án</a>
          <a href="#faq" className="hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full">FAQ</a>
        </nav>
        
        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${HOTLINE_TEL}`}
            className="inline-flex items-center rounded-md border border-[#E8E4DC] px-3 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            {HOTLINE}
          </a>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-[#E8541A]/90 transition"
            style={{ background: ORANGE }}
          >
            Nhắn Zalo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E4DC] bg-white">
          <nav className="container-x py-4 space-y-3">
            <a
              href="#san-pham"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Sản phẩm
            </a>
            <a
              href="#chon-he-son"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Chọn hệ sơn
            </a>
            <a
              href="#hang-muc"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Hạng mục
            </a>
            <a
              href="#bang-mau"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Bảng màu
            </a>
            <a
              href="#combo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Combo
            </a>
            <a
              href="#order-form"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Đặt Hàng
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              Dự án
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-600 hover:text-black relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8541A] after:transition-all hover:after:w-full"
            >
              FAQ
            </a>
            <div className="pt-4 border-t border-[#E8E4DC]">
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                style={{ background: ORANGE }}
              >
                Nhắn Zalo
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
    <section id="top" className="relative overflow-hidden" style={{ background: OFFWHITE }}>
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-[72px]">
        <div className="lg:col-span-7">
          <p className={LABEL_CLS} style={{ color: ORANGE }}>
            SƠN KIM LOẠI GỐC NƯỚC — LOTUS METAL COAT
          </p>
          <h1
            className="mt-6 font-display font-bold tracking-tight text-balance"
            style={{
              color: TEXT,
              fontSize: "clamp(40px, 7.2vw, 76px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
            }}
          >
            Không mùi xăng. <span style={{ color: ORANGE }}>Không cần pha dung môi.</span> Sơn sắt đẹp và bền hơn.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-neutral-600 sm:text-[18px]">
            Gốc nước hoàn toàn · Thi công sạch, an toàn trong nhà · Giao hàng toàn quốc
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#san-pham"
              className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-base font-semibold text-white transition hover:opacity-95"
              style={{ background: ORANGE }}
            >
              Xem sản phẩm & đặt hàng
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <img
            src={heroImg}
            alt="Cổng kim loại sơn bằng Lotus Metal Coat — bề mặt mịn, bóng đẹp"
            width={1536}
            height={1024}
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
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
    "Sơn lên mạ kẽm hoặc nhôm không bám — bong tróc sau vài tháng dù đã lót",
    "Khô chậm — phải chờ lớp 1 qua ngày mới sơn lớp 2 được",
    "Dư sơn đổ đi — không pha nước được, để lâu đóng cứng lãng phí",
    "Vệ sinh cọ, rulo phải dùng xăng — hôi tay, hại da, khó rửa sạch",
  ];
  return (
    <section className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>VẤN ĐỀ THƯỜNG GẶP</p>
        <h2
          className="mt-4 max-w-4xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Sơn dầu đang cho bạn kết quả tốt — hay chỉ quen dùng từ lâu?
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Nhiều người chuyển sang sơn gốc nước rồi mới nhận ra mình đã chịu đựng những vấn đề không đáng có.
        </p>
        <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <div
              key={p}
              className="border-b border-[#E8E4DC] py-6 pr-6"
            >
              <div className="flex gap-4">
                <span
                  className="font-display text-sm font-semibold tabular-nums text-[#1C2B2B]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] leading-snug text-neutral-800">{p}</p>
              </div>
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
      lotus: "Không mùi, dung môi hoàn toàn từ nước sạch. Thi công dễ chịu, an toàn tuyệt đối cho thợ và gia đình.",
      highlight: true,
    },
    {
      criteria: "Độ bám dính kẽm",
      oil: "Rất dễ bong tróc từng mảng lớn sau vài tháng sử dụng nếu không lót hoặc xử lý bề mặt cực kỳ phức tạp.",
      lotus: "Bám dính cực chắc nhờ công nghệ Acrylic liên kết chéo cải tiến, thách thức sắt hộp mạ kẽm, nhôm, inox.",
      highlight: true,
    },
    {
      criteria: "Thời gian thi công",
      oil: "Khô rất chậm (8-12 tiếng), phải chờ qua ngày mới phủ lớp tiếp theo. Dễ bám bụi bẩn khi màng sơn chưa khô.",
      lotus: "Khô siêu tốc chỉ trong 30 phút, sơn phủ lớp kế tiếp sau 2 giờ. Hoàn thành toàn bộ công trình trong ngày.",
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
    <section className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left info box */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className={LABEL_CLS} style={{ color: ORANGE }}>GIẢI PHÁP ĐỘT PHÁ</p>
            <h2
              className="mt-4 font-display font-bold text-balance text-[#1C2B2B]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Công nghệ gốc nước xóa bỏ mọi nhược điểm sơn dầu.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-neutral-600">
              Lotus Metal Coat giải quyết triệt để những nỗi lo lớn nhất của người thợ và chủ nhà khi sơn kim loại. Không chỉ là sơn, đây là giải pháp bảo vệ tối ưu.
            </p>

            <div className="mt-8 space-y-6 border-t border-[#E8E4DC] pt-6">
              <div className="flex gap-4">
                <span className="text-3xl font-extrabold text-[#2D7A3A] font-display">0%</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Không mùi xăng dung môi</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Sơn xong dọn dẹp nhẹ nhàng, dọn vào ở được ngay.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl font-extrabold text-[#2D7A3A] font-display">2x</span>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800">Bền màu & Kháng UV gấp đôi</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">Không giòn nứt hay ố vàng dưới nắng nóng khắc nghiệt.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right comparison box */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white shadow-xs">
              <div className="grid grid-cols-12 bg-[#1C2B2B] p-4 text-xs font-bold uppercase tracking-wider text-white">
                <div className="col-span-3">TIÊU CHÍ</div>
                <div className="col-span-4 pl-2 text-neutral-400">SƠN DẦU TRUYỀN THỐNG</div>
                <div className="col-span-5 pl-4 text-emerald-400">
                  SƠN GỐC NƯỚC LOTUS
                </div>
              </div>

              <div className="divide-y divide-[#E8E4DC]">
                {comparison.map((row) => (
                  <div key={row.criteria} className="grid grid-cols-12 p-5 text-sm items-start transition hover:bg-neutral-50/50">
                    {/* Criteria */}
                    <div className="col-span-3 font-bold text-neutral-800 pr-2 text-sm">
                      {row.criteria}
                    </div>
                    {/* Oil Paint */}
                    <div className="col-span-4 text-neutral-600 text-sm pr-4 pl-2 leading-relaxed border-l border-neutral-100">
                      {row.oil}
                    </div>
                    {/* Lotus Paint */}
                    <div className="col-span-5 text-neutral-800 text-sm pl-4 leading-relaxed font-medium border-l-2 border-emerald-500/30 bg-emerald-50/10 py-1 rounded-r-lg">
                      <span className="text-[#1C2B2B]">{row.lotus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="mt-4 text-center text-xs text-neutral-400 font-medium">
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
      tag: "SƠN LÓT CHỐNG GỈ",
      desc: "Lót gốc nước chuyên dụng bám dính chắc chắn trên sắt, thép, mạ kẽm, nhôm — tạo liên kết bền vững ngăn chặn ăn mòn và gỉ sét từ lõi kim loại.",
      uses: "Lớp sơn đầu tiên bắt buộc cho hệ sơn 2 lớp tiêu chuẩn. Cực kỳ khuyên dùng cho cửa cổng ngoài trời, hàng rào, giàn sắt chịu nắng mưa liên tục.",
      color: "Xám (Grey)",
      dilution: "Nước sạch (5 - 10%)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30-60 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Mờ (Matt)",
      icon: Shield,
      image: primerImg,
    },
    {
      name: "Lotus Metal Coat Finish",
      tag: "SƠN PHỦ MÀU HOÀN THIỆN",
      desc: "Sơn màu cao cấp phủ bảo vệ và trang trí. Tạo màng sơn mịn đẹp vượt trội, bóng nhẹ sang trọng, giữ màu tối ưu dưới thời tiết nắng nóng khắc nghiệt.",
      uses: "Sơn phủ màu trang trí (lớp thứ 2) sau khi đã lót Primer. Thích hợp cho tất cả bề mặt kim loại nội và ngoại thất cần độ thẩm mỹ và độ bền màu cao.",
      color: "28 mã màu chính hãng",
      dilution: "Nước sạch (5 - 10%)",
      coverage: "6 - 7 m²/kg/lớp",
      time: "30-45 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng nhẹ (Satin / Semi-gloss)",
      icon: Paintbrush,
      image: finishImg,
    },
    {
      name: "Lotus Metal Coat 2in1 / DTM",
      tag: "SƠN ĐA NĂNG ĐỒNG THỜI (2-TRONG-1)",
      desc: "Sản phẩm đột phá tích hợp lót chống gỉ và phủ màu trong cùng một bước sơn. Bám dính trực tiếp cực mạnh lên sắt mạ kẽm, sắt hộp không cần sơn lót.",
      uses: "Giải pháp thi công siêu tốc cho các công trình sắt mạ kẽm, nhôm, inox trong nhà và ngoài trời ít chịu tác động ăn mòn trực tiếp từ thời tiết.",
      color: "28 mã màu chính hãng",
      dilution: "Nước sạch (tối đa 5%)",
      coverage: "5 - 6 m²/kg/lớp",
      time: "30 phút (khô bề mặt) · 2 giờ (lớp kế)",
      finish: "Bóng nhẹ sang trọng",
      icon: Layers,
      image: dtmImg,
    },
  ];

  return (
    <section id="san-pham" className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>CHI TIẾT SẢN PHẨM</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance text-[#1C2B2B]"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Thông số kỹ thuật & Hướng dẫn sử dụng chi tiết.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Mỗi dòng sản phẩm được Lotus thiết kế chuyên biệt để mang lại hiệu quả bảo vệ bền vững nhất cho từng loại công trình.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {products.map((p) => {
            return (
              <div
                key={p.name}
                className="relative flex flex-col rounded-xl border bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-[#E8E4DC]"
              >
                {/* Product Image */}
                <div className="overflow-hidden rounded-xl mb-5 aspect-[16/10] flex items-center justify-center bg-[#F7F5F2] border border-[#E8E4DC]/30">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="max-w-[85%] max-h-[85%] object-contain transition duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Product Badge */}
                <div className="mb-5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl font-extrabold text-neutral-900 tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 min-h-[72px]">{p.desc}</p>
                
                <div className="mt-4 rounded-xl bg-neutral-50 p-4 border border-neutral-100/50 space-y-2.5 text-xs text-neutral-700">
                  <div className="flex justify-between py-1 border-b border-neutral-200/40">
                    <span className="font-semibold text-neutral-400 uppercase tracking-wide">Màu sơn:</span>
                    <span className="font-bold text-neutral-800">{p.color}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/40">
                    <span className="font-semibold text-neutral-400 uppercase tracking-wide">Định mức phủ:</span>
                    <span className="font-bold text-neutral-800">{p.coverage}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/40">
                    <span className="font-semibold text-neutral-400 uppercase tracking-wide">Thời gian khô:</span>
                    <span className="font-bold text-neutral-800">{p.time}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-200/40">
                    <span className="font-semibold text-neutral-400 uppercase tracking-wide">Pha loãng:</span>
                    <span className="font-bold text-neutral-800">{p.dilution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-neutral-400 uppercase tracking-wide">Bề mặt màng sơn:</span>
                    <span className="font-bold text-neutral-800">{p.finish}</span>
                  </div>
                </div>

                <div className="mt-5 text-[13px] leading-relaxed text-neutral-600">
                  <span className="font-bold text-neutral-800">Ứng dụng phù hợp: </span>
                  {p.uses}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DECISION ---------------- */
function Decision() {
  const [activeTab, setActiveTab] = useState<"standard" | "dtm" | "premium">("standard");

  const standardSteps = [
    {
      step: 1,
      title: "Vệ sinh bề mặt kim loại",
      desc: "Chà nhám sạch các vết gỉ sét cũ, bụi bẩn, dầu mỡ bám dính. Lau khô hoàn toàn bằng khăn sạch để đảm bảo lực bám dính tốt nhất.",
      icon: RefreshCw,
    },
    {
      step: 2,
      title: "Sơn 1 lớp lót Primer chống gỉ",
      desc: "Sơn đều 1 lớp lót chống gỉ Lotus Metal Coat Primer. Đây là lớp bảo vệ cốt lõi giúp ngăn chặn oxy hóa ăn mòn sắt thép từ sâu bên trong.",
      icon: Shield,
    },
    {
      step: 3,
      title: "Sơn 2 lớp màu phủ hoàn thiện",
      desc: "Sơn tiếp 2 lớp phủ màu Lotus Metal Coat Finish sau khi lớp lót đã khô (khoảng 2 giờ). Đảm bảo bề mặt lên màu chuẩn xác, mịn bóng và kháng tia UV.",
      icon: Paintbrush,
    },
    {
      step: 4,
      title: "Rửa sạch dụng cụ bằng nước",
      desc: "Sơn gốc nước khô nhanh, không dính két. Chỉ cần đưa cọ vẽ, rulo dưới vòi nước sạch xả nhẹ là sạch bóng, không cần xăng dầu hôi hôi.",
      icon: Droplets,
    },
  ];

  const dtmSteps = [
    {
      step: 1,
      title: "Vệ sinh bề mặt sắt hộp",
      desc: "Lau sạch dầu mỡ phủ chống gỉ trên bề mặt sắt hộp mạ kẽm hoặc nhôm. Đảm bảo bề mặt khô ráo hoàn toàn trước khi lăn sơn.",
      icon: RefreshCw,
    },
    {
      step: 2,
      title: "Sơn trực tiếp lớp thứ nhất",
      desc: "Sơn trực tiếp 1 lớp Lotus Metal Coat 2in1 lên kim loại mà không cần lót. Màng sơn tự liên kết bám dính siêu chắc chắn.",
      icon: Paintbrush,
    },
    {
      step: 3,
      title: "Sơn lớp thứ hai để lên màu đều",
      desc: "Chờ 2 giờ cho lớp thứ nhất khô bề mặt, tiến hành sơn tiếp lớp thứ hai. Giúp màng sơn đạt độ dày bảo vệ tối ưu và bóng đẹp đồng màu.",
      icon: Layers,
    },
    {
      step: 4,
      title: "Rửa cọ lăn bằng nước sạch",
      desc: "Không mùi khó chịu, không dính tay. Vệ sinh toàn bộ dụng cụ thi công cực kỳ nhanh gọn và thân thiện với môi trường chỉ bằng nước máy.",
      icon: Droplets,
    },
  ];

  const premiumSteps = [
    {
      step: 1,
      title: "Vệ sinh bề mặt kim loại",
      desc: "Chà nhám sạch các vết gỉ sét cũ, bụi bẩn, dầu mỡ bám dính. Lau khô hoàn toàn bằng khăn sạch để đảm bảo lực bám dính tốt nhất.",
      icon: RefreshCw,
    },
    {
      step: 2,
      title: "Sơn 1 lớp lót Primer chống gỉ",
      desc: "Sơn đều 1 lớp lót chống gỉ Lotus Metal Coat Primer. Đây là lớp bảo vệ cốt lõi giúp ngăn chặn oxy hóa ăn mòn sắt thép từ sâu bên trong.",
      icon: Shield,
    },
    {
      step: 3,
      title: "Sơn 2 lớp màu phủ hoàn thiện",
      desc: "Sơn tiếp 2 lớp phủ màu Lotus Metal Coat Finish sau khi lớp lót đã khô (khoảng 2 giờ). Đảm bảo bề mặt lên màu chuẩn xác, mịn bóng và kháng tia UV.",
      icon: Paintbrush,
    },
    {
      step: 4,
      title: "Sơn 1 lớp phủ bóng bảo vệ ngoài trời",
      desc: "Sơn thêm 1 lớp sơn phủ bóng trong suốt bảo vệ ngoài trời. Tạo lớp màng chắn tia UV, chịu mưa nắng kéo dài, giữ màu bền vững.",
      icon: Sparkles,
    },
    {
      step: 5,
      title: "Rửa sạch dụng cụ bằng nước",
      desc: "Sơn gốc nước khô nhanh, không dính két. Chỉ cần đưa cọ vẽ, rulo dưới vòi nước sạch xả nhẹ là sạch bóng, không cần xăng dầu hôi hôi.",
      icon: Droplets,
    },
  ];

  return (
    <section id="chon-he-son" className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>HỆ SƠN & THI CÔNG</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance text-[#1C2B2B]"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Chọn đúng hệ sơn — Thi công đúng quy trình.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Lotus mang đến quy trình thi công tối giản, tiết kiệm thời gian mà vẫn đảm bảo độ bền tối ưu nhất cho từng hạng mục công trình.
        </p>

        {/* Tab Selector buttons */}
        <div className="mt-10 flex flex-wrap gap-3 border-b border-[#E8E4DC] pb-4">
          <button
            onClick={() => setActiveTab("standard")}
            className={`rounded-xl px-5 py-3 text-sm font-bold transition duration-200 ${
              activeTab === "standard"
                ? "bg-[#1C2B2B] text-white shadow-sm"
                : "bg-white border border-[#E8E4DC] text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Hệ chuẩn Bền Bỉ (Lót + Phủ)
          </button>
          <button
            onClick={() => setActiveTab("dtm")}
            className={`rounded-xl px-5 py-3 text-sm font-bold transition duration-200 ${
              activeTab === "dtm"
                ? "bg-[#2D7A3A] text-white shadow-sm"
                : "bg-white border border-[#E8E4DC] text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Hệ 2in1 Siêu Tốc (DTM trực tiếp)
          </button>
          <button
            onClick={() => setActiveTab("premium")}
            className={`rounded-xl px-5 py-3 text-sm font-bold transition duration-200 ${
              activeTab === "premium"
                ? "bg-[#E8541A] text-white shadow-sm"
                : "bg-white border border-[#E8E4DC] text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Hệ cao cấp (Lót + Phủ + Bóng)
          </button>
        </div>

        {/* Dynamic Tab Content */}
        <div className="mt-8">
          {activeTab === "standard" ? (
            <div>
              <div className="rounded-2xl border border-neutral-200/60 bg-[#FDFBF7] p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="rounded bg-[#E8F5E9] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#2D7A3A]">
                      Bền bỉ tối đa
                    </span>
                    <h3 className="mt-2 font-display text-xl font-extrabold text-neutral-900">
                      Quy trình Hệ Chuẩn (Primer + Finish)
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl">
                      Khuyên dùng tuyệt đối cho cổng sắt ngoài trời, lan can ban công, hàng rào sắt chịu nắng mưa trực tiếp. Lót chống gỉ trước giúp màng sơn màu bền bỉ gấp hai lần.
                    </p>
                  </div>
                  <a
                    href="#combo"
                    className="hidden md:inline-flex shrink-0 items-center justify-center rounded-xl bg-[#1C2B2B] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95"
                  >
                    Xem Combo Hệ chuẩn
                  </a>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {standardSteps.map((s) => (
                    <div key={s.step} className="relative rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-sm transition">
                      <span className="absolute -top-3 right-4 flex size-7 items-center justify-center rounded-full bg-[#1C2B2B] text-xs font-bold text-white font-display">
                        {s.step}
                      </span>
                      <h4 className="mt-4 font-display text-sm font-extrabold text-neutral-900 leading-snug">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#combo"
                  className="md:hidden mt-8 w-full inline-flex items-center justify-center rounded-xl bg-[#1C2B2B] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95"
                >
                  Xem Combo Hệ chuẩn
                </a>
              </div>
            </div>
          ) : activeTab === "dtm" ? (
            <div>
              <div className="rounded-2xl border border-neutral-200/60 bg-[#FDFBF7] p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="rounded bg-amber-50 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-700 border border-amber-200/30">
                      Thi công siêu tốc
                    </span>
                    <h3 className="mt-2 font-display text-xl font-extrabold text-neutral-900">
                      Quy trình Hệ 2in1 (Direct to Metal)
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl">
                      Giải pháp tiết kiệm 50% thời gian thi công cho sắt hộp mạ kẽm, cấu kiện nhôm kính, vật dụng sắt mỹ thuật trong nhà. Sơn trực tiếp không cần sơn lót riêng.
                    </p>
                  </div>
                  <a
                    href="#combo"
                    className="hidden md:inline-flex shrink-0 items-center justify-center rounded-xl bg-[#2D7A3A] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95"
                  >
                    Xem Combo Hệ 2in1
                  </a>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {dtmSteps.map((s) => (
                    <div key={s.step} className="relative rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-sm transition">
                      <span className="absolute -top-3 right-4 flex size-7 items-center justify-center rounded-full bg-[#2D7A3A] text-xs font-bold text-white font-display">
                        {s.step}
                      </span>
                      <h4 className="mt-4 font-display text-sm font-extrabold text-neutral-900 leading-snug">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#combo"
                  className="md:hidden mt-8 w-full inline-flex items-center justify-center rounded-xl bg-[#2D7A3A] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95"
                >
                  Xem Combo Hệ 2in1
                </a>
              </div>
            </div>
          ) : activeTab === "premium" ? (
            <div>
              <div className="rounded-2xl border border-neutral-200/60 bg-[#FDFBF7] p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="rounded bg-orange-50 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#E8541A] border border-orange-200/30">
                      Bảo vệ tối đa
                    </span>
                    <h3 className="mt-2 font-display text-xl font-extrabold text-neutral-900">
                      Quy trình Hệ Cao Cấp (Primer + Finish + Phủ bóng)
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl">
                      Giải pháp hoàn hảo cho cổng sắt ngoài trời, lan can ban công, hàng rào sắt chịu nắng mưa trực tiếp. Thêm lớp phủ bóng bảo vệ giúp màng sơn bền vững gấp ba lần.
                    </p>
                  </div>
                  <a
                    href="#combo"
                    className="hidden md:inline-flex shrink-0 items-center justify-center rounded-xl bg-[#E8541A] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95"
                  >
                    Xem Combo Hệ cao cấp
                  </a>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {premiumSteps.map((s) => (
                    <div key={s.step} className="relative rounded-xl border border-neutral-200 bg-white p-6 shadow-2xs hover:shadow-sm transition">
                      <span className="absolute -top-3 right-4 flex size-7 items-center justify-center rounded-full bg-[#E8541A] text-xs font-bold text-white font-display">
                        {s.step}
                      </span>
                      <h4 className="mt-4 font-display text-sm font-extrabold text-neutral-900 leading-snug">{s.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#combo"
                  className="md:hidden mt-8 w-full inline-flex items-center justify-center rounded-xl bg-[#E8541A] px-5 py-3 text-xs font-bold text-white transition hover:opacity-95"
                >
                  Xem Combo Hệ cao cấp
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPLICATIONS ---------------- */
function Applications() {
  const apps = [
    { img: heroImg, label: "Cổng sắt" },
    { img: appFence, label: "Hàng rào" },
    { img: appRailing, label: "Lan can ban công" },
    { img: project2, label: "Cửa sắt" },
    { img: appSteel, label: "Khung thép, kết cấu" },
    { img: appAluminum, label: "Nhôm / mạ kẽm" },
  ];
  return (
    <section id="hang-muc" className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>HẠNG MỤC ỨNG DỤNG</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Dùng được cho nhiều hạng mục — trong nhà và ngoài trời.
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {apps.map((a) => (
            <figure key={a.label} className="group relative overflow-hidden rounded-xl">
              <img
                src={a.img}
                alt={a.label}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <span className="text-[16px] sm:text-[17px] font-semibold">{a.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
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

  const selectCls =
    "w-full rounded-md border border-[#E8E4DC] bg-[#FDFBF7] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#E8541A] focus:ring-1 focus:ring-[#E8541A]/20 cursor-pointer font-medium";

  return (
    <section id="combo" className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>COMBO SẢN PHẨM</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Chọn combo phù hợp với hạng mục của bạn.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Thi công được bằng chổi quét, rulo lăn hoặc súng phun — tùy hạng mục và sở thích.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* CARD 1 */}
          <div
            className="relative flex flex-col rounded-xl border-2 bg-white p-8 shadow-md"
            style={{ borderColor: ORANGE }}
          >
            <div
              className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
              style={{ background: ORANGE }}
            >
              Khuyên dùng
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
              CƠ BẢN
            </div>
            <h3 className="mt-3 font-display text-[22px] sm:text-[24px] font-bold">Combo thông dụng</h3>
            <p className="mt-1 text-[15px] sm:text-[16px] text-neutral-600">Sơn lót chống gỉ + Sơn phủ màu hoàn thiện</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700">Lotus Metal Coat Primer</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700">Lotus Metal Coat Finish</span>
            </div>

            <div className="mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-neutral-800">Combo nhỏ — 2 hũ 1kg</p>
                    <p className="text-[15px] font-semibold mt-0.5" style={{ color: ORANGE }}>375.000đ</p>
                  </div>
                  <Stepper value={c1q1} onChange={setC1q1} />
                </div>
                {c1q1 > 0 && (
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c1q1Color}
                      onChange={(e) => setC1q1Color(e.target.value)}
                      className={selectCls}
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
                        className="mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                      />
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-neutral-800">Combo lớn — 2 thùng 5kg</p>
                    <p className="text-[15px] font-semibold mt-0.5" style={{ color: ORANGE }}>1.680.000đ</p>
                  </div>
                  <Stepper value={c1q2} onChange={setC1q2} />
                </div>
                {c1q2 > 0 && (
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c1q2Color}
                      onChange={(e) => setC1q2Color(e.target.value)}
                      className={selectCls}
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
                        className="mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4">
              <span className="text-sm font-medium text-neutral-500">Tạm tính</span>
              <span className="font-display text-lg font-bold text-neutral-800">Tổng: {formatVND(total1)}</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="relative flex flex-col rounded-xl border bg-white p-8"
            style={{ borderColor: "#E8E4DC" }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
              CHUYÊN NGHIỆP
            </div>
            <h3 className="mt-3 font-display text-[22px] sm:text-[24px] font-bold">Combo cao cấp</h3>
            <p className="mt-1 text-[15px] sm:text-[16px] text-neutral-600">Sơn lót + Sơn phủ màu + Sơn phủ trong suốt bảo vệ ngoài trời</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700">Primer</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700">Finish</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700">Sơn phủ trong suốt bảo vệ ngoài trời</span>
            </div>

            <div className="mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-neutral-800">Combo nhỏ — 3 hũ 1kg</p>
                    <p className="text-[15px] font-semibold mt-0.5" style={{ color: ORANGE }}>610.000đ</p>
                  </div>
                  <Stepper value={c2q1} onChange={setC2q1} />
                </div>
                {c2q1 > 0 && (
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c2q1Color}
                      onChange={(e) => setC2q1Color(e.target.value)}
                      className={selectCls}
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
                        className="mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                      />
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-neutral-800">Combo lớn — 3 thùng 5kg</p>
                    <p className="text-[15px] font-semibold mt-0.5" style={{ color: ORANGE }}>2.745.000đ</p>
                  </div>
                  <Stepper value={c2q2} onChange={setC2q2} />
                </div>
                {c2q2 > 0 && (
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c2q2Color}
                      onChange={(e) => setC2q2Color(e.target.value)}
                      className={selectCls}
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
                        className="mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4">
              <span className="text-sm font-medium text-neutral-500">Tạm tính</span>
              <span className="font-display text-lg font-bold text-neutral-800">Tổng: {formatVND(total2)}</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="relative flex flex-col rounded-xl border bg-white p-8"
            style={{ borderColor: "#E8E4DC" }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500">
              THI CÔNG NHANH
            </div>
            <h3 className="mt-3 font-display text-[22px] sm:text-[24px] font-bold">Tiết kiệm lót và phủ màu chung 2in1</h3>
            <p className="mt-1 text-[15px] sm:text-[16px] text-neutral-600">Sơn thẳng lên mạ kẽm, nhôm, sắt hộp — không cần lót riêng.</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-neutral-100 px-2 py-1 text-[13px] text-neutral-700">Lotus Metal Coat 2in1 / DTM</span>
            </div>

            <div className="mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-neutral-800">Hũ 1kg</p>
                    <p className="text-[15px] font-semibold mt-0.5" style={{ color: ORANGE }}>210.000đ</p>
                  </div>
                  <Stepper value={c3q1} onChange={setC3q1} />
                </div>
                {c3q1 > 0 && (
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c3q1Color}
                      onChange={(e) => setC3q1Color(e.target.value)}
                      className={selectCls}
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
                        className="mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                      />
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold text-neutral-800">Thùng 5kg</p>
                    <p className="text-[15px] font-semibold mt-0.5" style={{ color: ORANGE }}>890.000đ</p>
                  </div>
                  <Stepper value={c3q2} onChange={setC3q2} />
                </div>
                {c3q2 > 0 && (
                  <div className="flex flex-col gap-1 pl-1">
                    <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">Mã màu sơn:</span>
                    <select
                      value={c3q2Color}
                      onChange={(e) => setC3q2Color(e.target.value)}
                      className={selectCls}
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
                        className="mt-2 w-full rounded-md border border-[#E8E4DC] px-2.5 py-1.5 text-xs text-neutral-800 outline-none transition focus:border-[#2D7A3A]"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4">
              <span className="text-sm font-medium text-neutral-500">Tạm tính</span>
              <span className="font-display text-lg font-bold text-neutral-800">Tổng: {formatVND(total3)}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: OFFWHITE }}>
          <div>
            <p className="text-[18px] sm:text-[20px] font-bold text-neutral-900">Tổng giá trị đơn hàng</p>
            <p className="text-[15px] text-neutral-500 mt-1">Định mức: hũ 1kg ~ 5m2; thùng 5kg ~ 25m2</p>
          </div>
          <div className="md:text-right">
            {paymentMethod === "online" ? (
              <div className="flex flex-col md:items-end">
                <span className="text-sm text-neutral-400 line-through font-medium">
                  {formatVND(grandTotal)}
                </span>
                <span className="font-display text-3xl font-extrabold" style={{ color: ORANGE }}>
                  {formatVND(Math.round(grandTotal * 0.9))}
                </span>
              </div>
            ) : (
              <span className="font-display text-3xl font-extrabold" style={{ color: ORANGE }}>
                {formatVND(grandTotal)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#order-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex w-full items-center justify-center rounded-xl py-4 text-[17px] sm:text-[18px] font-bold text-white transition hover:opacity-95 shadow-md"
            style={{ background: ORANGE }}
          >
            Tiếp tục điền thông tin đặt hàng
          </a>
        </div>

        <p className="mt-4 text-center text-[13px] text-neutral-500">
          Hơn 500+ đơn hàng đã giao thành công
        </p>
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

  const handleSubmit = (e: React.FormEvent) => {
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
      timestamp: Date.now(),
    };

    sessionStorage.setItem("lotusOrder", JSON.stringify(orderData));
    
    // Redirect to /thank-you?phone={phone}
    window.location.href = `/thank-you?phone=${encodeURIComponent(phone.trim())}`;
  };

  const inputCls =
    "w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1C2B2B] focus:ring-2 focus:ring-[#1C2B2B]/20";

  const errorInputCls = "border-red-500 ring-2 ring-red-500/20 focus:border-red-500";

  return (
    <section id="order-form" className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN — ORDER FORM */}
        <div className="lg:col-span-7">
          <p className={LABEL_CLS} style={{ color: ORANGE }}>ĐẶT HÀNG NGAY</p>
          <h2
            className="mt-4 font-display font-bold text-balance text-[#1C2B2B]"
            style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Hoàn tất đơn hàng — Lotus giao hàng tận nơi.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-neutral-600">
            Đặt ngay hôm nay — Nhận sơn tại nhà, bắt đầu thi công cuối tuần này. Giao hàng 24–48h tại TP.HCM và các tỉnh lân cận.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 rounded-2xl border border-[#E8E4DC] bg-white p-6 sm:p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="block relative">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Họ và tên *
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className={`${inputCls} ${errors.name ? errorInputCls : ""}`}
                />
                {errors.name && (
                  <div className="absolute z-10 mt-1.5 rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm after:absolute after:bottom-full after:left-4 after:border-4 after:border-transparent after:border-b-red-500">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="block relative">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Số điện thoại *
                </span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xx xxx xxx"
                  className={`${inputCls} ${errors.phone ? errorInputCls : ""}`}
                />
                {errors.phone && (
                  <div className="absolute z-10 mt-1.5 rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm after:absolute after:bottom-full after:left-4 after:border-4 after:border-transparent after:border-b-red-500">
                    {errors.phone}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 block relative">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Địa chỉ giao hàng *
              </span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố"
                className={`${inputCls} ${errors.address ? errorInputCls : ""}`}
              />
              {errors.address && (
                <div className="absolute z-10 mt-1.5 rounded bg-red-500 px-2.5 py-1 text-[11px] font-bold text-white shadow-sm after:absolute after:bottom-full after:left-4 after:border-4 after:border-transparent after:border-b-red-500">
                  {errors.address}
                </div>
              )}
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Ghi chú
              </span>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Màu sơn muốn chọn, yêu cầu kỹ thuật đặc biệt..."
                className={inputCls}
              />
            </label>

            {/* ORDER SUMMARY BOX */}
            <div className="mt-6 rounded-xl border border-[#E8541A]/30 bg-[#FDFBF7] p-5">
              <p className="text-sm font-bold uppercase tracking-wide" style={{ color: ORANGE }}>
                Thông tin đơn hàng
              </p>
              <div className="mt-3 space-y-3.5 text-sm text-neutral-800">
                {activeItems.length > 0 ? (
                  activeItems.map((it) => {
                    const displayColor = it.color === "Tùy chỉnh" ? (it.custom || "Màu tùy chỉnh chưa ghi chú") : (it.color || "Chưa chọn");
                    return (
                      <div key={it.name} className="py-2 px-1 border-b border-neutral-100/50 last:border-none flex justify-between items-center text-sm">
                        <div className="flex flex-col leading-snug">
                          <span className="font-semibold text-neutral-800">— {it.name} x{it.qty}</span>
                          <span className="text-xs text-neutral-500 font-medium">
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
                  <p className="text-[#2D7A3A] font-semibold text-sm pt-2.5 border-t border-dashed border-neutral-200">
                    — Giảm giá Online (10%): -{formatVND(discount)}
                  </p>
                )}
              </div>
              <div className="my-4 border-t border-[#E8E4DC]" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-700">Thành tiền:</span>
                {paymentMethod === "online" ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-400 line-through font-medium">
                      {formatVND(grandTotal)}
                    </span>
                    <span className="font-display text-xl font-extrabold" style={{ color: ORANGE }}>
                      {formatVND(finalTotal)}
                    </span>
                  </div>
                ) : (
                  <span className="font-display text-xl font-extrabold" style={{ color: ORANGE }}>
                    {formatVND(grandTotal)}
                  </span>
                )}
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
                * Giá chưa bao gồm phí vận chuyển. Có thể thay đổi tùy diện tích thực tế.
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                Định mức: Combo nhỏ 1kg ~ 5m²; Combo lớn 5kg ~ 25m²
              </p>
            </div>

            {/* PAYMENT METHOD SECTION */}
            <div className="mt-6 border-t border-[#E8E4DC] pt-6">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Phương thức thanh toán
              </span>
              <div className="grid gap-3 sm:grid-cols-2">
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${
                    paymentMethod === "cod"
                      ? "border-[#2D7A3A] bg-[#E8F5E9]/10"
                      : "border-[#E8E4DC] bg-white hover:bg-neutral-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-[#2D7A3A] size-4 cursor-pointer"
                  />
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-neutral-800">Thanh toán khi nhận hàng (COD)</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Không giảm giá</p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("online")}
                  className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${
                    paymentMethod === "online"
                      ? "border-[#2D7A3A] bg-[#E8F5E9]/10"
                      : "border-[#E8E4DC] bg-white hover:bg-neutral-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    className="accent-[#2D7A3A] size-4 cursor-pointer"
                  />
                  <div className="leading-tight flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-sm font-bold text-neutral-800">Chuyển khoản Online</p>
                      <span className="rounded bg-[#E8F5E9] px-2 py-0.5 text-[10px] font-bold text-[#2D7A3A]">
                        Tiết kiệm 10%
                      </span>
                    </div>
                    <p className="text-xs text-[#2D7A3A] font-semibold mt-0.5">Giảm ngay 10%</p>
                  </div>
                </div>
              </div>
            </div>

            {errors.combos && (
              <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-xs text-red-600 font-semibold flex items-center gap-2">
                <span>⚠️ {errors.combos}</span>
              </div>
            )}

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center rounded-lg py-4 text-base font-bold text-white transition hover:opacity-95 shadow-sm"
              style={{ background: "#E8541A" }}
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
          <div className="rounded-xl bg-[#1C2B2B] p-8 text-white lg:sticky lg:top-24 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
              TƯ VẤN NHANH NHẤT
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">Nhắn Zalo Lotus</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-neutral-300">
              Gửi ảnh hạng mục qua Zalo để được tư vấn đúng hệ sơn, đúng combo và bảng màu phù hợp.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-200">
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Phản hồi nhanh trong vòng 15 phút</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Tư vấn đúng hệ theo từng hạng mục</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold text-base">✓</span>
                <span>Báo giá rõ ràng, hướng dẫn kỹ thuật chi tiết</span>
              </li>
            </ul>

            <a
              href="https://zalo.me/0943966662"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-lg py-4 text-base font-bold text-white transition hover:opacity-95 shadow-sm"
              style={{ background: "#E8541A" }}
            >
              Gửi ảnh qua Zalo →
            </a>

            <div className="my-6 border-t border-neutral-700" />

            <div className="leading-tight">
              <p className="font-bold text-white text-lg">Hotline: 0943 966 662</p>
              <p className="mt-1 text-xs text-neutral-400">Giờ làm việc: 8:00 – 18:00, Thứ 2 – Thứ 7</p>
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
        "Trước giờ toàn dùng sơn dầu, lần này thử Lotus thấy khác hẳn — không có mùi xăng, sơn xong ở nhà luôn được. Bề mặt ra đẹp, mịn không thua gì.",
      author: "Anh Hùng — Chủ nhà",
    },
    {
      img: project1,
      item: "Hàng rào sắt + lan can",
      system: "2in1 / DTM",
      area: "Bình Dương",
      quote:
        "Dùng 2in1 cho hàng rào mạ kẽm, không cần lót riêng mà vẫn bám chắc. Tiết kiệm được một bước, thi công nhanh hơn rõ ràng. Sau mưa vẫn ổn.",
      author: "Anh Tâm — Nhà thầu",
    },
    {
      img: appSteel,
      item: "Khung thép xưởng",
      system: "Primer + Finish",
      area: "Long An",
      quote:
        "Chuyển từ sơn dầu sang Lotus cho khung thép xưởng — thợ làm dễ hơn vì không mùi, rửa cọ bằng nước là xong. Chống gỉ tốt, bám chắc trên thép cũ.",
      author: "Anh Phong — Chủ xưởng",
    },
  ];
  return (
    <section id="du-an" className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>DỰ ÁN THỰC TẾ</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Một số hạng mục đã thi công với hệ sơn Lotus Metal Coat.
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.item} className="overflow-hidden rounded-xl border border-[#E8E4DC] bg-white">
              <img src={it.img} alt={it.item} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5">
                  <Chip>Hạng mục: {it.item}</Chip>
                  <Chip>Hệ sơn: {it.system}</Chip>
                  <Chip>Khu vực: {it.area}</Chip>
                </div>
                <p className="mt-4 text-[15px] italic leading-relaxed text-neutral-800">"{it.quote}"</p>
                <p className="mt-2 text-sm font-medium text-neutral-500">— {it.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">
      {children}
    </span>
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
      q: "Sơn lên bề mặt mạ kẽm hoặc nhôm được không?",
      a: "Hoàn toàn được. Dòng Lotus 2in1 / DTM được thiết kế chuyên biệt với độ bám dính siêu hạng trên các bề mặt khó bám như sắt hộp mạ kẽm, nhôm, inox mà không cần lót riêng.",
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
    <section id="faq" className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-1">
          <p className={LABEL_CLS} style={{ color: ORANGE }}>FAQ</p>
          <h2
            className="mt-4 font-display font-bold text-balance"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Câu hỏi hay gặp khi chuyển từ sơn dầu sang sơn gốc nước.
          </h2>
          <p className="mt-4 text-neutral-600">
            Câu hỏi thường gặp về sơn Lotus Metal Coat.
          </p>
        </div>
        <div className="lg:col-span-2">
          <Accordion type="single" collapsible className="space-y-3">
            {qa.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-[#E8E4DC] bg-white px-5"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-neutral-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-[#E8E4DC] bg-white">
      <div className="container-x grid gap-10 py-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt={`${BRAND} logo`} className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-widest text-neutral-500">{PRODUCT_LINE}</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-neutral-600">
            Giải pháp sơn kim loại gốc nước cho cổng, hàng rào, lan can, khung thép và nhiều hạng mục kim loại khác — trong nhà và ngoài trời.
          </p>
          <div className="mt-5 space-y-1.5 text-sm">
            <div className="font-semibold">{COMPANY_NAME}</div>
            <div className="text-neutral-600">MST: <span className="text-black">{COMPANY_TAX_ID}</span></div>
            <div className="text-neutral-600">Đ/c: <span className="text-black">{COMPANY_ADDRESS}</span></div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-500">Sản phẩm</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#san-pham" className="hover:opacity-70">Metal Coat Primer</a></li>
            <li><a href="#san-pham" className="hover:opacity-70">Metal Coat Finish</a></li>
            <li><a href="#san-pham" className="hover:opacity-70">Metal Coat 2in1 / DTM</a></li>
            <li><a href="#chon-he-son" className="hover:opacity-70">So sánh hệ sơn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-neutral-500">Liên hệ</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={`tel:${HOTLINE_TEL}`} className="font-semibold hover:opacity-70">Hotline: {HOTLINE}</a></li>
            <li><a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Zalo: {HOTLINE}</a></li>
            <li className="text-neutral-600">Giờ làm việc: 8:00 – 18:00 (T2 – T7)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#E8E4DC]">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {BRAND} — Lotus Metal Coat. Mọi quyền được bảo lưu.</span>
          <span>Sơn kim loại gốc nước · Chống gỉ · Bền màu · Dễ thi công</span>
        </div>
      </div>
    </footer>
  );
}
