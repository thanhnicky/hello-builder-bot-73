import { createFileRoute } from "@tanstack/react-router";
import { LotusLanding } from "@/components/lotus/LotusLanding";

export const Route = createFileRoute("/")({
  component: LotusLanding,
  head: () => ({
    meta: [
      {
        title: "Sơn kim loại gốc nước Lotus — Không mùi xăng, chống gỉ tốt, thi công sạch hơn",
      },
      {
        name: "description",
        content:
          "Lotus Metal Coat — sơn kim loại hệ nước thay thế sơn dầu. Không mùi xăng, an toàn trong nhà, chống gỉ tốt trên sắt, mạ kẽm, nhôm. Có hệ 2in1 thi công nhanh, không cần lót riêng.",
      },
      { property: "og:title", content: "Sơn kim loại gốc nước Lotus — Không mùi xăng, chống gỉ tốt, thi công sạch hơn" },
      {
        property: "og:description",
        content:
          "Lotus Metal Coat — sơn kim loại hệ nước thay thế sơn dầu. Không mùi xăng, an toàn trong nhà, chống gỉ tốt trên sắt, mạ kẽm, nhôm. Có hệ 2in1 thi công nhanh, không cần lót riêng.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
