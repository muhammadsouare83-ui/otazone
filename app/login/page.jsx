"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/game");
    } else {
      setError(data.message || "Erreur de connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-6 rounded-xl w-80 shadow-lg"
      >
        <h1 className="text-2xl mb-5 text-center">🔐 Connexion</h1>

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

        <button className="w-full bg-green-600 hover:bg-green-700 p-2 rounded mt-2">
          Se connecter →
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          Pas de compte ?{" "}
          <a href="/register" className="text-blue-400">
            Créer un compte
          </a>
        </p>
      </form>
    </div>
  );
}
