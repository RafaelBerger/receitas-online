// import { useState } from "react";

export default function Chat() {
  // const [activeTab, setActiveTab] = useState("discovery"); // 'discovery' ou 'messages'

  // Dados Mock para o design
  const usersOnline = [
    { id: 1, name: "Lucas Chef", status: "Cozinhando...", avatar: "L" },
    { id: 2, name: "Ana Maria", status: "Online", avatar: "A" },
    { id: 3, name: "Dev Gourmet", status: "Em uma receita", avatar: "D" },
  ];

  return (
    <div className="h-screen bg-[#020617] text-white flex overflow-hidden pt-16">
      {/* 1. Barra Lateral de Navegação (Discovery) */}
      <aside className="w-80 border-r border-white/5 bg-slate-900/20 backdrop-blur-xl flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-black tracking-tighter mb-6 italic">
            EXPLORAR
          </h2>

          {/* Busca de Pessoas */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Encontrar chefs..."
              className="w-full bg-black/40 border border-white/5 rounded-xl py-2 px-4 text-sm outline-none focus:border-purple-500/50 transition"
            />
          </div>

          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Pessoas Online
            </p>
            {usersOnline.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 cursor-pointer transition group"
              >
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-purple-600 to-pink-600 flex items-center justify-center font-bold text-xs border border-white/10">
                  {user.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold group-hover:text-purple-400 transition">
                    {user.name}
                  </h4>
                  <p className="text-[10px] text-slate-500">{user.status}</p>
                </div>
                <div className="ml-auto w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Salas Globais */}
        <div className="mt-auto p-6 border-t border-white/5">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
            Salas de Receitas
          </p>
          <div className="bg-linear-to-r from-purple-900/40 to-transparent p-4 rounded-2xl border border-purple-500/20">
            <p className="text-xs font-bold">Chat Global 🌎</p>
            <p className="text-[10px] text-purple-300">
              42 pessoas trocando dicas
            </p>
          </div>
        </div>
      </aside>

      {/* 2. Área Principal do Chat */}
      <main className="flex-1 flex flex-col relative">
        {/* Glow de fundo no chat */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none"></div>

        {/* Topo do Chat Ativo */}
        <div className="p-4 border-b border-white/5 bg-black/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px]">
              A
            </div>
            <div>
              <p className="text-sm font-bold">Ana Maria</p>
              <p className="text-[10px] text-green-400">Escrevendo...</p>
            </div>
          </div>
          <button className="text-xs font-bold text-slate-400 hover:text-white transition">
            Ver Perfil
          </button>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex flex-col items-start max-w-[70%]">
            <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl rounded-tl-none border border-white/5 shadow-xl">
              <p className="text-sm">
                Oi! Vi que você gerou uma receita de Risoto. Deu certo o ponto
                do arroz? 🍚
              </p>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 ml-1">14:20</span>
          </div>

          <div className="flex flex-col items-end ml-auto max-w-[70%]">
            <div className="bg-purple-600 p-4 rounded-2xl rounded-tr-none shadow-lg shadow-purple-500/20">
              <p className="text-sm">
                Ficou perfeito! O Gemini sugeriu usar um pouco de vinho branco
                no início e fez toda a diferença.
              </p>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 mr-1">14:22</span>
          </div>
        </div>

        {/* Input de Mensagem */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto relative group">
            <input
              type="text"
              placeholder="Sua mensagem..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-16 text-sm outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-white text-black rounded-xl font-black text-xs hover:bg-purple-400 transition-all active:scale-95">
              ENVIAR
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
