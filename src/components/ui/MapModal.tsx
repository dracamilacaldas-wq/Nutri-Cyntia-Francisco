import { motion, AnimatePresence } from "motion/react"
import { X, MapPin, ArrowRight } from "lucide-react"
import { createPortal } from "react-dom"

interface MapModalProps {
    isOpen: boolean
    onClose: () => void
    location: {
        city: string
        address: string
        mapUrl: string
    } | null
}

export function MapModal({ isOpen, onClose, location }: MapModalProps) {
    if (!location) return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] cursor-pointer"
                    />

                    {/* Modal Wrapper for Centering */}
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            className="w-full max-w-3xl bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-zinc-100 relative pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 flex justify-between items-start bg-white z-10 relative">
                                <div className="flex gap-4 items-center">
                                    <div className="p-3 bg-black text-white rounded-full">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{location.city}</h3>
                                        <p className="text-zinc-600 font-medium">{location.address}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Map Container */}
                            <div className="w-full h-[300px] md:h-[400px] bg-zinc-100 relative">
                                <iframe
                                    src={location.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                />
                            </div>

                            {/* Footer / CTA */}
                            <div className="p-4 md:p-6 bg-zinc-50 border-t border-zinc-100 flex justify-end">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.address}, ${location.city}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-[#D9F347] hover:text-black transition-colors flex items-center gap-2 text-sm md:text-base"
                                >
                                    Abrir no Google Maps
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    )
}
