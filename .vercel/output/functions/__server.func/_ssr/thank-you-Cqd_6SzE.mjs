import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function ThankYouPage() {
  const [order, setOrder] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
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
  function formatVND(val) {
    return val.toLocaleString("vi-VN") + "đ";
  }
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#F7F5F2]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-neutral-500", children: "Đang tải thông tin đơn hàng..." }) });
  }
  if (!order) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#F7F5F2] px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-2xl border border-[#E8E4DC] bg-white p-8 text-center shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: "⚠️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-xl font-bold text-neutral-900", children: "Không tìm thấy đơn hàng" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-neutral-600", children: "Xin lỗi, chúng tôi không tìm thấy thông tin đơn hàng của bạn. Vui lòng quay lại trang chủ và thực hiện đặt hàng." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold text-white transition hover:opacity-95", style: {
        background: "#2D7A3A"
      }, children: "Về trang chủ" }) })
    ] }) });
  }
  const cleanPhone = order.phone.replace(/\D/g, "");
  const vietQrUrl = `https://img.vietqr.io/image/EIB-211014851223910-compact2.png?amount=${order.total}&addInfo=LOTUS${cleanPhone}&accountName=LOTUS PAINT`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#F7F5F2] py-12 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-black uppercase tracking-wider text-neutral-900", children: "Lotus Paint" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-[#E8E4DC] bg-white shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[#E8E4DC] p-8 text-center sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto flex size-16 items-center justify-center rounded-full bg-[#E8F5E9] text-3xl text-[#2D7A3A]", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-2xl font-extrabold text-neutral-900 sm:text-3xl", children: "Đặt hàng thành công!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-base text-neutral-600 font-medium", children: [
          "Cảm ơn khách hàng ",
          order.name,
          " đã lựa chọn sản phẩm Sơn Lotus"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10 border-b border-[#E8E4DC]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-wider text-neutral-500", children: "Tóm tắt đơn hàng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3 rounded-xl bg-[#FDFBF7] p-5 border border-[#E8E4DC]/50 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-500", children: "Người nhận:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-neutral-900", children: order.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-500", children: "Số điện thoại:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-neutral-900", children: order.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-500", children: "Địa chỉ giao hàng:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-neutral-900 leading-relaxed block mt-0.5", children: order.address })
          ] }),
          order.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-500", children: "Ghi chú:" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-neutral-900 block mt-0.5 italic", children: [
              '"',
              order.note,
              '"'
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3", children: "Chi tiết sản phẩm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-neutral-100 text-sm", children: order.items.map((it, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pr-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-neutral-900", children: it.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-neutral-500 mt-0.5", children: [
                "Màu sơn: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-700", children: it.color || "Chưa chọn" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium text-neutral-900", children: [
                "x",
                it.quantity
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neutral-500 mt-0.5", children: formatVND(it.quantity * it.unitPrice) })
            ] })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-[#E8E4DC] pt-5 space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 font-medium", children: "Tạm tính:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-800", children: formatVND(order.subtotal) })
          ] }),
          order.paymentMethod === "online" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[#2D7A3A]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Giảm giá Online (10%):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
              "-",
              formatVND(order.discount)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline pt-2 border-t border-dashed border-neutral-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-neutral-900", children: "Tổng cộng:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-extrabold text-[#E8521A]", children: formatVND(order.total) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 font-medium", children: "Hình thức thanh toán:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-800", children: order.paymentMethod === "online" ? "Chuyển khoản Online" : "Thanh toán khi nhận hàng (COD)" })
          ] })
        ] })
      ] }),
      order.paymentMethod === "online" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10 border-b border-[#E8E4DC] bg-[#FDFBF7]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4", children: "Thông tin chuyển khoản" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block text-xs uppercase font-bold tracking-wider", children: "Ngân hàng" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-800 text-base", children: "Eximbank" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block text-xs uppercase font-bold tracking-wider", children: "Số tài khoản" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-neutral-900 text-lg tracking-wider", children: "211014851223910" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block text-xs uppercase font-bold tracking-wider", children: "Chủ tài khoản" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-neutral-800 text-base", children: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neutral-500 block text-xs uppercase font-bold tracking-wider", children: "Nội dung chuyển khoản" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block font-mono font-bold bg-[#E8F5E9] text-[#2D7A3A] px-3 py-1.5 rounded border border-[#2D7A3A]/20", children: [
                "LOTUS ",
                cleanPhone
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: vietQrUrl, alt: "VietQR code", className: "size-[200px] object-contain" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-xs text-neutral-400 font-medium", children: "Quét mã VietQR để tự động điền thông tin" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold uppercase tracking-wider text-neutral-500", children: "Ghi chú:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm text-neutral-700 font-medium mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base select-none", children: "📦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Lotus có thể liên hệ lại với bạn khi cần thiết để xác nhận khi thông tin chưa rõ" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base select-none", children: "🚚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Hàng được đóng gói và giao nhanh 24–48h tại TP.HCM và khu vực lân cận. Các tỉnh thành khác thời gian giao từ 3-5 ngày theo lịch của đơn vị Giao Hàng Nhanh." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base select-none", children: "📞" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Nếu cần hỗ trợ khẩn cấp, vui lòng liên hệ Hotline: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-neutral-900", children: "0943 966 662" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-[#E8E4DC] p-8 sm:p-10 bg-[#F9F8F6] flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex-1 inline-flex items-center justify-center rounded-xl border border-[#E8E4DC] bg-white py-4 text-sm font-bold text-neutral-800 transition hover:bg-neutral-50", children: "Về trang chủ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "flex-1 inline-flex items-center justify-center rounded-xl py-4 text-sm font-bold text-white transition hover:opacity-95 shadow-sm", style: {
          background: "#2D7A3A"
        }, children: "Nhắn Zalo →" })
      ] })
    ] })
  ] }) });
}
export {
  ThankYouPage as component
};
