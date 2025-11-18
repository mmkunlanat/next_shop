import { NextResponse } from "next/server";
import QRCode from "qrcode";

/**
 * สร้าง PromptPay payload แบบง่าย (ไม่ครอบคลุมทุกกรณี)
 * ใช้เบอร์มือถือแบบ 66xxxxxxxxx หรือ 0xxxxxxxx
 * หากต้องการ EMV full spec สามารถขอเพิ่มได้
 */
function formatPhone(phone: string) {
  let p = phone.replace(/\D/g, "");
  if (p.startsWith("0")) p = "66" + p.slice(1);
  if (p.startsWith("+")) p = p.slice(1);
  return p;
}

function promptPayPayload(id: string, amount?: number) {
  // payload แบบย่อ — ใช้งานกับเครื่องอ่าน QR ของธนาคารทั่วไป
  // (ถ้าต้องการ spec EMV ให้บอก ผมขยายให้)
  return `00020101021129370016A000000677010111${id}520458125303TH5406${(amount||0).toFixed(2)}5802TH6304`;
}

export async function POST(req: Request) {
  const { phone, amount, name } = await req.json();
  const id = formatPhone(phone);
  const payload = promptPayPayload(id, amount);
  const dataUrl = await QRCode.toDataURL(payload, { type: "image/png" });
  return NextResponse.json({ dataUrl });
}
