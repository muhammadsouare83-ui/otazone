"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const characters = [
  { name: "Naruto", power: 5 },
  { name: "Goku", power: 10 },
  { name: "Luffy", power: 7 },
  { name: "Ichigo", power: 8 },
];

export default function GamePage() {
  const router = useRouter();
  const [points, setPoints] = useState(0);
  const [character, setCharacter] = useState<{name: string, power: number} | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  const chooseCharacter = () => {
    const random = characters[Math.floor(Math.random() * characters.length)];
    setCharacter(random);
    setMessage(`🔥 ${random.name} rejoint ton équipe !`);
  };

  const fight = () => {
    if (!character) {
      setMessage("❌ Choisis d'abord un personnage !");
      return;
    }
    const gain = character.power;
    setPoints(points + gain);
    setMessage(`⚔️ Combat gagné ! +${gain} points`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-2">🎌 OTAKU BATTLE 🎌</h1>
      <p className="text-gray-400 mb-4">Choisis un héros et combats pour gagner des points</p>

      <div className="bg-zinc-800 rounded-xl p-5 w-full max-w-md text-center shadow-lg">
        <p className="mb-2 text-lg">🏆 Points : <span className="text-yellow-400">{points}</span></p>

        {character ? (
          <p className="mb-3">🧙 Personnage : <span className="text-purple-400">{character.name}</span></p>
        ) : (
          <p className="mb-3 text-red-400">Aucun personnage sélectionné</p>
        )}

        <div className="flex flex-col gap-3">
          <button onClick={chooseCharacter} className="bg-purple-600 hover:bg-purple-700 py-2 rounded-lg">🎲 Choisir un personnage</button>
          <button onClick={fight} className="bg-red-600 hover:bg-red-700 py-2 rounded-lg">⚔️ Combattre</button>
          <button onClick={() => { localStorage.removeItem("token"); router.push("/login"); }} className="bg-zinc-700 hover:bg-zinc-600 py-2 rounded-lg text-sm">🚪 Déconnexion</button>
        </div>

        {message && <p className="mt-4 text-green-400 text-sm">{message}</p>}
      </div>
    </div>
  );
}
