import { NextResponse } from "next/server";
import { connect } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET() {
  await connect();
  const products = await Product.find().sort({ createdAt: -1 });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const { name, description, price, image } = await req.json();
  await connect();
  const p = await Product.create({ name, description, price, image });
  return NextResponse.json(p);
}
