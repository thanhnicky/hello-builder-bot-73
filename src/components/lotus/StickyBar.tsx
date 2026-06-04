import { ShoppingCart } from "lucide-react";

export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href="#combo"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#E8541A] px-4 py-3 text-sm font-semibold text-white active:scale-[0.98]"
        >
          <ShoppingCart className="size-4" />
          Đặt hàng ngay
        </a>
      </div>
    </div>
  );
}
