"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    initial={{ opacity: 0, y: 100, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.7 }}
                    transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 18,
                    }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="
            group
            fixed bottom-6 right-6 z-50
            p-3
            rounded-full
            bg-slate-900/70
            backdrop-blur-xl
            border border-white/10
            shadow-[0_8px_30px_rgb(0,0,0,0.25)]
            hover:bg-amber-600
            transition-colors duration-300
            active:scale-95
            cursor-pointer
          "
                >
                    <Rocket
                        size={22}
                        className="
                        -rotate-45
                        text-white
                        transition-transform duration-300
                        group-hover:-translate-y-1
            "
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}