import { Button } from "@/components/ui/button"
import { MessageCircle, Gift } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"

export function Footer() {
    return (
        <footer className="bg-background pt-12 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-black text-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 relative overflow-hidden">
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

                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
                    <p>© {new Date().getFullYear()} Cynthia Francisco Nutrição. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#D9F347] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[#D9F347] transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
