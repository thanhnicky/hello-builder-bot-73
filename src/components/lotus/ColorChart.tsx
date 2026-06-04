import { MessageCircle } from "lucide-react";
import { ZALO_URL } from "./constants";

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
    <section id="bang-mau" className="bg-[#F7F5F2] py-[72px]">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="mb-3 block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E8541A]">
            BẢNG MÀU
          </div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1] text-[#1C2B2B]">
            Bảng màu Lotus Metal Coat — 28 mã màu tiêu chuẩn
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Mỗi mã màu đều có sẵn cho hệ <strong className="text-[#1C2B2B]">2in1 / DTM</strong> và{" "}
            <strong className="text-[#1C2B2B]">Finish</strong>. Màu hiển thị trên màn hình có thể
            chênh lệch nhẹ so với thực tế — vui lòng yêu cầu mẫu màu thật trước khi đặt số lượng lớn.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {COLORS.map((c) => (
              <div
                key={c.code}
                className="group overflow-hidden rounded-xl border border-border bg-white ring-soft transition hover:-translate-y-0.5 hover:ring-glow"
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

          <div className="mt-8 rounded-2xl border border-[#E8E4DC] bg-white p-5 sm:p-6 text-center">
            <h3 className="font-display text-xl font-bold sm:text-2xl text-[#1C2B2B]">
              28 mã màu chính hãng Lotus Metal Coat
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Chọn màu ưng ý và đặt hàng ngay — Lotus giao hàng tận nơi trên toàn quốc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
