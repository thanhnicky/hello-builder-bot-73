import { MessageCircle, Phone } from "lucide-react";
import { HOTLINE_TEL, ZALO_URL } from "./constants";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zalo px-4 py-3 text-sm font-semibold text-zalo-foreground active:scale-[0.98]"
        >
          <MessageCircle className="size-4" />
          Nhắn Zalo
        </a>
        <a
          href={`tel:${HOTLINE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground active:scale-[0.98]"
        >
          <Phone className="size-4" />
          Đặt hàng
        </a>
      </div>
    </div>
  );
}
