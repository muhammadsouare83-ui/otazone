import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connectDB();
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 401 });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

  return NextResponse.json({ token });
}
