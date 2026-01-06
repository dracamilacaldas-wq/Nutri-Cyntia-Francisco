import { Button } from "@/components/ui/button"
import { Dumbbell, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "motion/react"

export function Hero() {
    return (
        <section className="relative pt-32 pb-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="bg-[#D9F347] rounded-[2.5rem] p-8 md:p-12 lg:p-20 overflow-hidden relative">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-300/30 blur-2xl rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    {/* Left: Content - Appears second on mobile, first on desktop */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <FadeIn delay={0.1}>
                            <div className="relative inline-block">
                                <h1 className="text-[2.6rem] sm:text-4xl md:text-6xl font-black tracking-tight leading-[1] text-text-heading">
                                    Nutrição Esportiva <Dumbbell className="inline-block w-8 h-8 md:w-12 md:h-12 ml-1 md:ml-2 -mt-1 md:-mt-2 text-black fill-black/10 animate-pulse" />
                                    <br />
                                    e Estética sem
                                    <br />
                                    Dietas Restritivas
                                </h1>

                                {/* Loopy arrow (SVG) pointing toward the card */}
                                <div className="hidden lg:block absolute -right-16 top-[10%] opacity-40 pointer-events-none">
                                    <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="rotate-[15deg]">
                                        <path d="M10 20C30 15 70 20 120 60" stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8" />
                                        <path d="M105 60L120 60L122 45" stroke="black" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 max-w-lg text-pretty">
                                Chegue ao seu melhor corpo com saúde. Protocolos personalizados de emagrecimento, hipertrofia e definição por quem tem 10 anos
                                <br className="hidden md:block" /> de experiência.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <a
                                href="https://wa.me/5513991000082?text=Olá,%20Cyntia!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20para%20começar%20minha%20transformação."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full sm:w-auto"
                            >
                                <Button size="lg" className="bg-black text-white hover:bg-black/80 rounded-full gap-2 text-lg h-14 px-8 shadow-xl w-full">
                                    Agendar minha Consulta
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </a>
                        </FadeIn>
                    </div>

                    {/* Right: Visual - Appears first on mobile, second on desktop */}
                    <FadeIn delay={0.4} direction="left" className="relative lg:ml-auto w-full max-w-[450px] mx-auto lg:max-w-none order-1 lg:order-2">
                        <div className="relative z-10 group">
                            {/* The "Box/Frame" container */}
                            <div className="relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 shadow-card-hover border-[6px] md:border-[12px] border-white rotate-2 group-hover:rotate-0 transition-transform duration-500">
                                <div className="rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden">
                                    <img
                                        src="/nutri-Cyntia Francisco.webp"
                                        alt="Nutricionista Cyntia Francisco"
                                        className="w-full h-auto object-cover aspect-[4/5]"
                                    />
                                </div>

                                {/* Achievement Badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -left-4 md:-left-8 top-1/4 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg flex items-center gap-2 md:gap-3 border border-zinc-100 z-20 scale-90 md:scale-100"
                                >
                                    <div className="bg-[#D9F347]/20 p-1.5 md:p-2 rounded-full">
                                        <div className="w-3 h-3 md:w-4 md:h-4 bg-[#D9F347] rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-[8px] md:text-[10px] text-zinc-400 font-bold uppercase">Meta Atingida</p>
                                        <p className="text-xs md:text-sm font-bold text-black">-5kg em 30 dias</p>
                                    </div>
                                </motion.div>

                                {/* Bottom Label */}
                                <div className="absolute -right-2 md:-right-4 bottom-6 md:bottom-10 bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-lg border border-zinc-800 z-20 scale-90 md:scale-100 whitespace-nowrap">
                                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-wider">Plano 100% Personalizado</p>
                                </div>
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/20 blur-3xl rounded-full -z-10" />
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
