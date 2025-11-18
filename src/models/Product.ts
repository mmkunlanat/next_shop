import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  image?: string;
  createdAt?: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
}, { timestamps: true });

export default (mongoose.models.Product) || mongoose.model("Product", ProductSchema);
