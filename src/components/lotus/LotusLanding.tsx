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
        <ColorIntro />
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
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-[#1C2B2B]/90 transition"
            style={{ background: DARK }}
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
      <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-28">
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
            Sơn kim loại gốc nước Lotus —{" "}
            <span style={{ color: ORANGE }}>chống gỉ, bám tốt</span>, đẹp bền cho nhiều bề mặt kim loại.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-neutral-600 sm:text-[18px]">
            Hệ nước nhẹ mùi · Tư vấn miễn phí · Giao hàng toàn quốc
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
    "Sợ sơn có mùi mạnh khi thi công trong nhà",
    "Không biết có cần sơn lót hay không",
    "Phân vân giữa hệ Primer + Finish và dòng 2in1",
    "Lo ngại bong tróc, gỉ sét quay lại sau vài tháng",
    "Muốn được tư vấn nhanh theo đúng hạng mục thực tế",
    "Không rõ sơn nào dùng được cho nhôm và mạ kẽm",
  ];
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>VẤN ĐỀ THƯỜNG GẶP</p>
        <h2
          className="mt-4 max-w-4xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Sơn kim loại không chỉ cần đẹp — cần đúng hệ và phù hợp môi trường sử dụng.
        </h2>
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
      tag: "Lớp lót",
      name: "Lotus Metal Coat Primer",
      desc: "Lớp lót chống gỉ và tăng độ bám dính cho hệ sơn hoàn thiện.",
    },
    {
      tag: "Lớp phủ",
      name: "Lotus Metal Coat Finish",
      desc: "Lớp phủ màu hoàn thiện cho bề mặt kim loại sau lớp lót.",
    },
    {
      tag: "Đa năng",
      name: "Lotus Metal Coat 2in1 / DTM",
      desc: "Sơn trực tiếp lên kim loại, không cần lớp lót riêng — gọn nhanh.",
    },
  ];
  return (
    <section className="py-24 sm:py-28" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>GIẢI PHÁP LOTUS</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Đầy đủ giải pháp sơn kim loại gốc nước theo từng nhu cầu.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Một hệ sản phẩm — ba lựa chọn rõ ràng. Bạn có thể chọn hệ chuẩn nhiều lớp hoặc dòng 2in1 thi công gọn nhẹ tùy theo hạng mục.
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
      tag: "Sơn lót chống gỉ",
      desc: "Sơn lót kim loại gốc nước giúp chống gỉ và tăng độ bám dính cho hệ sơn hoàn thiện.",
      uses: "Dùng cho sắt, thép, kim loại mới chưa sơn — luôn là bước đầu của hệ chuẩn.",
    },
    {
      name: "Lotus Metal Coat Finish",
      tag: "Sơn phủ màu",
      desc: "Sơn phủ màu hoàn thiện cho bề mặt kim loại sau lớp lót, giúp bề mặt đẹp và đồng đều.",
      uses: "Đi cùng Primer để tạo hệ chuẩn 2 lớp — phù hợp cổng, lan can, kết cấu cần độ bền cao.",
    },
    {
      name: "Lotus Metal Coat 2in1 / DTM",
      tag: "Đa năng",
      desc: "Sơn kim loại đa năng gốc nước, thi công trực tiếp lên kim loại mà không cần lớp lót riêng.",
      uses: "Phù hợp hạng mục cần thi công nhanh, gọn — vẫn đảm bảo chống gỉ và bám dính tốt.",
      featured: true,
    },
  ];
  return (
    <section id="san-pham" className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>SẢN PHẨM</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Chọn đúng sản phẩm cho hạng mục của bạn.
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-neutral-600">
          Mỗi sản phẩm có công dụng và quy trình thi công riêng. Bạn có thể đặt từng sản phẩm hoặc chọn theo combo.
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

/* ---------------- COLOR INTRO ---------------- */
function ColorIntro() {
  return (
    <section className="py-20 sm:py-24" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>BẢNG MÀU</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Bảng màu Lotus Metal Coat — chọn đúng tông cho hạng mục của bạn.
        </h2>
      </div>
    </section>
  );
}

/* ---------------- DECISION ---------------- */
function Decision() {
  const rows = [
    {
      title: "Hệ chuẩn Primer + Finish",
      desc: "Hệ sơn chuẩn nhiều lớp, tăng độ bám và chống gỉ tốt hơn cho hạng mục yêu cầu độ bền cao.",
      tag: "Bền lâu",
    },
    {
      title: "Hệ 2in1 / DTM",
      desc: "Thi công gọn hơn, tiết kiệm bước, sơn trực tiếp lên kim loại mà vẫn chống gỉ tốt.",
      tag: "Thi công nhanh",
    },
    {
      title: "Chưa chắc chọn loại nào?",
      desc: "Nhắn Zalo gửi ảnh hạng mục — Lotus tư vấn đúng hệ sơn phù hợp trong vài phút.",
      tag: "Tư vấn",
      zalo: true,
    },
  ];
  return (
    <section id="chon-he-son" className="py-24 sm:py-28" style={{ background: DARK, color: "#fff" }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>CHỌN HỆ SƠN</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Nên chọn hệ sơn nào cho hạng mục của bạn?
        </h2>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/70">
          Hai con đường — một mục tiêu: bảo vệ kim loại bền đẹp. Chọn đúng ngay từ đầu để tiết kiệm chi phí và công sức.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {rows.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: ORANGE }}>
                {r.tag}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold">{r.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/75">{r.desc}</p>
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
    <section id="hang-muc" className="bg-white py-24 sm:py-28">
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
    "Làm sạch bề mặt kim loại — loại bỏ gỉ, dầu mỡ, bụi bẩn.",
    "Sơn lót Lotus Metal Coat Primer để chống gỉ và tăng bám dính.",
    "Sơn phủ màu Lotus Metal Coat Finish để hoàn thiện bề mặt.",
    "Kiểm tra — hoàn thiện bề mặt đẹp, đều màu, bền lâu.",
  ];
  const B = [
    "Làm sạch bề mặt kim loại — loại bỏ gỉ, dầu mỡ, bụi bẩn.",
    "Thi công Lotus Metal Coat 2in1 / DTM trực tiếp lên kim loại.",
    "Sơn lại lớp 2 sau thời gian khô khuyến nghị.",
    "Hoàn thiện nhanh gọn, tiết kiệm bước, vẫn chống gỉ tốt.",
  ];
  return (
    <section className="py-24 sm:py-28" style={{ background: OFFWHITE }}>
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>QUY TRÌNH THI CÔNG</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Hai cách thi công — chọn theo hạng mục.
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ProcessCard title="Hệ chuẩn — Primer + Finish" tag="Bền tối ưu" steps={A} />
          <ProcessCard title="Hệ gọn — 2in1 / DTM" tag="Thi công nhanh" steps={B} accent />
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
      name: "Gói hoàn thiện cao cấp",
      tag: "Cao cấp",
      desc: "Primer + Finish + Phủ bóng bảo vệ ngoài trời",
      bullets: [
        "Lớp 1: Lotus Metal Coat Primer — chống gỉ",
        "Lớp 2: Lotus Metal Coat Finish — màu hoàn thiện",
        "Lớp 3: Phủ bóng bảo vệ — chống tia UV, bền ngoài trời",
      ],
    },
    {
      name: "Gói hoàn thiện tiêu chuẩn",
      tag: "Khuyên dùng",
      desc: "Lotus Metal Coat Primer + Finish",
      bullets: [
        "Hệ chuẩn 2 lớp bền lâu",
        "Chống gỉ + màu hoàn thiện",
        "Lựa chọn an toàn cho cổng, lan can",
      ],
      featured: true,
    },
    {
      name: "Gói 2in1 tiện lợi",
      tag: "Thi công nhanh",
      desc: "Lotus Metal Coat 2in1 / DTM",
      bullets: [
        "Không cần sơn lót riêng",
        "Tiết kiệm thời gian thi công",
        "Vẫn chống gỉ và bám dính tốt",
      ],
    },
  ];
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="container-x">
        <p className={LABEL_CLS} style={{ color: ORANGE }}>COMBO DỄ CHỌN</p>
        <h2
          className="mt-4 max-w-3xl font-display font-bold text-balance"
          style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          3 gói sơn — chọn đúng theo cách bạn muốn thi công.
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
    <section id="form" className="py-24 sm:py-28" style={{ background: DARK, color: "#fff" }}>
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className={LABEL_CLS} style={{ color: ORANGE }}>ĐẶT HÀNG & TƯ VẤN</p>
          <h2
            className="mt-4 font-display font-bold text-balance"
            style={{ fontSize: "clamp(28px, 4.8vw, 52px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Gửi thông tin — Lotus sẽ tư vấn đúng hệ sơn cho hạng mục của bạn.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/75">
            Form ngắn gọn dưới đây giúp Lotus hiểu nhanh nhu cầu của bạn. Nếu cần tư vấn sâu hơn, hãy nhắn Zalo kèm ảnh hạng mục.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] px-6 py-5 transition hover:bg-white/[0.08]"
            >
              <div>
                <div className="font-semibold text-white">Nhắn Zalo gửi ảnh hạng mục</div>
                <div className="text-sm text-white/65">Tư vấn đúng hệ sơn Lotus trong vài phút.</div>
              </div>
              <span className="text-xl text-white">→</span>
            </a>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.04] px-6 py-5 transition hover:bg-white/[0.08]"
            >
              <div>
                <div className="font-semibold">Gọi hotline {HOTLINE}</div>
                <div className="text-sm text-white/65">Tư vấn nhanh trong giờ làm việc.</div>
              </div>
              <span className="text-xl">→</span>
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
    <section id="du-an" className="bg-white py-24 sm:py-28">
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
      q: "Sơn kim loại Lotus là hệ nước hay dung môi?",
      a: "Lotus Metal Coat là hệ sơn gốc nước — nhẹ mùi, an toàn hơn khi thi công, đặc biệt phù hợp cho không gian trong nhà.",
    },
    {
      q: "Lotus Metal Coat Primer dùng cho bề mặt nào?",
      a: "Dùng cho sắt, thép và các bề mặt kim loại cần chống gỉ. Đây là lớp lót giúp tăng độ bám cho lớp sơn phủ phía sau.",
    },
    {
      q: "Lotus Metal Coat 2in1 có cần sơn lót không?",
      a: "Dòng 2in1 / DTM được thiết kế để sơn trực tiếp lên kim loại mà không cần lớp lót riêng, giúp thi công gọn hơn.",
    },
    {
      q: "Nên chọn hệ Primer + Finish hay 2in1 / DTM?",
      a: "Hệ Primer + Finish cho độ bền tối ưu và bám dính cao. Hệ 2in1 thi công nhanh, tiết kiệm bước. Nếu chưa chắc, hãy gửi ảnh hạng mục qua Zalo để được tư vấn.",
    },
    {
      q: "Sơn Lotus có dùng ngoài trời được không?",
      a: "Có. Sản phẩm Lotus Metal Coat phù hợp cho cả nội thất và ngoại thất, chịu được nắng mưa và kháng UV.",
    },
    {
      q: "Có dùng được trên bề mặt đã sơn cũ không?",
      a: "Có thể, nếu bề mặt cũ còn bám tốt và đã được vệ sinh sạch. Trường hợp bong tróc nặng cần xử lý bề mặt trước khi thi công.",
    },
    {
      q: "Có thể gửi ảnh công trình để được tư vấn không?",
      a: "Hoàn toàn được. Bạn chỉ cần nhắn Zalo kèm ảnh hạng mục, Lotus sẽ tư vấn đúng hệ sơn phù hợp.",
    },
    {
      q: "Có hỗ trợ tư vấn qua Zalo không?",
      a: `Có. Bạn liên hệ Zalo ${HOTLINE} để được tư vấn nhanh trong giờ làm việc.`,
    },
  ];
  return (
    <section id="faq" className="py-24 sm:py-28" style={{ background: OFFWHITE }}>
      <div className="container-x grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-1">
          <p className={LABEL_CLS} style={{ color: ORANGE }}>FAQ</p>
          <h2
            className="mt-4 font-display font-bold text-balance"
            style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Câu hỏi thường gặp về sơn kim loại Lotus.
          </h2>
          <p className="mt-4 text-neutral-600">
            Không thấy câu trả lời bạn cần? Nhắn Zalo để được tư vấn trực tiếp.
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
