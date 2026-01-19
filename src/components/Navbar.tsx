export default function Navbar() {
  return (
    <div className="bg-[#0f172a] bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-slate-900 via-purple-900/20 to-slate-900 font-sans">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-black text-white tracking-tighter italic">
          GERADOR DE RECEITAS
        </h1>
        <div className="space-x-6 text-gray-400 font-medium">
          <a href="/" className="hover:text-white transition">
            Início
          </a>
          <a href="/chat" className="hover:text-white transition">
            Chat
          </a>
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-purple-400 transition">
            Entrar
          </button>
        </div>
      </nav>
    </div>
  );
}
