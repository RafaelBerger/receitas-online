import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Efeito de Glow de Fundo */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>

      <div className="w-full max-w-100 z-10">
        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
          {/* Header do Formulário */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-white tracking-tighter">
              CHEF<span className="text-purple-500">.AI</span>
            </h2>
            <div className="flex justify-center gap-1 mt-6 bg-black/40 p-1 rounded-2xl border border-white/5">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  isLogin
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  !isLogin
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                REGISTRO
              </button>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {!isLogin && (
              <div className="group">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all placeholder:text-slate-600"
                />
              </div>
            )}

            <div className="group">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all placeholder:text-slate-600"
              />
            </div>

            <div className="group">
              <input
                type="password"
                placeholder="Senha"
                className="w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm outline-none focus:border-purple-500/50 focus:bg-black/40 transition-all placeholder:text-slate-600"
              />
            </div>

            {isLogin && (
              <p className="text-[11px] text-right text-slate-500 hover:text-purple-400 cursor-pointer transition">
                Esqueceu a senha?
              </p>
            )}

            <button className="w-full bg-white text-black font-black text-sm py-4 rounded-2xl mt-4 hover:bg-purple-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              {isLogin ? "ENTRAR AGORA" : "CRIAR CONTA"}
            </button>
          </form>

          {/* Divisor */}
          <div className="flex items-center my-8 gap-4 px-2">
            <div className="h-1px bg-white/5 flex-1"></div>
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
              OU
            </span>
            <div className="h-1px bg-white/5 flex-1"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all">
              <span className="text-xs font-bold text-white">GOOGLE</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all">
              <span className="text-xs font-bold text-white">GITHUB</span>
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-[10px] text-slate-600 uppercase tracking-tighter">
          Tecnologia Gemini AI integrada &copy; 2026
        </p>
      </div>
    </div>
  );
}
