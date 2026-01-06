import { Button } from "@/components/ui/button"
import { MessageCircle, Gift } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "motion/react"
import LumoLogo from "@/assets/logo-lumo.svg"

export function Footer() {
    return (
        <footer className="bg-background -mt-12 md:mt-0 pt-0 pb-12 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-black text-white rounded-[2.5rem] md:rounded-[3rem] px-8 pt-24 pb-16 md:p-16 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D9F347]/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />

                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
                    <FadeIn>
                        <div className="space-y-6">
                            <h2 className="text-[2.2rem] md:text-5xl font-bold tracking-tighter text-white leading-[1.1] text-balance">Pronta para transformar sua vida?</h2>
                            <p className="text-zinc-400 text-lg max-w-md leading-relaxed text-pretty">
                                Dê o primeiro passo hoje. Agende sua consulta e descubra como uma alimentação equilibrada pode mudar tudo.
                            </p>

                            <a
                                href="https://wa.me/5513991000082?text=Olá,%20Cyntia!%20Vi%20seu%20site%20e%20quero%20transformar%20minha%20saúde.%20Podemos%20conversar?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full sm:w-auto"
                            >
                                <Button size="lg" className="bg-[#D9F347] text-black hover:bg-[#D9F347]/90 rounded-full h-14 px-8 text-base md:text-lg font-bold shadow-button-glow w-full uppercase tracking-wider">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Falar no WhatsApp
                                </Button>
                            </a>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-[#18181B] border border-[#D9F347]/30 rounded-3xl p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Gift className="w-32 h-32 text-[#D9F347]" />
                            </div>
                            <div className="relative z-10">
                                <div className="bg-[#D9F347] text-black w-fit p-3 rounded-xl mb-4">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Programa de Indicação</h3>
                                <p className="text-zinc-400 mb-4 text-sm md:text-base leading-relaxed text-balance">Indique amigos e ganhe descontos progressivos na sua próxima consulta.</p>
                                <div className="text-[#D9F347] font-bold text-xl md:text-2xl tracking-tight">
                                    Ganhe até 100% OFF!
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-zinc-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 md:mb-0">
                        {/* Left: Social Links */}
                        <div className="flex gap-8 order-2 md:order-1">
                            <a href="https://www.instagram.com/nutricyntiafrancisco/" className="text-zinc-500 hover:text-[#D9F347] transition-all duration-300 text-xs font-medium uppercase tracking-wider">Instagram</a>
                            <a href="#" className="text-zinc-500 hover:text-[#D9F347] transition-all duration-300 text-xs font-medium uppercase tracking-wider">LinkedIn</a>
                        </div>

                        {/* Right: Lumo Credit */}
                        <a
                            href="https://lumostudio.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-all duration-500 group order-1 md:order-2"
                        >
                            <span className="text-[10px] tracking-widest text-zinc-500 group-hover:text-zinc-300 font-bold uppercase">Feito com</span>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-4 h-4 text-red-500/60 group-hover:text-red-500 transition-colors"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </motion.svg>
                            <span className="text-[10px] tracking-widest text-zinc-500 group-hover:text-zinc-300 font-bold uppercase">por</span>
                            <img src={LumoLogo} alt="Lumo Studio" className="h-3.5 opacity-50 group-hover:opacity-100 transition-all grayscale brightness-200" />
                        </a>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-8 md:mt-6 text-center md:text-left">
                        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-medium">
                            © {new Date().getFullYear()} Cynthia Francisco Nutrição
                            <span className="hidden md:inline mx-3 text-zinc-800">•</span>
                            <span className="block md:inline mt-2 md:mt-0">Todos os direitos reservados</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
