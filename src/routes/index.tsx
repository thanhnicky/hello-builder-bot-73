import { createFileRoute } from "@tanstack/react-router";
import { LotusLanding } from "@/components/lotus/LotusLanding";

export const Route = createFileRoute("/")({
  component: LotusLanding,
  head: () => ({
    meta: [
      {
        title: "Sơn kim loại gốc nước Lotus — Chống gỉ, bám tốt, đẹp bền | Lotus Metal Coat",
      },
      {
        name: "description",
        content:
          "Sơn kim loại gốc nước Lotus — hệ Primer, Finish và 2in1/DTM cho cổng, hàng rào, lan can, khung thép. Chống gỉ, nhẹ mùi, bền thời tiết. Tư vấn nhanh qua Zalo 0943 966 662.",
      },
      { property: "og:title", content: "Sơn kim loại gốc nước Lotus — Chống gỉ, bám tốt, đẹp bền" },
      {
        property: "og:description",
        content:
          "Giải pháp sơn kim loại hệ nước: sơn lót chống gỉ, sơn phủ màu hoàn thiện và dòng 2in1 không cần lót. Phù hợp nội ngoại thất.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
