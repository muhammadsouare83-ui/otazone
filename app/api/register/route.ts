import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  await connectDB();

  const exist = await User.findOne({ email });
  if (exist) {
    return NextResponse.json({ error: "Email déjà utilisé" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);
  await User.create({ email, password: hash });

  return NextResponse.json({ success: true });
}
