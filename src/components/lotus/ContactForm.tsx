import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Send, Image as ImageIcon, CheckCircle2 } from "lucide-react";
import { ZALO_URL } from "./constants";

const schema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^(0|\+84)\d{8,10}$/, "Số điện thoại chưa hợp lệ"),
  item: z.string().trim().min(2, "Vui lòng mô tả hạng mục").max(200),
  surface: z.enum(["sat", "thep", "nhom", "ma-kem", "khac"]),
  location: z.enum(["trong-nha", "ngoai-troi", "ca-hai"]),
  product: z.enum(["primer", "finish", "2in1", "chua-ro"]),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center ring-soft">
        <CheckCircle2 className="mx-auto size-12 text-[color:var(--success)]" />
        <h3 className="mt-4 text-xl font-semibold">Đã gửi yêu cầu!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Lotus sẽ liên hệ lại trong giờ làm việc. Để được tư vấn nhanh, bạn có thể nhắn Zalo kèm ảnh hạng mục.
        </p>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-zalo px-5 py-3 text-sm font-semibold text-zalo-foreground hover:opacity-95"
        >
          <ImageIcon className="size-4" /> Gửi ảnh qua Zalo ngay
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 ring-soft sm:p-8">
      <h3 className="text-xl font-semibold sm:text-2xl">Nhận tư vấn hệ sơn phù hợp</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Điền thông tin — Lotus sẽ tư vấn đúng sản phẩm cho hạng mục của bạn.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Họ và tên" error={errors.name}>
          <input name="name" maxLength={80} placeholder="Nguyễn Văn A" className={inputCls} />
        </Field>
        <Field label="Số điện thoại" error={errors.phone}>
          <input name="phone" inputMode="tel" maxLength={15} placeholder="09xx xxx xxx" className={inputCls} />
        </Field>
        <Field label="Hạng mục cần sơn" error={errors.item} className="sm:col-span-2">
          <input name="item" maxLength={200} placeholder="VD: Cổng sắt 2 cánh, lan can ban công..." className={inputCls} />
        </Field>
        <Field label="Loại bề mặt" error={errors.surface}>
          <select name="surface" defaultValue="sat" className={inputCls}>
            <option value="sat">Sắt</option>
            <option value="thep">Thép</option>
            <option value="nhom">Nhôm</option>
            <option value="ma-kem">Mạ kẽm</option>
            <option value="khac">Khác / chưa rõ</option>
          </select>
        </Field>
        <Field label="Vị trí sử dụng" error={errors.location}>
          <select name="location" defaultValue="ngoai-troi" className={inputCls}>
            <option value="trong-nha">Trong nhà</option>
            <option value="ngoai-troi">Ngoài trời</option>
            <option value="ca-hai">Cả trong và ngoài</option>
          </select>
        </Field>
        <Field label="Muốn chọn" error={errors.product} className="sm:col-span-2">
          <select name="product" defaultValue="chua-ro" className={inputCls}>
            <option value="primer">Lotus Metal Coat Primer</option>
            <option value="finish">Lotus Metal Coat Finish</option>
            <option value="2in1">Lotus Metal Coat 2in1 / DTM</option>
            <option value="chua-ro">Chưa rõ — cần tư vấn</option>
          </select>
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-95 ring-glow"
      >
        <Send className="size-4" />
        Đặt hàng / Nhận tư vấn
      </button>

      <div className="mt-4 flex items-center gap-3 rounded-xl border border-zalo/20 bg-zalo/5 p-4">
        <MessageCircle className="size-6 shrink-0 text-zalo" />
        <div className="flex-1 text-sm">
          <p className="font-medium text-foreground">Chưa chắc chọn loại nào?</p>
          <p className="text-muted-foreground">Gửi ảnh hạng mục qua Zalo để được tư vấn đúng hệ sơn Lotus.</p>
        </div>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-zalo px-3 py-2 text-xs font-semibold text-zalo-foreground"
        >
          Mở Zalo
        </a>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Field({
  label,
  children,
  error,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
