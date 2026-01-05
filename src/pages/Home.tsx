import { RecipeCard } from "../components/RecipeCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-slate-900 via-purple-900/20 to-slate-900 font-sans">
      <main className="flex flex-col items-center justify-center pt-20 px-4">
        {/* Título de Impacto */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            O que vamos{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
              cozinhar
            </span>{" "}
            hoje?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            Digite os ingredientes ou o nome de um prato e nossa inteligência
            artificial cria a receita perfeita para você.
          </p>
        </div>

        {/* Input de Busca */}
        <div className="w-full max-w-2xl relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex items-center bg-slate-800 rounded-2xl p-2 border border-slate-700">
            <input
              type="text"
              placeholder="Ex: Almoço rápido com frango e brócolis..."
              className="w-full bg-transparent p-4 text-white outline-none placeholder:text-slate-500"
            />
            <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition shadow-lg shadow-purple-500/20">
              Gerar
            </button>
          </div>
        </div>

        {/* Exemplo da Receita Aparecendo */}
        <RecipeCard />
      </main>
    </div>
  );
}
