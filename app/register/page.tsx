"use client";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#0b0b16] border border-blue-600 rounded-xl p-6 shadow-xl">

        <h1 className="text-2xl font-bold text-center neon mb-2">
          CRÉER UN COMPTE
        </h1>
        <p className="text-center text-sm text-gray-400 mb-6">
          REJOIGNE LA CULTURE OTAKU
        </p>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">EMAIL</label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-3 bg-black border border-gray-700 rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">MOT DE PASSE</label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-3 bg-black border border-gray-700 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            INSCRIPTION →
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Déjà un compte ?{" "}
          <a href="/login" className="text-pink-400 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
