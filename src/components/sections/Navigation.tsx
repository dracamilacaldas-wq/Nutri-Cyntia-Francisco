import Logo from "@/assets/logo-cyntia.svg"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#services" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Localização", href: "#locations" },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav className="relative flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-sm">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Nutri Cyntia Francisco" className="h-8 md:h-9 w-auto" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a
                        href="https://wa.me/5513991000082?text=Olá,%20Cyntia!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="dark" className="bg-black text-white hover:bg-black/80 rounded-full px-6 shadow-none">
                            Agendar Consulta
                        </Button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-4 p-6 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-2xl flex flex-col gap-4 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-gray-800 py-2 border-b border-gray-100 last:border-0"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5513991000082?text=Olá,%20Cyntia!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-2"
                            >
                                <Button variant="secondary" className="w-full bg-[#D9F347] text-black font-bold h-12 rounded-full shadow-none">
                                    Agendar Consulta
                                </Button>
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    )
}
