export const RecipeCard = () => {
  return (
    <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mt-10 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-bold text-yellow-400">
          Bolo de Chocolate IA
        </h2>
        <div className="flex gap-2">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition">
            Salvar no Perfil
          </button>
          <button className="bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg text-sm font-bold border border-red-500/50 transition">
            Excluir
          </button>
        </div>
      </div>

      <div className="space-y-4 text-gray-200">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Ingredientes:
          </h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>3 ovos</li>
            <li>2 xícaras de farinha</li>
            <li>1 xícara de cacau</li>
          </ul>
        </div>
        +
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Modo de Preparo:
          </h3>
          <p className="leading-relaxed">
            Misture os secos, adicione os líquidos e asse por 40 minutos em fogo
            médio...
          </p>
        </div>
      </div>
    </div>
  );
};
