"use client"
import { DollarCircleOutlined, EnvironmentOutlined, SendOutlined, StarOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";

const TextInfo = () => {
    const list = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.4 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="max-w-[1400px] mx-auto p-3">
            <div className="bg-white py-10 px-4 md:px-10 rounded-lg shadow-md mt-[-50px] relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold text-blue-900 mb-2"
                >
                    CODEC TRAVEL
                </motion.h2>

                <motion.p
                    initial={{ width: 0 }}
                    animate={{ width: "max-content" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="text-orange-600 mb-5 overflow-hidden whitespace-nowrap border-r-4 border-orange-500 pr-1"
                >
                    Khám phá Việt Nam – Trải nghiệm trọn vẹn cùng Codec Travel
                </motion.p>

                <motion.ul
                    variants={list}
                    initial="hidden"
                    animate="show"
                    className="text-gray-700 grid md:grid-cols-2 gap-3 mb-6"
                >
                    <motion.li variants={item} className="flex items-center gap-2">
                        <SendOutlined className="!text-orange-500" /> Khởi hành hàng ngày
                    </motion.li>
                    <motion.li variants={item} className="flex items-center gap-2">
                        <EnvironmentOutlined className="!text-orange-500" /> 
                        Đa dạng điểmđến từ Bắc vào Nam
                    </motion.li>
                    <motion.li variants={item} className="flex items-center gap-2">
                        <DollarCircleOutlined className="!text-orange-500" /> 
                        Giá tour trọn gói – không phát sinh
                    </motion.li>
                    <motion.li variants={item} className="flex items-center gap-2">
                        <StarOutlined className="!text-orange-500" /> 
                        Dịch vụ chuyên nghiệp & tận tâm
                    </motion.li>
                </motion.ul>

                <div className="flex gap-4">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 15px rgba(255,140,0,0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold cursor-pointer"
                    >
                        <Link href="/tour">Đặt Tour Ngay</Link>
                    </motion.button>
                    <Link
                        href="/contact"
                        className="border border-orange-500 text-orange-500 px-5 content-center rounded-md font-semibold hover:bg-orange-50 transition"
                    >
                        Liên hệ tư vấn
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default TextInfo;
