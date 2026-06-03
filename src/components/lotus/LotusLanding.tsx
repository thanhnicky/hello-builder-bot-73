import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0" style={{ color: TEXT }}>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Products />
        <ColorChart />
        <Decision />
        <Applications />
        <Process />
        <Combos
          c1q1={c1q1} setC1q1={setC1q1}
          c1q2={c1q2} setC1q2={setC1q2}
          c2q1={c2q1} setC2q1={setC2q1}
          c2q2={c2q2} setC2q2={setC2q2}
          c3q1={c3q1} setC3q1={setC3q1}
          c3q2={c3q2} setC3q2={setC3q2}
        />
        <FormSection
          c1q1={c1q1}
          c1q2={c1q2}
          c2q1={c2q1}
          c2q2={c2q2}
          c3q1={c3q1}
          c3q2={c3q2}
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
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-600 md:flex">
          <a href="#san-pham" className="hover:text-black">Sản phẩm</a>
          <a href="#bang-mau" className="hover:text-black">Bảng màu</a>
          <a href="#chon-he-son" className="hover:text-black">Chọn hệ sơn</a>
          <a href="#combo" className="hover:text-black">Combo</a>
          <a href="#order-form" className="hover:text-black">Đặt Hàng</a>
          <a href="#hang-muc" className="hover:text-black">Hạng mục</a>
          <a href="#du-an" className="hover:text-black">Dự án</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
        </nav>
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
      </div>
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
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-base font-semibold text-white transition hover:opacity-95"
              style={{ background: ORANGE }}
            >
              Nhắn Zalo để chọn đúng hệ sơn →
            </a>
            <a
              href="#san-pham"
              className="inline-flex items-center justify-center rounded-lg border-2 px-7 py-4 text-base font-semibold transition hover:bg-[#1C2B2B] hover:text-white"
              style={{ borderColor: DARK, color: DARK }}
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
  const lines = [
    {
      tag: "LỚP LÓT",
      name: "Lotus Metal Coat Primer",
      desc: "Lớp nền chống gỉ gốc nước — bám chắc lên sắt mới, sắt cũ, cả nhôm và mạ kẽm. Lót trước khi sơn màu để hệ sơn bền lâu hơn đáng kể.",
    },
    {
      tag: "LỚP PHỦ",
      name: "Lotus Metal Coat Finish",
      desc: "Sơn màu hoàn thiện gốc nước — phủ lên lớp lót để có bề mặt đẹp, đồng màu, bền thời tiết. Không mùi, dễ sơn lại nếu cần.",
    },
    {
      tag: "ĐA NĂNG — KHUYÊN DÙNG",
      name: "Lotus Metal Coat 2in1 / DTM",
      desc: "Sơn thẳng lên sắt hộp mạ kẽm mà không cần lót riêng — lý tưởng cho thợ thi công cần tiết kiệm bước mà vẫn chống gỉ đạt yêu cầu.",
    },
  ];
  return (
    <section className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>GIẢI PHÁP LOTUS</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Một bộ sản phẩm. Ba lựa chọn rõ ràng.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Gốc nước hoàn toàn — pha nước, rửa nước, không xăng dung môi. Chọn đúng hệ theo hạng mục là xong.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {lines.map((l, i) => (
            <div
              key={l.name}
              className="rounded-xl border border-[#E8E4DC] bg-white p-8"
            >
              <div className="flex items-baseline gap-4">
                <span
                  className="font-display text-3xl font-bold tabular-nums text-[#1C2B2B]"
                >
                  0{i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                  {l.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{l.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{l.desc}</p>
            </div>
          ))}
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
      desc: "Lót gốc nước bám chắc trên sắt, thép, nhôm, mạ kẽm — ngay cả bề mặt khó bám mà sơn dầu thường trượt.",
      uses: "Bước đầu tiên của hệ chuẩn 2 lớp — cổng, lan can, hàng rào cần độ bền cao.",
    },
    {
      name: "Lotus Metal Coat Finish",
      tag: "SƠN PHỦ MÀU",
      desc: "Màu hoàn thiện đẹp, đều, không loang — sơn lên sau lớp lót khi khô. Rửa cọ bằng nước, không mùi, thi công trong nhà được.",
      uses: "Đi cùng Primer tạo hệ 2 lớp chuẩn — cho cổng, cửa sắt, lan can, khung thép.",
    },
    {
      name: "Lotus Metal Coat 2in1 / DTM",
      tag: "ĐA NĂNG — KHUYÊN DÙNG",
      desc: "Sơn trực tiếp lên sắt mạ kẽm, nhôm, sắt hộp — không cần lót. Một bước, tiết kiệm thời gian, vẫn chống gỉ và bám dính đạt yêu cầu.",
      uses: "Thi công nhanh, hạng mục không quá khắc nghiệt — cổng, hàng rào, nội thất sắt trong nhà.",
      featured: true,
    },
  ];
  return (
    <section id="san-pham" className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>SẢN PHẨM</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Chọn đúng sản phẩm cho hạng mục của bạn.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Mỗi sản phẩm phục vụ một bước khác nhau trong quy trình — hoặc gộp làm một nếu chọn 2in1.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className="relative flex flex-col rounded-xl border bg-white p-8"
              style={{
                borderColor: "#E8E4DC",
              }}
            >
              {p.featured && (
                <div
                  className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{ background: ORANGE }}
                >
                  Khuyên dùng
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                {p.tag}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{p.desc}</p>
              <div className="mt-4 text-[14px] leading-relaxed text-neutral-700">
                <span className="font-semibold">Phù hợp: </span>
                {p.uses}
              </div>
              <a
                href="#form"
                className="mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E8541A]/90"
                style={{ background: ORANGE }}
              >
                Chọn sản phẩm này →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- DECISION ---------------- */
function Decision() {
  const rows = [
    {
      title: "Hệ chuẩn Primer + Finish",
      desc: "Chọn khi hạng mục ngoài trời, tiếp xúc thời tiết, hoặc cần bề mặt thật đẹp. Hai lớp — lót trước, phủ màu sau. Bền hơn đáng kể so với chỉ sơn phủ đơn.",
      tag: "BỀN LÂU",
    },
    {
      title: "Hệ 2in1 / DTM",
      desc: "Chọn khi sơn sắt hộp mạ kẽm, nhôm, hoặc hạng mục trong nhà không cần quá nhiều lớp. Một sản phẩm làm cả hai việc — không cần lót riêng.",
      tag: "THI CÔNG NHANH",
    },
    {
      title: "Chưa chắc nên chọn loại nào?",
      desc: "Nhắn Zalo gửi ảnh hạng mục thực tế — Lotus tư vấn đúng hệ sơn trong vài phút, miễn phí, không ép mua.",
      tag: "TƯ VẤN MIỄN PHÍ",
      zalo: true,
    },
  ];
  return (
    <section id="chon-he-son" className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>CHỌN HỆ SƠN</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance text-[#1C2B2B]"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Hai hệ sơn — chọn theo hạng mục, không phải theo thói quen.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Hệ chuẩn cho độ bền tối ưu. Hệ 2in1 cho thi công nhanh. Cả hai đều gốc nước — không xăng dung môi.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {rows.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-[#E8E4DC] bg-white p-8 ring-soft"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: ORANGE }}>
                {r.tag}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-[#1C2B2B]">{r.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">{r.desc}</p>
              {r.zalo && (
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#E8541A]/90 transition"
                  style={{ background: ORANGE }}
                >
                  Gửi ảnh hạng mục qua Zalo →
                </a>
              )}
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
                <span className="text-[15px] font-semibold">{a.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const A = [
    "Vệ sinh bề mặt — tẩy gỉ, lau sạch dầu mỡ và bụi bẩn.",
    "Sơn lớp lót Primer — chống gỉ, tăng bám dính. Khô sau 1–2 giờ (không cần chờ qua đêm như sơn dầu).",
    "Sơn lớp phủ Finish — màu hoàn thiện đẹp, đều.",
    "Rửa cọ bằng nước — không cần xăng, sạch tay, xong việc.",
  ];
  const B = [
    "Vệ sinh bề mặt — tẩy gỉ, lau sạch.",
    "Sơn lớp 1 Lotus 2in1 / DTM trực tiếp lên kim loại — không cần lót riêng.",
    "Khô sau 1–2 giờ, sơn lớp 2 để màu đều và chắc hơn.",
    "Rửa cọ bằng nước. Gọn, nhanh, không mùi.",
  ];
  return (
    <section className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>QUY TRÌNH THI CÔNG</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Hai cách thi công — đơn giản hơn sơn dầu nhiều.
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ProcessCard title="Hệ chuẩn Primer + Finish" tag="BỀN TỐI ƯU" steps={A} />
          <ProcessCard title="Hệ 2in1 / DTM" tag="THI CÔNG NHANH" steps={B} accent />
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  title,
  tag,
  steps,
  accent = false,
}: {
  title: string;
  tag: string;
  steps: string[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-[#E8E4DC] bg-white">
      <div className="flex items-center justify-between border-b border-[#E8E4DC] px-6 py-4">
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <span
          className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
          style={{ background: DARK }}
        >
          {tag}
        </span>
      </div>
      <ol className="divide-y divide-[#E8E4DC]">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4 px-6 py-5">
            <span
              className="font-display text-base font-bold tabular-nums"
              style={{ color: TEXT, minWidth: 22 }}
            >
              {i + 1}.
            </span>
            <p className="text-[15px] leading-relaxed text-neutral-800">{s}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------- COMBOS ---------------- */
function Combos({
  c1q1, setC1q1,
  c1q2, setC1q2,
  c2q1, setC2q1,
  c2q2, setC2q2,
  c3q1, setC3q1,
  c3q2, setC3q2,
}: {
  c1q1: number; setC1q1: (v: number) => void;
  c1q2: number; setC1q2: (v: number) => void;
  c2q1: number; setC2q1: (v: number) => void;
  c2q2: number; setC2q2: (v: number) => void;
  c3q1: number; setC3q1: (v: number) => void;
  c3q2: number; setC3q2: (v: number) => void;
}) {

  const total1 = c1q1 * 375000 + c1q2 * 1680000;
  const total2 = c2q1 * 751000 + c2q2 * 3420000;
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
            className="relative flex flex-col rounded-xl border bg-white p-8"
            style={{ borderColor: "#E8E4DC" }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              CƠ BẢN
            </div>
            <h3 className="mt-3 font-display text-xl font-bold">Combo tiết kiệm</h3>
            <p className="mt-1 text-sm text-neutral-600">Sơn lót chống gỉ + Sơn phủ màu hoàn thiện</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700">✓ Lotus Metal Coat Primer</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700">✓ Lotus Metal Coat Finish</span>
            </div>

            <div className="mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">Combo nhỏ — 2 hũ 1kg</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: ORANGE }}>375.000đ</p>
                </div>
                <Stepper value={c1q1} onChange={setC1q1} />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">Combo lớn — 2 thùng 5kg</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: ORANGE }}>1.680.000đ</p>
                </div>
                <Stepper value={c1q2} onChange={setC1q2} />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4">
              <span className="text-sm font-medium text-neutral-500">Tạm tính</span>
              <span className="font-display text-lg font-bold text-neutral-800">Tổng: {formatVND(total1)}</span>
            </div>
          </div>

          {/* CARD 2 */}
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
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              PHỔ BIẾN NHẤT
            </div>
            <h3 className="mt-3 font-display text-xl font-bold">Combo thông dụng</h3>
            <p className="mt-1 text-sm text-neutral-600">Sơn lót + Sơn phủ màu + Sơn phủ trong suốt bảo vệ ngoài trời</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700">✓ Primer</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700">✓ Finish</span>
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700">✓ Sơn phủ trong suốt bảo vệ ngoài trời</span>
            </div>

            <div className="mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">Combo nhỏ — 3 hũ 1kg</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: ORANGE }}>751.000đ</p>
                </div>
                <Stepper value={c2q1} onChange={setC2q1} />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">Combo lớn — 3 thùng 5kg</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: ORANGE }}>3.420.000đ</p>
                </div>
                <Stepper value={c2q2} onChange={setC2q2} />
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
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
              THI CÔNG NHANH
            </div>
            <h3 className="mt-3 font-display text-xl font-bold">Gói 2in1 / DTM</h3>
            <p className="mt-1 text-sm text-neutral-600">Sơn thẳng lên mạ kẽm, nhôm, sắt hộp — không cần lót riêng.</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded bg-neutral-100 px-2 py-1 text-xs text-neutral-700">✓ Lotus Metal Coat 2in1 / DTM</span>
            </div>

            <div className="mt-8 flex-1 space-y-5 border-t border-[#E8E4DC] pt-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">Hũ 1kg</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: ORANGE }}>210.000đ</p>
                </div>
                <Stepper value={c3q1} onChange={setC3q1} />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-800">Thùng 5kg</p>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: ORANGE }}>890.000đ</p>
                </div>
                <Stepper value={c3q2} onChange={setC3q2} />
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E8E4DC] border-dashed pt-4">
              <span className="text-sm font-medium text-neutral-500">Tạm tính</span>
              <span className="font-display text-lg font-bold text-neutral-800">Tổng: {formatVND(total3)}</span>
            </div>
          </div>
        </div>

        {/* GRAND TOTAL BAR */}
        <div className="mt-12 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6" style={{ background: OFFWHITE }}>
          <div>
            <p className="text-lg font-bold text-neutral-900">Tổng giá trị đơn hàng</p>
            <p className="text-sm text-neutral-500 mt-1">Định mức: hũ 1kg ~ 5m²; thùng 5kg ~ 25m²</p>
          </div>
          <div className="md:text-right">
            <span className="font-display text-3xl font-extrabold" style={{ color: ORANGE }}>
              {formatVND(grandTotal)}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#order-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex w-full items-center justify-center rounded-xl py-4 text-base font-bold text-white transition hover:opacity-95 shadow-md"
            style={{ background: ORANGE }}
          >
            Tiếp tục điền thông tin đặt hàng →
          </a>
        </div>

        <p className="mt-4 text-center text-xs text-neutral-500">
          Hơn 500+ đơn hàng đã giao thành công · Nhắn Zalo gửi ảnh hạng mục để được tư vấn nhanh.
        </p>
      </div>
    </section>
  );
}

/* ---------------- FORM SECTION ---------------- */
function FormSection({
  c1q1,
  c1q2,
  c2q1,
  c2q2,
  c3q1,
  c3q2,
}: {
  c1q1: number;
  c1q2: number;
  c2q1: number;
  c2q2: number;
  c3q1: number;
  c3q2: number;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const orderItems = [
    { name: "Combo tiết kiệm nhỏ", qty: c1q1, price: 375000 },
    { name: "Combo tiết kiệm lớn", qty: c1q2, price: 1680000 },
    { name: "Combo thông dụng nhỏ", qty: c2q1, price: 751000 },
    { name: "Combo thông dụng lớn", qty: c2q2, price: 3420000 },
    { name: "Hũ 1kg 2in1", qty: c3q1, price: 210000 },
    { name: "Thùng 5kg 2in1", qty: c3q2, price: 890000 },
  ];

  const activeItems = orderItems.filter((it) => it.qty > 0);
  const grandTotal = orderItems.reduce((sum, it) => sum + it.qty * it.price, 0);

  function formatVND(val: number) {
    return val.toLocaleString("vi-VN") + "đ";
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Vui lòng nhập họ tên";
    if (!phone.trim()) {
      errs.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^(0|\+84)\d{8,10}$/.test(phone.trim())) {
      errs.phone = "Số điện thoại chưa hợp lệ";
    }
    if (!address.trim()) errs.address = "Vui lòng nhập địa chỉ giao hàng";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-lg border border-[#E8E4DC] bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-[#1C2B2B] focus:ring-2 focus:ring-[#1C2B2B]/20";

  if (submitted) {
    return (
      <section id="order-form" className="py-[72px]" style={{ background: OFFWHITE }}>
        <div className="container-x max-w-xl text-center">
          <div className="rounded-2xl border border-[#E8E4DC] bg-white p-8 shadow-sm">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#1C2B2B] text-white text-xl">
              ✓
            </span>
            <h3 className="mt-4 text-xl font-bold text-neutral-900">Đặt hàng thành công!</h3>
            <p className="mt-2 text-sm text-neutral-600 font-medium">
              Cảm ơn {name}. Lotus đã nhận được đơn hàng của bạn và sẽ liên hệ xác nhận qua Zalo hoặc số điện thoại trong vòng 30 phút.
            </p>
            <p className="mt-4 text-xs italic text-neutral-400">
              Hình thức thanh toán đã chọn: {paymentMethod === "cod" ? "Thanh toán khi nhận hàng (COD)" : "Chuyển khoản Online"}
            </p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ background: "#E8541A" }}
            >
              Nhắn Zalo Lotus ngay để xác nhận nhanh →
            </a>
          </div>
        </div>
      </section>
    );
  }

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
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Họ và tên *
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  className={inputCls}
                />
                {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Số điện thoại *
                </span>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xx xxx xxx"
                  className={inputCls}
                />
                {errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Địa chỉ giao hàng *
              </span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố"
                className={inputCls}
              />
              {errors.address && <span className="mt-1 block text-xs text-red-600">{errors.address}</span>}
            </label>

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
              <div className="mt-3 space-y-1.5 text-sm text-neutral-800">
                {activeItems.length > 0 ? (
                  activeItems.map((it) => (
                    <p key={it.name}>
                      — {it.name} x{it.qty}: {formatVND(it.qty * it.price)}
                    </p>
                  ))
                ) : (
                  <p className="text-sm italic text-neutral-500">
                    Chưa chọn sản phẩm — vui lòng chọn combo ở trên.
                  </p>
                )}
              </div>
              <div className="my-4 border-t border-[#E8E4DC]" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-700">Thành tiền:</span>
                <span className="font-display text-xl font-extrabold" style={{ color: ORANGE }}>
                  {formatVND(grandTotal)}
                </span>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-neutral-400">
                * Giá chưa bao gồm phí vận chuyển. Có thể thay đổi tùy diện tích thực tế.
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                Định mức: Combo nhỏ 1kg ~ 5m²; Combo lớn 5kg ~ 25m²
              </p>
            </div>

            {/* PAYMENT METHOD */}
            <div className="mt-6 border-t border-[#E8E4DC] pt-6">
              <p className="text-base font-bold text-neutral-900">Hình thức thanh toán</p>
              <div className="mt-3 space-y-3">
                <label className="flex items-start gap-3 rounded-lg border border-[#E8E4DC] p-3 transition hover:bg-neutral-50 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mt-1 accent-[#E8541A]"
                  />
                  <div>
                    <span className="text-sm font-semibold text-neutral-800">COD — Thanh toán khi nhận hàng</span>
                  </div>
                </label>
                <label className="flex items-start gap-3 rounded-lg border border-[#E8E4DC] p-3 transition hover:bg-neutral-50 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === "online"}
                    onChange={() => setPaymentMethod("online")}
                    className="mt-1 accent-[#E8541A]"
                  />
                  <div>
                    <span className="text-sm font-semibold text-neutral-800">Chuyển khoản Online</span>
                    <span className="mt-0.5 block text-xs font-semibold" style={{ color: ORANGE }}>
                      Miễn phí giao hàng và giảm 10%
                    </span>
                  </div>
                </label>
              </div>
            </div>

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
            Còn thắc mắc khác? Nhắn Zalo để được giải đáp trực tiếp.
          </p>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1C2B2B]/90 transition"
            style={{ background: DARK }}
          >
            Hỏi nhanh qua Zalo →
          </a>
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
