import mongoose, { Schema, Model, Document } from "mongoose";

export interface IUser extends Document {
  name?: string;
  email: string;
  password: string; // hashed
  role?: string;
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
}, { timestamps: true });

export default (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);
