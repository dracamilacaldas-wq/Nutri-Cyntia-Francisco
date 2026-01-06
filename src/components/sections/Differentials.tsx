import { FadeIn } from "@/components/animations/FadeIn"
import { CheckCircle2 } from "lucide-react"

const differentials = [
    "Melhora na Qualidade de Vida",
    "Aumento de Força e Resistência",
    "Autoestima Renovada",
    "Saúde Geral Blindada"
]

export function Differentials() {
    return (
        <section id="differentials" className="py-24 bg-[#09090B] text-white relative overflow-hidden">
            {/* Decorative Squiggles */}
            <div className="absolute top-10 left-10 opacity-20">
                <svg width="100" height="50" viewBox="0 0 100 50" fill="none" stroke="#D9F347" strokeWidth="4">
                    <path d="M5 25 Q 25 5, 50 25 T 95 25" strokeLinecap="round" />
                </svg>
            </div>
            <div className="absolute bottom-10 right-10 opacity-20 rotate-180">
                <svg width="100" height="50" viewBox="0 0 100 50" fill="none" stroke="#D9F347" strokeWidth="4">
                    <path d="M5 25 Q 25 5, 50 25 T 95 25" strokeLinecap="round" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
                    <FadeIn className="md:w-1/2">
                        <h2 className="text-[2.5rem] md:text-6xl font-black tracking-tighter mb-6 leading-[1] text-white">
                            Muito Mais que <br />
                            <span className="text-[#D9F347]">uma Dieta.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-sm text-balance">
                            Não é apenas sobre contar calorias. É sobre transformar sua relação com a comida e desbloquear o potencial máximo do seu corpo.
                        </p>
                    </FadeIn>

                    <div className="md:w-1/2 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                            {differentials.map((item, idx) => (
                                <FadeIn key={idx} delay={idx * 0.1}>
                                    <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-[1.5rem] hover:border-[#D9F347]/30 transition-all group flex flex-col items-start h-full">
                                        <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[#D9F347] mb-4 group-hover:scale-110 transition-transform" />
                                        <h3 className="font-bold text-base md:text-lg text-white leading-tight">{item}</h3>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
