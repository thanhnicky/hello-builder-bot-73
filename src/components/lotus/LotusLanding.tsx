import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  Droplets,
  Wind,
  Sun,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Image as ImageIcon,
  PaintBucket,
  Hammer,
  Star,
  Clock,
  PackageCheck,
  Wrench,
  Home,
  Building2,
} from "lucide-react";
import { useState } from "react";
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

export function LotusLanding() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AudienceSelector />
        <Problem />
        <Solution />
        <Products />
        <Enterprise />
        <ColorChart />
        <Decision />
        <Applications />
        <Benefits />
        <Process />
        <Combos />
        <QuickSpec />
        <FormSection />
        <Projects />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logoImg}
            alt="Lotus Paint logo"
            className="h-9 w-auto sm:h-10"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Metal Coat
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#san-pham" className="hover:text-foreground">Sản phẩm</a>
          <a href="#bang-mau" className="hover:text-foreground">Bảng màu</a>
          <a href="#chon-he-son" className="hover:text-foreground">Chọn hệ sơn</a>
          <a href="#hang-muc" className="hover:text-foreground">Hạng mục</a>
          <a href="#enterprise" className="hover:text-foreground">Doanh nghiệp</a>
          <a href="#du-an" className="hover:text-foreground">Dự án</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${HOTLINE_TEL}`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-secondary"
          >
            <Phone className="size-4" /> {HOTLINE}
          </a>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zalo px-3 py-2 text-sm font-semibold text-zalo-foreground hover:opacity-95"
          >
            <MessageCircle className="size-4" /> Nhắn Zalo
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 20%, oklch(0.93 0.04 35 / 0.4), transparent 60%), linear-gradient(180deg, var(--surface), var(--background))",
        }}
      />
      <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Sơn kim loại gốc nước — Hệ Lotus Metal Coat
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            Sơn kim loại gốc nước Lotus — <span className="text-primary">chống gỉ, bám tốt</span>, đẹp bền cho nhiều bề mặt kim loại.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Giải pháp sơn kim loại hệ nước gồm <strong className="text-foreground">sơn lót chống gỉ</strong>,{" "}
            <strong className="text-foreground">sơn phủ màu hoàn thiện</strong> và dòng{" "}
            <strong className="text-foreground">2in1 không cần lót</strong> — phù hợp cho nhiều hạng mục nội ngoại thất.
          </p>

          <ul className="mt-6 space-y-2.5 text-sm sm:text-base">
            {[
              "Gốc nước, nhẹ mùi, dễ thi công",
              "Chống gỉ, bám tốt trên nhiều bề mặt kim loại",
              "Tư vấn nhanh qua Zalo để chọn đúng hệ sơn",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#san-pham"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-95 ring-glow"
            >
              Xem sản phẩm & đặt hàng
              <ArrowRight className="size-5" />
            </a>
            <a
              href="#enterprise"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#333333]"
              style={{ transitionDuration: "200ms" }}
            >
              Tôi là nhà máy / xưởng lớn
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Phone className="size-3.5" /> Hotline {HOTLINE}</span>
            <span>•</span>
            <span>Tư vấn kỹ thuật miễn phí</span>
            <span>•</span>
            <span>Giao hàng toàn quốc</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-steel/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Cổng kim loại sơn bằng Lotus Metal Coat — bề mặt mịn, bóng đẹp"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border ring-soft"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 ring-soft sm:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Droplets className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Hệ nước thế hệ mới</div>
                  <div className="text-xs text-muted-foreground">Nhẹ mùi · An toàn · Bền màu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const items = [
    { icon: Layers, label: "3 hệ sơn · Primer / Finish / 2in1" },
    { icon: Droplets, label: "Gốc nước · Nhẹ mùi · An toàn" },
    { icon: MessageCircle, label: "Tư vấn kỹ thuật miễn phí" },
    { icon: PackageCheck, label: "Giao hàng toàn quốc" },
  ];
  return (
    <section className="bg-[#1C2B2B]">
      <div className="container-x grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-2.5 px-2 ${
              i < items.length - 1 ? "lg:border-r lg:border-white/15" : ""
            }`}
          >
            <Icon className="size-4 shrink-0 text-white/60" />
            <span className="text-sm font-medium text-white">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- AUDIENCE SELECTOR ---------------- */
