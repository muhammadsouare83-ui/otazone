import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Champs manquants" },
        { status: 400 }
      );
    }

    await connectDB();

    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json(
        { message: "Utilisateur déjà existant" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Compte créé avec succès" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
