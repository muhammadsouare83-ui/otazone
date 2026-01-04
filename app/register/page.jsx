"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login");
    } else {
      setError(data.message || "Erreur d'inscription");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-xl w-80 shadow-lg"
      >
        <h1 className="text-2xl mb-5 text-center">✨ Inscription</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 bg-zinc-800 rounded outline-none"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full p-2 mb-3 bg-zinc-800 rounded outline-none"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
        )}

        <button className="w-full bg-purple-600 hover:bg-purple-700 p-2 rounded mt-2">
          Créer le compte →
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          Déjà un compte ?{" "}
          <a href="/login" className="text-blue-400">
            Se connecter
          </a>
        </p>
      </form>
    </div>
  );
}
