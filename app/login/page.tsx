"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#0b0b16] border border-purple-600 rounded-xl p-6 shadow-xl">
        
        <h1 className="text-2xl font-bold text-center neon mb-2">
          ACCÉDER
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          AUTHENTIFICATION REQUISE
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">EMAIL</label>
            <input
              type="email"
              placeholder="user@exemple.com"
              className="w-full mt-1 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">MOT DE PASSE</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            CONNEXION →
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Pas encore de compte ?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
}
