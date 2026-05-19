import { MessageCircle, Palette } from "lucide-react";
import { ZALO_URL } from "./constants";
import colorChartImg from "@/assets/lotus-color-chart.png";

type Swatch = { code: string; name: string; hex: string };

const COLORS: Swatch[] = [
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
  { code: "LDTM-228", name: "Lemon Twist", hex: "#f4ed9e" },
];

export function ColorChart() {
  return (
    <section id="bang-mau" className="bg-surface section-y">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Palette className="size-3.5" /> Bảng màu chính hãng
          </div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1]">
            Bảng màu Lotus Metal Coat — 28 mã màu tiêu chuẩn
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Mỗi mã màu đều có sẵn cho hệ <strong className="text-foreground">2in1 / DTM</strong> và{" "}
            <strong className="text-foreground">Finish</strong>. Màu hiển thị trên màn hình có thể
            chênh lệch nhẹ so với thực tế — vui lòng yêu cầu mẫu màu thật trước khi đặt số lượng lớn.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {COLORS.map((c) => (
            <div
              key={c.code}
              className="group overflow-hidden rounded-xl border border-border bg-card ring-soft transition hover:-translate-y-0.5 hover:ring-glow"
            >
              <div
                className="aspect-[5/3] w-full"
                style={{ backgroundColor: c.hex }}
                aria-label={`${c.code} ${c.name}`}
              />
              <div className="flex items-center justify-between gap-2 px-3 py-2.5">
                <div className="min-w-0">
                  <div className="truncate font-display text-sm font-bold text-foreground">
                    {c.code}
                  </div>
                  <div className="truncate text-xs text-muted-foreground">{c.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-6 rounded-2xl border border-border bg-card p-5 sm:p-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <img
              src={colorChartImg}
              alt="Bảng màu chính hãng Sơn Kim Loại Hệ Nước Lotus — đầy đủ mã LDTM"
              loading="lazy"
              className="w-full rounded-xl border border-border"
            />
          </div>
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-bold">
              Cần xem mã màu cụ thể?
            </h3>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Nhắn Zalo gửi mã màu (ví dụ <span className="font-semibold text-foreground">LDTM-201</span>)
              — Lotus sẽ gửi ảnh thực tế, báo giá và tư vấn lượng sơn cần dùng cho hạng mục của bạn.
            </p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-zalo px-5 py-3 text-sm font-semibold text-zalo-foreground transition hover:opacity-95"
            >
              <MessageCircle className="size-4" /> Nhắn Zalo xem mã màu thật
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
