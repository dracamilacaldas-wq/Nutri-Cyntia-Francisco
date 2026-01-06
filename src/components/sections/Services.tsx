import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn"
import { Check, Star } from "lucide-react"

import { cn } from "@/lib/utils"

const services = [
    {
        title: "Consulta Presencial",
        price: "R$ 250,00",
        description: "Atendimento completo com avaliação física detalhada.",
        benefits: ["Bioimpedância Inclusa", "Dieta Impressa", "Análise de Exames", "Suporte no WhatsApp"],
        featured: false,
        waMessage: "Olá,%20Cyntia!%20Gostaria%20de%20agendar%20uma%20Consulta%20Presencial."
    },
    {
        title: "Combo Foco Total",
        price: "R$ 350,00",
        description: "O acompanhamento intensivo para resultados acelerados.",
        benefits: ["Consulta + Retorno (30 dias)", "Ajustes na Dieta", "Avaliação Física Completa", "Monitoramento Semanal"],
        featured: true,
        badge: "Mais Popular",
        waMessage: "Olá,%20Cyntia!%20Tenho%20interesse%20no%20Combo%20Foco%20Total%20para%20resultados%20acelerados."
    },
    {
        title: "Plano Semestral",
        price: "R$ 150,00",
        period: "/mês",
        description: "Constância é a chave. Acompanhamento contínuo por 6 meses.",
        benefits: ["Consultas Mensais", "Bioimpedância Mensal", "Desconto Exclusivo", "Ajustes Ilimitados"],
        featured: false,
        waMessage: "Olá,%20Cyntia!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Plano%20Semestral."
    },
    {
        title: "Consulta Online",
        price: "R$ 250,00",
        description: "A mesma qualidade de atendimento, no conforto da sua casa.",
        benefits: ["Videochamada de 1h", "Dieta via App", "Lista de Compras", "Suporte no WhatsApp"],
        featured: false,
        waMessage: "Olá,%20Cyntia!%20Gostaria%20de%20agendar%20uma%20vídeo-consulta%20online."
    }
]

export function Services() {
    return (
        <section id="services" className="py-20 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto mb-10 md:mb-16 text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 leading-tight text-balance">Escolha o Plano Ideal para Você</h2>
                    <p className="text-zinc-500 text-lg text-balance">Investimento na sua saúde e autoestima.</p>
                </FadeIn>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {services.map((service, idx) => (
                    <StaggerItem key={idx}>
                        <div className={cn(
                            "group relative h-full bg-zinc-50 rounded-[2rem] p-6 md:p-8 transition-all duration-300 border-2",
                            "hover:border-[#D9F347] hover:shadow-card-hover text-left flex flex-col",
                            "hover:-translate-y-2",
                            service.featured ? "border-zinc-200 shadow-md" : "border-transparent"
                        )}>
                            {service.featured && (
                                <div className="absolute top-0 right-0 bg-[#D9F347] text-black text-[10px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-bl-xl md:rounded-bl-2xl rounded-tr-xl md:rounded-tr-2xl flex items-center gap-1 uppercase tracking-wider">
                                    <Star className="w-3 h-3 fill-black" />
                                    {service.badge}
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight pr-12">{service.title}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-xl md:text-2xl font-bold">{service.price}</span>
                                    {service.period && <span className="text-zinc-500 font-medium text-xs tracking-tight">{service.period}</span>}
                                </div>
                                <p className="text-zinc-500 mt-2 text-sm leading-relaxed text-pretty">{service.description}</p>
                            </div>

                            <div className="space-y-3 mb-8 flex-grow">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={cn(
                                            "w-5 h-5 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                            service.featured ? "bg-black text-[#D9F347]" : "bg-[#D9F347]/20 text-black"
                                        )}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-zinc-700 text-sm md:text-[15px] leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`https://wa.me/5513991000082?text=${service.waMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <button className={cn(
                                    "w-full py-3 md:py-3.5 rounded-full font-bold text-sm transition-all uppercase tracking-widest",
                                    service.featured
                                        ? "bg-[#D9F347] text-black hover:bg-[#D9F347]/80 shadow-button-glow"
                                        : "bg-white border border-zinc-200 text-black hover:border-black hover:bg-black hover:text-white"
                                )}>
                                    Agendar Agora
                                </button>
                            </a>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    )
}

