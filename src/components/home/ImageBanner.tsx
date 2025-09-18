"use client"
import { motion } from "framer-motion"
import Image from "next/image"
const ImageBanner = () => {
    return (
        <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-[400px] md:h-[500px]"
        >
            <Image
                src="/images/about_us.jpg"
                alt="Vietnam Banner"
                fill
                className="object-cover"
                priority
            />
        </motion.div>
    )
}
export default ImageBanner
