import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connect } from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await connect();

  const exists = await User.findOne({ email });
  if (exists) return NextResponse.json({ error: "Email already in use" }, { status: 400 });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  return NextResponse.json({ ok: true, user: { id: user._id, email: user.email, name: user.name } });
}
