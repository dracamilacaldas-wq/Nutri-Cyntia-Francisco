import React from "react"
import { motion } from "motion/react"

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    className?: string
    direction?: "up" | "down" | "left" | "right" | "none"
    blur?: boolean
    scale?: boolean
    duration?: number
}

export const FadeIn: React.FC<FadeInProps> = ({
    children,
    delay = 0,
    className = "",
    direction = "up",
    blur = true,
    scale = false,
    duration = 0.5
}) => {
    const getInitial = () => {
        const initial: Record<string, string | number> = { opacity: 0 }

        if (direction === "up") initial.y = 40
        if (direction === "down") initial.y = -40
        if (direction === "left") initial.x = 40
        if (direction === "right") initial.x = -40

        if (blur) initial.filter = "blur(10px)"
        if (scale) initial.scale = 0.95

        return initial
    }

    const getTarget = () => {
        const target: Record<string, string | number> = { opacity: 1, x: 0, y: 0 }

        if (blur) target.filter = "blur(0px)"
        if (scale) target.scale = 1

        return target
    }

    return (
        <motion.div
            initial={getInitial()}
            whileInView={getTarget()}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.4, 0.25, 1], // Modern ease-out-quart-ish
                type: "spring",
                stiffness: 100,
                damping: 20
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerContainer: React.FC<{ children: React.ReactNode, className?: string, delay?: number }> = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.1, delayChildren: delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerItem: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
