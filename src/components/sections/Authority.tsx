import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn"
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react"
import { Award, Users, Utensils } from "lucide-react"
import { useEffect, useRef } from "react"

function Counter({ value }: { value: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);

    // Parse the number from strings like "+10", "+500", "100%"
    const numericValue = parseInt(value.replace(/\D/g, ""));
    const prefix = value.startsWith("+") ? "+" : "";
    const suffix = value.endsWith("%") ? "%" : "";

    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericValue, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, numericValue, count]);

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

export function Authority() {
    const stats = [
        {
            value: "+10",
            label: "Anos de Experiência",
            description: "Transformando vidas através da nutrição consciente.",
            icon: Award
        },
        {
            value: "+500",
            label: "Pacientes Atendidos",
            description: "Resultados reais com acolhimento e ciência.",
            icon: Users
        },
        {
            value: "100%",
            label: "Focado em Você",
            description: "Estratégias que se adaptam à sua rotina real.",
            icon: Utensils
        }
    ];

    return (
        <section id="sobre" className="py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
                    {/* Left Side: Content */}
                    <div className="lg:w-5/12 space-y-8 lg:sticky lg:top-32">
                        <FadeIn>
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#D9F347]/20 text-[#2C2C2C] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border border-[#D9F347]/30">
                                    Sobre Mim
                                </span>
                                <h2 className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-heading leading-[1.1] lg:leading-[0.95]">
                                    Pronto para a sua <br />
                                    <span className="text-zinc-400 uppercase md:normal-case">melhor versão?</span>
                                </h2>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                                <p className="text-pretty">
                                    Olá, sou <motion.span
                                        whileHover={{ color: "#000", scale: 1.05 }}
                                        className="inline-block font-bold text-black border-b-2 border-[#D9F347] cursor-default transition-colors"
                                    >
                                        Cyntia Francisco
                                    </motion.span>. Minha missão é desmistificar a nutrição e mostrar que é possível alcançar seus objetivos — seja emagrecimento, hipertrofia ou performance — sem sacrificar o prazer de comer.
                                </p>

                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-6 rounded-2xl bg-zinc-50 border-l-4 border-[#D9F347] relative group hover:bg-white hover:shadow-xl transition-all duration-500"
                                >
                                    <p className="text-zinc-500 italic relative z-10 text-pretty group-hover:text-black transition-colors">
                                        "Com uma abordagem baseada em ciência e empatia, crio estratégias que se adaptam à sua rotina, não o contrário."
                                    </p>
                                </motion.div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Side: Stats Cards */}
                    <div className="lg:w-7/12 w-full">
                        <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <StaggerItem key={idx} className={idx === 2 ? "sm:col-span-2" : ""}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="group relative h-full"
                                    >
                                        <div className="relative p-8 rounded-[2.5rem] bg-zinc-50 border border-transparent hover:border-[#D9F347]/40 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(217,243,71,0.15)] h-full flex flex-col justify-between overflow-hidden">
                                            {/* Glow effect on hover */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9F347]/0 group-hover:bg-[#D9F347]/5 blur-3xl rounded-full transition-all duration-700" />

                                            <div className="space-y-6 relative z-10">
                                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D9F347] group-hover:rotate-6 transition-all duration-500">
                                                    <stat.icon className="w-7 h-7 text-black transition-colors" strokeWidth={2} />
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex flex-col">
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.5 + idx * 0.1 }}
                                                            className="text-5xl font-black text-black tracking-tighter leading-none mb-2"
                                                        >
                                                            <Counter value={stat.value} />
                                                        </motion.div>
                                                        <span className="text-xs font-black text-zinc-400 uppercase tracking-[0.15em]">{stat.label}</span>
                                                    </div>
                                                    <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-700 transition-colors">
                                                        {stat.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}
