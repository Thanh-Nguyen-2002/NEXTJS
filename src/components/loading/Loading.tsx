"use client";
import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[99999]">
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                }}
                className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"
            />
        </div>
    );
}
