// Componente de Card Interno para organizar melhor o código
function SavedRecipeCard({ title }: { title: string }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group">
      {/* Conteúdo do Card */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">
          Receita personalizada gerada pela IA com base nos seus ingredientes
          favoritos.
        </p>

        <div className="flex justify-between items-center">
          <button className="text-purple-400 text-xs font-bold hover:text-purple-300 transition">
            VER RECEITA
          </button>
          <button className="text-slate-500 hover:text-red-400 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  // Lista mockada para visualização
  const myRecipes = [
    "Lasanha de Berinjela",
    "Bolo de Caneca Fit",
    "Frango Curry Especial",
    "Smoothie de Frutas Vermelhas",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-slate-800/30 p-8 rounded-3xl border border-slate-800">
          <div className="w-32 h-32 rounded-full bg-linear-to-tr from-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-white">
              V
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
              Vinicius Silva
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                <span className="block text-xs text-slate-500 uppercase font-bold">
                  Receitas Salvas
                </span>
                <span className="text-xl font-bold text-purple-400">12</span>
              </div>
            </div>
          </div>

          <button className="bg-white text-black font-bold px-6 py-3 rounded-2xl hover:bg-purple-400 transition transform active:scale-95">
            Editar Perfil
          </button>
        </header>

        {/* Grid de Receitas */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              Minhas Criações
              <span className="bg-purple-500/10 text-purple-400 text-xs py-1 px-2 rounded-md">
                Privado
              </span>
            </h2>
            <select className="bg-slate-800 border border-slate-700 text-sm rounded-lg p-2 outline-none focus:border-purple-500">
              <option>Mais recentes</option>
              <option>A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {myRecipes.map((recipe, index) => (
              <SavedRecipeCard key={index} title={recipe} />
            ))}

            {/* Card de "Adicionar Nova" */}
            <button className="border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-2 p-6 hover:border-purple-500/50 hover:bg-purple-500/5 transition group">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-purple-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <span className="text-slate-500 font-bold group-hover:text-purple-400">
                Nova Receita
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
