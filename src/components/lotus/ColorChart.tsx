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
    <section id="bang-mau" className="bg-neutral-50 py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <div className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Bảng màu
          </div>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-[42px] lg:leading-[1.1] text-neutral-900">
            Bảng màu Lotus Metal Coat — 28 mã màu tiêu chuẩn
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-neutral-600">
            Mỗi mã màu đều có sẵn cho hệ <strong className="text-neutral-900">2in1 / DTM</strong> và{" "}
            <strong className="text-neutral-900">Finish</strong>. Màu hiển thị trên màn hình có thể
            chênh lệch nhẹ so với thực tế — vui lòng yêu cầu mẫu màu thật trước khi đặt số lượng lớn.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-4 gap-5 sm:grid-cols-6 sm:gap-6 lg:grid-cols-7">
            {COLORS.map((c) => (
              <div
                key={c.code}
                className="group"
              >
                <div
                  className="aspect-square w-full rounded-sm shadow-sm transition hover:scale-105"
                  style={{ backgroundColor: c.hex }}
                  aria-label={`${c.code} ${c.name}`}
                />
                <div className="mt-4">
                  <div className="font-display text-xs font-bold text-neutral-900">
                    {c.code}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">{c.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-neutral-200 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
              <div>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  28 mã màu chính hãng Lotus Metal Coat
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-neutral-600">
                  Chọn màu ưng ý và đặt hàng ngay — Lotus giao hàng tận nơi trên toàn quốc.
                </p>
              </div>
              <a
                href="#combo"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              >
                Đặt hàng ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
