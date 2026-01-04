export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm text-pink-400 mb-4 tracking-widest">
        ✦ BIENVENUE AU NIVEAU SUPÉRIEUR ✦
      </p>

      <h1 className="text-4xl md:text-6xl font-bold neon mb-4">
        CULTURE OTAKU
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6">
        DU FUTUR
      </h2>

      <p className="max-w-xl text-gray-300 mb-8">
        Rejoignez le réseau d’élite des créateurs, fans et futuristes.
        Discussions immersives, galeries néon et jeux Otaku.
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-bold transition"
        >
          LANCER L’AVENTURE →
        </a>

        <a
          href="#"
          className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-800 transition"
        >
          DÉCOUVRIR
        </a>
      </div>
    </main>
  );
}