function AudienceSelector() {
  return (
    <section style={{ background: "#F7F5F2", paddingTop: 80, paddingBottom: 80 }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
            BẠN LÀ AI?
          </p>
          <div className="h-px w-8 bg-primary" />
        </div>
        <h2 className="mb-10 text-center font-display text-[clamp(26px,6vw,36px)] font-bold leading-tight text-[#1A1A1A]">
          Chọn đúng giải pháp cho nhu cầu của bạn.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 — Cá nhân / Thợ sơn */}
          <div className="group rounded-2xl bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FDF4] text-[#22C55E]">
              <Home className="size-6" />
            </div>
            <span className="mb-3 inline-block rounded-full bg-[#F0FDF4] px-3 py-1 text-xs font-bold text-[#16A34A]">
              Cá nhân / Thợ sơn
            </span>
            <h3 className="mb-2 text-xl font-bold text-[#1A1A1A]">
              Sơn cổng, lan can, hàng rào tại nhà
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#6B7280]">
              Chọn đúng hệ, thi công gọn — tư vấn nhanh qua Zalo
            </p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#22C55E] py-3.5 text-sm font-bold text-white transition hover:bg-[#16A34A]"
            >
              Nhắn Zalo để được tư vấn
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Card 2 — Doanh nghiệp / Xưởng */}
          <div className="group rounded-2xl bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F4F6] text-[#4B5563]">
              <Building2 className="size-6" />
            </div>
            <span className="mb-3 inline-block rounded-full bg-[#F3F4F6] px-3 py-1 text-xs font-bold text-[#4B5563]">
              Doanh nghiệp / Xưởng
            </span>
            <h3 className="mb-2 text-xl font-bold text-[#1A1A1A]">
              Chuyển đổi hệ sơn cho xưởng, nhà máy
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-[#6B7280]">
              Sơn gốc nước an toàn hơn — giảm VOC, đáp ứng kiểm định
            </p>
            <a
              href="#enterprise"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-transparent py-3.5 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#1A1A1A] hover:text-white"
            >
              Nhận báo giá &amp; tài liệu kỹ thuật
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- SECTION HEADER ---------------- */
function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{desc}</p>}
    </div>
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
    <section className="section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Vấn đề thường gặp"
          title="Sơn kim loại không chỉ cần đẹp — cần đúng hệ và phù hợp môi trường sử dụng."
          desc="Mỗi hạng mục có yêu cầu riêng về độ bám, chống gỉ và độ bền thời tiết. Chọn sai hệ sơn có thể khiến bề mặt nhanh hỏng dù sơn đẹp."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:ring-soft"
            >
              <div className="grid size-8 place-items-center rounded-md bg-primary/10 text-primary">
                <Wrench className="size-4" />
              </div>
              <p className="mt-3 text-[15px] font-medium leading-snug text-foreground">{p}</p>
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
    <section className="bg-surface section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Giải pháp Lotus"
          title="Đầy đủ giải pháp sơn kim loại gốc nước theo từng nhu cầu."
          desc="Một hệ sản phẩm — ba lựa chọn rõ ràng. Bạn có thể chọn hệ chuẩn nhiều lớp hoặc dòng 2in1 thi công gọn nhẹ tùy theo hạng mục."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {lines.map((l, i) => (
            <div key={l.name} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 ring-soft">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{l.tag}</div>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-display text-2xl font-bold tabular-nums text-steel">0{i + 1}</span>
                <h3 className="font-display text-xl font-semibold">{l.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
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
      tag: "Đa năng — Khuyên dùng",
      desc: "Sơn kim loại đa năng gốc nước, thi công trực tiếp lên kim loại mà không cần lớp lót riêng.",
      uses: "Phù hợp hạng mục cần thi công nhanh, gọn — vẫn đảm bảo chống gỉ và bám dính tốt.",
      featured: true,
    },
  ];
  return (
    <section id="san-pham" className="section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Sản phẩm"
          title="Chọn đúng sản phẩm cho hạng mục của bạn."
          desc="Mỗi sản phẩm có công dụng và quy trình thi công riêng. Bạn có thể đặt từng sản phẩm hoặc chọn theo combo."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                p.featured
                  ? "border-primary bg-card ring-glow"
                  : "border-border bg-card ring-soft"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  <Star className="size-3" /> Khuyên dùng
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.tag}</div>
              <h3 className="mt-2 font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 rounded-lg bg-secondary p-3 text-xs text-secondary-foreground">
                <span className="font-semibold">Phù hợp: </span>
                {p.uses}
              </div>
              <a
                href="#form"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                Chọn sản phẩm này
                <ArrowRight className="size-4" />
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
      desc: "Nếu cần hệ sơn chuẩn nhiều lớp, tăng độ bám và chống gỉ tốt hơn cho hạng mục yêu cầu độ bền cao.",
      tag: "Bền lâu",
    },
    {
      title: "Hệ 2in1 / DTM",
      desc: "Nếu cần thi công gọn hơn, tiết kiệm bước, sơn trực tiếp lên kim loại mà vẫn chống gỉ tốt.",
      tag: "Thi công nhanh",
    },
    {
      title: "Chưa chắc nên chọn loại nào?",
      desc: "Nhắn Zalo gửi ảnh thực tế hạng mục — Lotus sẽ tư vấn đúng hệ sơn phù hợp trong vài phút.",
      tag: "Tư vấn miễn phí",
      zalo: true,
    },
  ];
  return (
    <section id="chon-he-son" className="bg-steel text-steel-foreground section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Chọn hệ sơn
          </div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
            Nên chọn hệ sơn nào cho hạng mục của bạn?
          </h2>
          <p className="mt-4 text-base text-steel-foreground/70 sm:text-lg">
            Hai con đường — một mục tiêu: bảo vệ kim loại bền đẹp. Chọn đúng ngay từ đầu để tiết kiệm chi phí và công sức.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {rows.map((r) => (
            <div
              key={r.title}
              className={`rounded-2xl p-6 ${
                r.zalo
                  ? "bg-zalo text-zalo-foreground"
                  : "bg-steel-foreground/[0.04] ring-1 ring-steel-foreground/10"
              }`}
            >
              <div className={`text-xs font-semibold uppercase tracking-widest ${r.zalo ? "text-zalo-foreground/80" : "text-primary"}`}>
                {r.tag}
              </div>
              <h3 className="mt-2 font-display text-xl font-bold">{r.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${r.zalo ? "text-zalo-foreground/90" : "text-steel-foreground/75"}`}>
                {r.desc}
              </p>
              {r.zalo && (
                <a
                  href={ZALO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zalo-foreground px-4 py-2.5 text-sm font-semibold text-zalo"
                >
                  <ImageIcon className="size-4" /> Gửi ảnh hạng mục qua Zalo
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
    <section id="hang-muc" className="section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Hạng mục ứng dụng"
          title="Dùng được cho nhiều hạng mục — trong nhà và ngoài trời."
          desc="Từ cổng, hàng rào, lan can đến khung thép công nghiệp — Lotus Metal Coat đáp ứng đa dạng bề mặt kim loại."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {apps.map((a) => (
            <figure
              key={a.label}
              className="group relative overflow-hidden rounded-xl ring-1 ring-border"
            >
              <img
                src={a.img}
                alt={a.label}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 text-white">
                <span className="text-sm font-semibold">{a.label}</span>
                <ArrowRight className="size-4 opacity-70" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const items = [
    { icon: Droplets, t: "Gốc nước, nhẹ mùi", d: "An toàn cho người thi công và không gian sống." },
    { icon: ShieldCheck, t: "Chống gỉ & ăn mòn", d: "Bảo vệ bề mặt kim loại trước môi trường khắc nghiệt." },
    { icon: Layers, t: "Bám dính tốt", d: "Hoạt động hiệu quả trên nhiều loại nền kim loại khác nhau." },
    { icon: Clock, t: "Nhanh khô, dễ thi công", d: "Tiết kiệm thời gian, sơn lại lớp 2 trong ngày." },
    { icon: Sun, t: "Bền thời tiết, kháng UV", d: "Chịu nắng mưa, giữ màu tốt cho hạng mục ngoài trời." },
    { icon: PackageCheck, t: "Phù hợp thực tế", d: "Đa quy cách, dễ chọn theo khối lượng hạng mục cần sơn." },
  ];
  return (
    <section className="bg-surface section-y">
      <div className="container-x">
        <SectionHead eyebrow="Vì sao chọn Lotus" title="6 lý do thuyết phục cho hạng mục kim loại của bạn." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 ring-soft">
              <Icon className="size-7 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </div>
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
    <section className="section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Quy trình thi công"
          title="Hai cách thi công — chọn theo hạng mục."
          desc="Hệ chuẩn cho độ bền tối ưu, hệ 2in1 cho thi công nhanh gọn. Cả hai đều dễ thực hiện tại công trường."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
    <div className={`overflow-hidden rounded-2xl border ${accent ? "border-primary/40 bg-card" : "border-border bg-card"} ring-soft`}>
      <div className={`flex items-center justify-between border-b border-border px-6 py-4 ${accent ? "bg-primary/5" : "bg-secondary"}`}>
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${accent ? "bg-primary text-primary-foreground" : "bg-steel text-steel-foreground"}`}>
          {tag}
        </span>
      </div>
      <ol className="divide-y divide-border">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4 p-5">
            <span className={`grid size-8 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${accent ? "bg-primary text-primary-foreground" : "bg-steel text-steel-foreground"}`}>
              {i + 1}
            </span>
            <p className="text-[15px] leading-relaxed text-foreground">{s}</p>
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
      bullets: ["Hệ chuẩn 2 lớp bền lâu", "Chống gỉ + màu hoàn thiện", "Lựa chọn an toàn cho cổng, lan can"],
      featured: true,
    },
    {
      name: "Gói 2in1 tiện lợi",
      tag: "Thi công nhanh",
      desc: "Lotus Metal Coat 2in1 / DTM",
      bullets: ["Không cần sơn lót riêng", "Tiết kiệm thời gian thi công", "Vẫn chống gỉ và bám dính tốt"],
    },
  ];
  return (
    <section className="bg-surface section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Combo dễ chọn"
          title="3 gói sơn — chọn đúng theo cách bạn muốn thi công."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {combos.map((c) => (
            <div
              key={c.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                c.featured ? "border-primary bg-card ring-glow" : "border-border bg-card ring-soft"
              }`}
            >
              {c.featured && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  <Star className="size-3" /> Khuyên dùng
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">{c.tag}</div>
              <h3 className="mt-2 font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{c.desc}</p>
              <ul className="mt-4 space-y-2">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#form"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                Chọn gói này
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-dashed border-border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Chưa chắc chọn gói nào?</strong> Gửi ảnh hạng mục qua Zalo để được tư vấn nhanh.
          </p>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zalo px-4 py-2.5 text-sm font-semibold text-zalo-foreground"
          >
            <MessageCircle className="size-4" /> Nhắn Zalo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUICK SPEC ---------------- */
function QuickSpec() {
  const specs = [
    { icon: Layers, t: "Bề mặt áp dụng", d: "Sắt, thép, nhôm, mạ kẽm — bề mặt mới hoặc đã sơn cũ." },
    { icon: Clock, t: "Khô nhanh", d: "Thi công liên tục — sơn lại lớp 2 sau thời gian khô khuyến nghị." },
    { icon: Hammer, t: "Cách thi công", d: "Có thể dùng chổi, rulo hoặc súng phun tùy hạng mục." },
    { icon: PackageCheck, t: "Quy cách", d: "Đa quy cách đóng gói — phù hợp công trình nhỏ và lớn." },
    { icon: Wind, t: "Mùi nhẹ", d: "Hệ nước — thân thiện cho thi công trong nhà." },
    { icon: ShieldCheck, t: "Bảo vệ lâu dài", d: "Chống gỉ, kháng UV, chịu nước cho hạng mục ngoài trời." },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Thông tin nhanh"
          title="Tóm tắt kỹ thuật — dễ hiểu, dễ áp dụng."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
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
    <section id="form" className="bg-steel text-steel-foreground section-y">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Đặt hàng & Tư vấn
          </div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
            Gửi thông tin — Lotus sẽ tư vấn đúng hệ sơn cho hạng mục của bạn.
          </h2>
          <p className="mt-4 text-base text-steel-foreground/75">
            Form ngắn gọn dưới đây giúp Lotus hiểu nhanh nhu cầu của bạn. Nếu cần tư vấn sâu hơn, hãy nhắn Zalo kèm ảnh hạng mục để chúng tôi xem trực tiếp.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-zalo p-5 text-zalo-foreground transition hover:opacity-95"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-zalo-foreground/15">
                <MessageCircle className="size-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Nhắn Zalo gửi ảnh hạng mục</div>
                <div className="text-sm text-zalo-foreground/85">Tư vấn đúng hệ sơn Lotus trong vài phút.</div>
              </div>
              <ArrowRight className="size-5" />
            </a>
            <a
              href={`tel:${HOTLINE_TEL}`}
              className="flex items-center gap-4 rounded-2xl bg-steel-foreground/[0.06] p-5 ring-1 ring-steel-foreground/10 transition hover:bg-steel-foreground/[0.1]"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Phone className="size-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Gọi hotline {HOTLINE}</div>
                <div className="text-sm text-steel-foreground/70">Tư vấn nhanh trong giờ làm việc.</div>
              </div>
              <ArrowRight className="size-5" />
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
    <section id="du-an" className="section-y">
      <div className="container-x">
        <SectionHead
          eyebrow="Dự án thực tế"
          title="Một số hạng mục đã thi công với hệ sơn Lotus Metal Coat."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.item} className="overflow-hidden rounded-2xl border border-border bg-card ring-soft">
              <img src={it.img} alt={it.item} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5">
                  <Chip>Hạng mục: {it.item}</Chip>
                  <Chip>Hệ sơn: {it.system}</Chip>
                  <Chip>Khu vực: {it.area}</Chip>
                </div>
                <p className="mt-4 text-[15px] italic text-foreground">"{it.quote}"</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">— {it.author}</p>
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
    <span className="rounded-md bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground">
      {children}
    </span>
  );
}


/* ---------------- ENTERPRISE ---------------- */
function Enterprise() {
  const steps = [
    {
      n: "01",
      title: "Gửi thông tin hạng mục",
      desc: "Mô tả bề mặt cần sơn, môi trường sử dụng và sản lượng dự kiến. Kỹ thuật viên phản hồi trong 2 giờ.",
    },
    {
      n: "02",
      title: "Nhận tư vấn + mẫu thử miễn phí",
      desc: "Lotus gửi mẫu sơn phù hợp để test thực tế tại xưởng. Kèm TDS, MSDS, hướng dẫn thi công chi tiết.",
    },
    {
      n: "03",
      title: "Chạy pilot → đánh giá → ký hợp đồng",
      desc: "Triển khai thử 1 hạng mục, đánh giá kết quả thực tế. Báo giá sỉ theo sản lượng cam kết hàng tháng.",
    },
  ];

  const benefits = [
    { icon: "📄", title: "Hồ sơ kỹ thuật đầy đủ", desc: "TDS · MSDS · COA theo từng lô hàng. Đáp ứng audit nhà máy FDI." },
    { icon: "📦", title: "Đóng gói công nghiệp", desc: "Thùng 200L, IBC 1000L. Giao hàng theo lịch sản xuất của xưởng." },
    { icon: "🔬", title: "Đạt chuẩn xuất khẩu", desc: "EN71-3 · ROHS · ASTM F963. Phù hợp hàng xuất EU, Mỹ, Nhật." },
    { icon: "🤝", title: "Hỗ trợ kỹ thuật tại chỗ", desc: "Kỹ thuật viên đến xưởng hỗ trợ thử nghiệm và tập huấn thợ." },
  ];

  const stats = [
    { n: "200+", l: "Công trình đã triển khai" },
    { n: "12+", l: "Năm kinh nghiệm" },
    { n: "50+", l: "Nhà máy & xưởng lớn" },
  ];

  return (
    <section
      id="enterprise"
      className="border-t border-[#E8E4DC] bg-[#F5F4F1]"
      style={{ padding: "96px 0", scrollMarginTop: "80px" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-[#9CA3AF]" />
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#9CA3AF]">
              Dành cho doanh nghiệp
            </span>
          </div>
          <h2
            className="mb-4 font-extrabold text-[#1A1A1A]"
            style={{
              fontSize: "clamp(26px, 6vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Chuyển đổi hệ sơn toàn nhà máy —
            <br />
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontStyle: "italic" }}>
              Lotus đồng hành từ thử nghiệm đến triển khai.
            </span>
          </h2>
          <p className="max-w-lg text-[15px] text-[#6B7280]" style={{ lineHeight: 1.65 }}>
            Phù hợp cho nhà máy cơ khí kết cấu thép, xưởng gia công, doanh nghiệp có yêu cầu chuyển đổi từ sơn dung môi sang gốc nước.
          </p>
        </div>

        {/* Two columns */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT: process */}
          <div>
            <div className="mb-8 text-xs font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">
              Quy trình hợp tác
            </div>
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={s.n} className="flex items-start gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#1E6B31]">
                      <span className="text-[13px] font-extrabold text-[#1E6B31]">{s.n}</span>
                    </div>
                    {i < steps.length - 1 && <div className="mt-2 h-8 w-px bg-[#E2DDD4]" />}
                  </div>
                  <div>
                    <div className="mb-1 text-[16px] font-bold text-[#1A1A1A]">{s.title}</div>
                    <p className="text-[14px] text-[#6B7280]" style={{ lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: benefits + form */}
          <div>
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.12em] text-[#9CA3AF]">
              Tại sao chọn Lotus cho nhà máy
            </div>
            <div className="mb-10 space-y-4">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className={`flex items-start gap-4 ${i < benefits.length - 1 ? "border-b border-[#E8E4DC] pb-4" : ""}`}
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-[#E2DDD4] bg-white text-base">
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-[#1A1A1A]">{b.title}</div>
                    <p className="text-[13px] text-[#6B7280]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <EnterpriseForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col flex-wrap items-center justify-between gap-6 border-t border-[#E8E4DC] pt-8 text-center md:flex-row md:text-left">
          <div className="flex flex-wrap justify-center gap-10 md:justify-start">
            {stats.map((s) => (
              <div key={s.n}>
                <div className="text-[28px] font-extrabold text-[#1A1A1A]">{s.n}</div>
                <div className="text-[12px] uppercase tracking-wider text-[#9CA3AF]">{s.l}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="text-[14px] text-[#6B7280]">Cần trao đổi trực tiếp?</span>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0068FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0055CC]"
            >
              💬 Zalo: {HOTLINE}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterpriseForm() {
  const [submitted, setSubmitted] = useState(false);
  const inputCls =
    "w-full rounded-[10px] border border-[#E2DDD4] bg-white px-[14px] py-[11px] text-[14px] text-[#1A1A1A] placeholder:text-[#C4C0B8] focus:border-[#1E6B31] focus:outline-none focus:ring-[3px] focus:ring-[rgba(30,107,49,0.08)]";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#E2DDD4] bg-white p-7 text-center">
        <div className="mb-2 text-[18px] font-extrabold text-[#1A1A1A]">Đã nhận yêu cầu ✓</div>
        <p className="text-[14px] text-[#6B7280]">
          Cảm ơn bạn. Kỹ thuật viên Lotus sẽ liên hệ trong vòng 2 giờ làm việc.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-[#E2DDD4] bg-white p-7"
    >
      <div className="mb-1 text-[18px] font-extrabold text-[#1A1A1A]">Gửi yêu cầu tư vấn</div>
      <p className="mb-5 text-[13px] text-[#9CA3AF]">Phản hồi trong 2 giờ trong giờ hành chính</p>

      <div className="space-y-4">
        <input required maxLength={120} placeholder="Tên công ty / xưởng *" className={inputCls} />
        <input required maxLength={80} placeholder="Họ tên người liên hệ *" className={inputCls} />
        <input required maxLength={20} placeholder="Số điện thoại *" className={inputCls} />
        <select required defaultValue="" className={inputCls}>
          <option value="" disabled>Quy mô sản lượng hàng tháng *</option>
          <option>Dưới 500L</option>
          <option>500L – 2,000L</option>
          <option>2,000L – 10,000L</option>
          <option>Trên 10,000L</option>
        </select>
        <textarea
          rows={3}
          maxLength={800}
          placeholder="VD: Kết cấu thép nhà xưởng, thép hộp mạ kẽm, máy móc cơ khí ngoài trời..."
          className={inputCls}
        />
        <button
          type="submit"
          className="mt-2 w-full rounded-[12px] bg-[#1A1A1A] py-[14px] text-[15px] font-bold text-white transition-colors duration-200 hover:bg-[#333333]"
        >
          Gửi yêu cầu tư vấn →
        </button>
        <p className="mt-4 text-center text-[12px] text-[#9CA3AF]">
          🔒 Thông tin của bạn được bảo mật. Không spam.
        </p>
      </div>
    </form>
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
    <section id="faq" className="bg-surface section-y">
      <div className="container-x grid gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-1">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">FAQ</div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Câu hỏi thường gặp về sơn kim loại Lotus.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Không thấy câu trả lời bạn cần? Nhắn Zalo để được tư vấn trực tiếp.
          </p>
          <a
            href={ZALO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zalo px-4 py-2.5 text-sm font-semibold text-zalo-foreground"
          >
            <MessageCircle className="size-4" /> Hỏi nhanh qua Zalo
          </a>
        </div>
        <div className="lg:col-span-2">
          <Accordion type="single" collapsible className="space-y-3">
            {qa.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
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

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-steel p-8 text-steel-foreground sm:p-12 lg:p-16">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 80% at 90% 10%, oklch(0.65 0.18 35 / 0.35), transparent 60%)",
            }}
          />
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
              Bạn chưa chắc nên chọn sơn lót, sơn phủ hay 2in1?
            </h2>
            <p className="mt-4 text-base text-steel-foreground/80 sm:text-lg">
              Gửi ảnh hạng mục qua Zalo để Lotus tư vấn đúng hệ sơn phù hợp — nhanh, miễn phí và không cam kết mua.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-zalo px-6 py-4 text-base font-semibold text-zalo-foreground transition hover:opacity-95"
            >
              <MessageCircle className="size-5" />
              Nhắn Zalo ngay
            </a>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-95"
            >
              Điền form nhận tư vấn
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-x grid gap-10 py-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt={`${BRAND} logo`} className="h-12 w-auto" />
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {PRODUCT_LINE}
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Giải pháp sơn kim loại gốc nước cho cổng, hàng rào, lan can, khung thép và nhiều hạng mục kim loại khác — trong nhà và ngoài trời.
          </p>
          <div className="mt-5 space-y-1.5 text-sm">
            <div className="font-semibold text-foreground">{COMPANY_NAME}</div>
            <div className="text-muted-foreground">
              MST: <span className="text-foreground">{COMPANY_TAX_ID}</span>
            </div>
            <div className="text-muted-foreground">
              Đ/c: <span className="text-foreground">{COMPANY_ADDRESS}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Sản phẩm
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#san-pham" className="hover:text-primary">Metal Coat Primer</a></li>
            <li><a href="#san-pham" className="hover:text-primary">Metal Coat Finish</a></li>
            <li><a href="#san-pham" className="hover:text-primary">Metal Coat 2in1 / DTM</a></li>
            <li><a href="#chon-he-son" className="hover:text-primary">So sánh hệ sơn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Liên hệ
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <a href={`tel:${HOTLINE_TEL}`} className="font-semibold hover:text-primary">{HOTLINE}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-zalo" />
              <a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                Zalo: {HOTLINE}
              </a>
            </li>
            <li className="text-muted-foreground">Giờ làm việc: 8:00 – 18:00 (T2 – T7)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {BRAND} — Lotus Metal Coat. Mọi quyền được bảo lưu.</span>
          <span>Sơn kim loại gốc nước · Chống gỉ · Bền màu · Dễ thi công</span>
        </div>
      </div>
    </footer>
  );
}
