import { ShoppingCart, MessageCircle } from "lucide-react";
import { ZALO_URL } from "./constants";

// Helper function to track GA4 events
const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export function StickyBar() {
  return (
    <>
      {/* Floating Zalo Button - Desktop Only */}
      <a
        href={ZALO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2 rounded-full bg-[#E8541A] px-5 py-3.5 text-base font-semibold text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse"
        onClick={() => trackEvent('zalo_click', { method: 'floating_button' })}
      >
        <MessageCircle className="size-6" />
        <span>Chat Zalo</span>
      </a>

      {/* Mobile Sticky Bar - Order Button */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-3 py-2 backdrop-blur md:hidden">
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
    </>
  );
}
