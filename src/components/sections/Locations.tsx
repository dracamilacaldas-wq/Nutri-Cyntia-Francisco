import { FadeIn } from "@/components/animations/FadeIn"
import { MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"
import { MapModal } from "@/components/ui/MapModal"

export function Locations() {
    const [selectedLocation, setSelectedLocation] = useState<{ city: string; address: string; mapUrl: string } | null>(null)

    const handleOpenMap = (city: string, address: string, query: string) => {
        setSelectedLocation({
            city,
            address,
            mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`
        })
    }

    return (
        <section id="locations" className="py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-zinc-50 border border-zinc-100 p-6 sm:p-8 md:p-16 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
                    {/* Left: Special Services */}
                    <FadeIn>
                        <div className="space-y-8">
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">Outras Formas de Atendimento</h3>
                            <div className="space-y-3">
                                <a
                                    href="https://wa.me/5513991000082?text=Olá,%20Cyntia!%20Gostaria%20de%20informações%20sobre%20o%20atendimento%20Home%20Care%20(em%20domicílio)."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-white rounded-[1.5rem] border border-zinc-100 shadow-sm hover:shadow-md hover:border-[#D9F347]/50 transition-all gap-4">
                                        <div>
                                            <h4 className="font-bold text-lg">Home Care</h4>
                                            <p className="text-zinc-500 text-sm">Atendimento no conforto do seu lar</p>
                                        </div>
                                        <span className="font-bold text-lg bg-[#D9F347]/20 px-4 py-1.5 rounded-full border border-[#D9F347]/30 w-fit">R$ 430,00</span>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/5513991000082?text=Olá,%20Cyntia!%20Gostaria%20de%20agendar%20apenas%20uma%20avaliação%20de%20Bioimpedância%20avulsa."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 bg-white rounded-[1.5rem] border border-zinc-100 shadow-sm hover:shadow-md hover:border-[#D9F347]/50 transition-all gap-4">
                                        <div>
                                            <h4 className="font-bold text-lg">Bioimpedância Avulsa</h4>
                                            <p className="text-zinc-500 text-sm">Análise corporal precisa</p>
                                        </div>
                                        <span className="font-bold text-lg bg-[#D9F347]/20 px-4 py-1.5 rounded-full border border-[#D9F347]/30 w-fit">R$ 70,00</span>
                                    </div>
                                </a>

                                <div className="pt-4">
                                    <p className="text-zinc-500 text-xs italic text-pretty">
                                        * Valores sujeitos a alteração sem aviso prévio. Consulte disponibilidade para Home Care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Locations */}
                    <FadeIn delay={0.2}>
                        <div className="space-y-8 h-full flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Atendimento Presencial</h2>
                            <div className="grid gap-4 md:gap-6">
                                <div
                                    onClick={() => handleOpenMap('Guarujá', 'Av. Manuel Albino, 463', 'Av. Manuel Albino, 463 - Guarujá')}
                                    className="group bg-white p-5 md:p-6 rounded-[1.5rem] border border-zinc-200 hover:border-[#D9F347] transition-all cursor-pointer"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-black text-white rounded-full group-hover:bg-[#D9F347] group-hover:text-black transition-colors shrink-0">
                                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg md:text-xl mb-1">Guarujá</h4>
                                            <p className="text-zinc-600 text-sm md:text-base mb-2 leading-relaxed">Av. Manuel Albino, 463</p>
                                            <span className="text-xs md:text-sm font-bold underline flex items-center gap-1 group-hover:text-black uppercase tracking-wider">
                                                Ver no mapa <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    onClick={() => handleOpenMap('Santos', 'Av. Ana Costa, 100', 'Av. Ana Costa, 100 - Santos')}
                                    className="group bg-white p-5 md:p-6 rounded-[1.5rem] border border-zinc-200 hover:border-[#D9F347] transition-all cursor-pointer"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-black text-white rounded-full group-hover:bg-[#D9F347] group-hover:text-black transition-colors shrink-0">
                                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg md:text-xl mb-1">Santos</h4>
                                            <p className="text-zinc-600 text-sm md:text-base mb-2 leading-relaxed">Av. Ana Costa, 100</p>
                                            <span className="text-xs md:text-sm font-bold underline flex items-center gap-1 group-hover:text-black uppercase tracking-wider">
                                                Ver no mapa <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <MapModal
                isOpen={!!selectedLocation}
                onClose={() => setSelectedLocation(null)}
                location={selectedLocation}
            />
        </section>
    )
}
