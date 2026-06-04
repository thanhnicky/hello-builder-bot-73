import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
});

interface OrderItem {
  name: string;
  quantity: number;
  unitPrice: number;
  color: string;
}

interface OrderData {
  name: string;
  phone: string;
  address: string;
  note: string;
  paymentMethod: "cod" | "online";
  items: OrderItem[];
  subtotal: number;
  discount: number;
  total: number;
  timestamp: number;
}

function ThankYouPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const dataStr = sessionStorage.getItem("lotusOrder");
      if (dataStr) {
        setOrder(JSON.parse(dataStr));
      }
    } catch (e) {
      console.error("Error reading order from sessionStorage", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Đặt Hàng Thành Công | Lotus Metal Coat";

    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(metaRobots);
    };
  }, []);

  function formatVND(val: number) {
    return val.toLocaleString("vi-VN") + "đ";
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F5F2]">
        <div className="text-neutral-500">Đang tải thông tin đơn hàng...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F7F5F2] px-4">
        <div className="w-full max-w-md rounded-2xl border border-[#E8E4DC] bg-white p-8 text-center shadow-sm">
          <div className="text-4xl">⚠️</div>
          <h1 className="mt-4 text-xl font-bold text-neutral-900">Không tìm thấy đơn hàng</h1>
          <p className="mt-2 text-sm text-neutral-600">
            Xin lỗi, chúng tôi không tìm thấy thông tin đơn hàng của bạn. Vui lòng quay lại trang chủ và thực hiện đặt hàng.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold text-white transition hover:opacity-95"
              style={{ background: "#2D7A3A" }}
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const cleanPhone = order.phone.replace(/\D/g, "");
  const vietQrUrl = `https://img.vietqr.io/image/EIB-211014851223910-compact2.png?amount=${order.total}&addInfo=LOTUS${cleanPhone}&accountName=LOTUS PAINT`;

  return (
    <div className="min-h-screen bg-[#F7F5F2] py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* LOGO HEADER */}
        <div className="mb-8 flex justify-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-black uppercase tracking-wider text-neutral-900">
              Lotus Paint
            </span>
          </Link>
        </div>

        {/* MAIN CARD */}
        <div className="overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white shadow-sm">
          {/* HEADER SECTION */}
          <div className="border-b border-[#E8E4DC] p-8 text-center sm:p-10">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#E8F5E9] text-3xl text-[#2D7A3A]">
              ✓
            </span>
            <h1 className="mt-5 font-display text-2xl font-extrabold text-neutral-900 sm:text-3xl">
              Đặt hàng thành công!
            </h1>
            <p className="mt-3 text-base text-neutral-600 font-medium">
              Cảm ơn khách hàng {order.name} đã lựa chọn sản phẩm Sơn Lotus
            </p>
          </div>

          {/* SECTION 1 — TÓM TẮT ĐƠN HÀNG */}
          <div className="p-8 sm:p-10 border-b border-[#E8E4DC]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Tóm tắt đơn hàng
            </h2>

            <div className="mt-4 space-y-3 rounded-xl bg-[#FDFBF7] p-5 border border-[#E8E4DC]/50 text-sm">
              <div>
                <span className="font-semibold text-neutral-500">Người nhận:</span>{" "}
                <span className="font-medium text-neutral-900">{order.name}</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-500">Số điện thoại:</span>{" "}
                <span className="font-medium text-neutral-900">{order.phone}</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-500">Địa chỉ giao hàng:</span>{" "}
                <span className="font-medium text-neutral-900 leading-relaxed block mt-0.5">{order.address}</span>
              </div>
              {order.note && (
                <div>
                  <span className="font-semibold text-neutral-500">Ghi chú:</span>{" "}
                  <span className="font-medium text-neutral-900 block mt-0.5 italic">"{order.note}"</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Chi tiết sản phẩm
              </h3>
              <div className="divide-y divide-neutral-100 text-sm">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex items-start justify-between py-3">
                    <div className="pr-4">
                      <p className="font-semibold text-neutral-900">{it.name}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Màu sơn: <span className="font-semibold text-neutral-700">{it.color || "Chưa chọn"}</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-neutral-900">
                        x{it.quantity}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {formatVND(it.quantity * it.unitPrice)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-[#E8E4DC] pt-5 space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Tạm tính:</span>
                <span className="font-semibold text-neutral-800">{formatVND(order.subtotal)}</span>
              </div>
              {order.paymentMethod === "online" && (
                <div className="flex justify-between text-[#2D7A3A]">
                  <span className="font-medium">Giảm giá Online (10%):</span>
                  <span className="font-semibold">-{formatVND(order.discount)}</span>
                </div>
              )}
              <div className="flex justify-between items-baseline pt-2 border-t border-dashed border-neutral-200">
                <span className="text-base font-bold text-neutral-900">Tổng cộng:</span>
                <span className="font-display text-2xl font-extrabold text-[#E8521A]">
                  {formatVND(order.total)}
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-neutral-500 font-medium">Hình thức thanh toán:</span>
                <span className="font-semibold text-neutral-800">
                  {order.paymentMethod === "online"
                    ? "Chuyển khoản Online"
                    : "Thanh toán khi nhận hàng (COD)"}
                </span>
              </div>
            </div>
          </div>

          {/* SECTION 2 — THÔNG TIN CHUYỂN KHOẢN */}
          {order.paymentMethod === "online" && (
            <div className="p-8 sm:p-10 border-b border-[#E8E4DC] bg-[#FDFBF7]">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">
                Thông tin chuyển khoản
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-3.5 text-sm">
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase font-bold tracking-wider">Ngân hàng</span>
                    <span className="font-semibold text-neutral-800 text-base">Eximbank</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase font-bold tracking-wider">Số tài khoản</span>
                    <span className="font-mono font-bold text-neutral-900 text-lg tracking-wider">211014851223910</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase font-bold tracking-wider">Chủ tài khoản</span>
                    <span className="font-semibold text-neutral-800 text-base">CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block text-xs uppercase font-bold tracking-wider">Nội dung chuyển khoản</span>
                    <span className="inline-block font-mono font-bold bg-[#E8F5E9] text-[#2D7A3A] px-3 py-1.5 rounded border border-[#2D7A3A]/20">
                      LOTUS {cleanPhone}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm">
                    <img
                      src={vietQrUrl}
                      alt="VietQR code"
                      className="size-[200px] object-contain"
                    />
                  </div>
                  <span className="mt-2 text-xs text-neutral-400 font-medium">
                    Quét mã VietQR để tự động điền thông tin
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3 — BƯỚC TIẾP THEO */}
          <div className="p-8 sm:p-10 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
              Ghi chú:
            </h2>
            <div className="space-y-4 text-sm text-neutral-700 font-medium mt-4">
              <div className="flex gap-3">
                <span className="text-base select-none">📦</span>
                <p>Lotus có thể liên hệ lại với bạn khi cần thiết để xác nhận khi thông tin chưa rõ</p>
              </div>
              <div className="flex gap-3">
                <span className="text-base select-none">🚚</span>
                <p>Hàng được đóng gói và giao nhanh 24–48h tại TP.HCM và khu vực lân cận. Các tỉnh thành khác thời gian giao từ 3-5 ngày theo lịch của đơn vị Giao Hàng Nhanh.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-base select-none">📞</span>
                <p>Nếu cần hỗ trợ khẩn cấp, vui lòng liên hệ Hotline: <span className="font-bold text-neutral-900">0943 966 662</span></p>
              </div>
            </div>
          </div>

          {/* FOOTER CTA */}
          <div className="border-t border-[#E8E4DC] p-8 sm:p-10 bg-[#F9F8F6] flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center rounded-xl border border-[#E8E4DC] bg-white py-4 text-sm font-bold text-neutral-800 transition hover:bg-neutral-50"
            >
              Về trang chủ
            </Link>
            <a
              href="https://zalo.me/0943966662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-xl py-4 text-sm font-bold text-white transition hover:opacity-95 shadow-sm"
              style={{ background: "#2D7A3A" }}
            >
              Nhắn Zalo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
