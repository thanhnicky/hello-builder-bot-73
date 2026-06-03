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
        <Combos />
        <FormSection />
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
function Combos() {
  const combos = [
    {
      name: "Gói 3 lớp — bền ngoài trời",
      tag: "CAO CẤP",
      desc: "Primer + Finish + Phủ bóng UV",
      bullets: [
        "Lớp 1: Primer chống gỉ nền",
        "Lớp 2: Finish màu hoàn thiện",
        "Lớp 3: Phủ bóng kháng UV, chịu mưa nắng dài lâu",
      ],
    },
    {
      name: "Gói tiêu chuẩn — đủ dùng, đủ bền",
      tag: "KHUYÊN DÙNG",
      desc: "Primer + Finish",
      bullets: [
        "Hệ 2 lớp chuẩn, bám chắc",
        "Chống gỉ + màu hoàn thiện đẹp",
        "Phù hợp hầu hết hạng mục cổng, lan can, hàng rào",
      ],
      featured: true,
    },
    {
      name: "Gói 2in1 — một sản phẩm, đủ việc",
      tag: "THI CÔNG NHANH",
      desc: "Lotus Metal Coat 2in1 / DTM",
      bullets: [
        "Không cần lót riêng — tiết kiệm bước",
        "Bám tốt trên mạ kẽm, nhôm, sắt hộp",
        "Lý tưởng khi cần thi công nhanh, gọn",
      ],
    },
  ];
  return (
    <section className="bg-white py-[72px]">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>COMBO DỄ CHỌN</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          3 gói sơn — chọn theo cách bạn muốn thi công.
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {combos.map((c) => (
            <div
              key={c.name}
              className="relative flex flex-col rounded-xl border bg-white p-8"
              style={{ borderColor: "#E8E4DC" }}
            >
              {c.featured && (
                <div
                  className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
                  style={{ background: ORANGE }}
                >
                  Khuyên dùng
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                {c.tag}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-1 text-sm font-medium text-neutral-600">{c.desc}</p>
              <ul className="mt-5 space-y-2.5">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-[15px] leading-snug text-neutral-800">
                    <span className="select-none text-neutral-400">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className="mt-6 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E8541A]/90"
                style={{ background: ORANGE }}
              >
                Chọn gói này →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FORM SECTION ---------------- */
function FormSection() {
  return (
    <section id="form" className="py-[72px]" style={{ background: OFFWHITE }}>
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className={LABEL_CLS} style={{ color: ORANGE }}>ĐẶT HÀNG & TƯ VẤN</p>
          <h2
            className="mt-4 font-display font-bold text-balance text-[#1C2B2B]"
            style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Nói cho Lotus biết hạng mục của bạn — tư vấn đúng ngay.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-neutral-600">
            Không cần phải tự chọn sản phẩm nếu chưa chắc. Điền form hoặc gửi ảnh qua Zalo — Lotus xem và tư vấn đúng hệ sơn, đúng lượng, đúng cách thi công.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-[#E8E4DC] bg-white px-6 py-5 transition hover:bg-neutral-50 ring-soft"
            >
              <div>
                <div className="font-semibold text-[#1C2B2B]">Nhắn Zalo gửi ảnh hạng mục</div>
                <div className="text-sm text-neutral-600">Tư vấn trong vài phút — miễn phí.</div>
              </div>
              <span className="text-xl text-[#1C2B2B]">→</span>
            </a>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="flex items-center justify-between rounded-xl border border-[#E8E4DC] bg-white px-6 py-5 transition hover:bg-neutral-50 ring-soft"
            >
              <div>
                <div className="font-semibold text-[#1C2B2B]">Gọi {HOTLINE}</div>
                <div className="text-sm text-neutral-600">Giờ làm việc 8:00–18:00, T2–T7.</div>
              </div>
              <span className="text-xl text-[#1C2B2B]">→</span>
            </a>
          </div>
        </div>

        <div className="text-foreground">
          <ContactForm />
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
        "Bề mặt mịn, màu đều, không có mùi mạnh khi thi công. Anh em thợ làm rất nhanh.",
      author: "Anh Hùng — Chủ nhà",
    },
    {
      img: project1,
      item: "Hàng rào sắt + lan can",
      system: "2in1 / DTM",
      area: "Bình Dương",
      quote:
        "Tiết kiệm được bước sơn lót, thi công nhanh hơn. Sau mưa vẫn ổn, không thấy gỉ trở lại.",
      author: "Anh Tâm — Nhà thầu",
    },
    {
      img: appSteel,
      item: "Khung thép xưởng",
      system: "Primer + Finish",
      area: "Long An",
      quote:
        "Dùng cho khung thép xưởng — chống gỉ tốt, sơn lên đều và bám chắc trên bề mặt thép cũ.",
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
      q: "Sơn lên bề mặt mạ kẽm hoặc nhôm được không?",
      a: "Hoàn toàn được. Dòng Lotus 2in1 / DTM được thiết kế chuyên biệt với độ bám dính siêu hạng trên các bề mặt khó bám như sắt hộp mạ kẽm, nhôm, inox mà không cần lót riêng.",
    },
    {
      q: "Tôi đang dùng sơn dầu — chuyển sang Lotus có cần xử lý gì trước không?",
      a: "Bạn chỉ cần cạo sạch lớp sơn cũ bị bong tróc, chà nhám nhẹ để tạo độ nhám bề mặt, lau sạch bụi bẩn và dầu mỡ là có thể sơn trực tiếp hệ sơn gốc nước Lotus.",
    },
    {
      q: "Lotus 2in1 có thực sự không cần lót không, hay vẫn cần một bước nào đó?",
      a: "Thực sự không cần sơn lót chống gỉ riêng. Bạn chỉ cần làm sạch bề mặt kim loại rồi sơn trực tiếp 2 lớp Lotus 2in1/DTM là hoàn thành công việc.",
    },
    {
      q: "Sơn gốc nước khô bao lâu? Có nhanh hơn sơn dầu không?",
      a: "Nhanh hơn rất nhiều. Sơn Lotus khô bề mặt chỉ sau 30-60 phút và có thể sơn lớp tiếp theo sau 2 giờ, giúp bạn hoàn thành toàn bộ công trình ngay trong ngày thay vì phải chờ qua đêm như sơn dầu.",
    },
    {
      q: "Rửa cọ và rulo bằng nước được không?",
      a: "Được và cực kỳ dễ dàng. Vì là sơn gốc nước hoàn toàn, bạn chỉ cần rửa dụng cụ bằng nước sạch ngay sau khi sơn xong, không cần mua xăng thơm hay dung môi tẩy rửa độc hại.",
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
