"use client"
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { aboutContent } from "@/data/about";

const tabs = [
    {
        key: "tam-nhin",
        label: "Tầm nhìn",
        content: `Trở thành đơn vị tổ chức tour du lịch trong nước uy tín hàng đầu Việt Nam, 
                đem lại trải nghiệm đáng nhớ và an toàn cho mọi du khách khi khám phá vẻ đẹp đất nước.`,
    },
    {
        key: "su-menh",
        label: "Sứ mệnh",
        content: `Kết nối du khách với những điểm đến đặc sắc từ Bắc vào Nam, 
                giúp quảng bá văn hóa, lịch sử và cảnh quan thiên nhiên của Việt Nam đến cộng đồng.`,
    },
    {
        key: "muc-tieu",
        label: "Mục tiêu",
        content: `Phát triển đa dạng các tour du lịch nội địa phù hợp với nhiều đối tượng khách hàng: 
                gia đình, doanh nghiệp, nhóm bạn trẻ; đồng thời đảm bảo chất lượng dịch vụ và giá cả hợp lý.`,
    },
    {
        key: "gia-tri",
        label: "Giá trị cốt lõi",
        content: `Chất lượng dịch vụ tận tâm – An toàn trong mọi chuyến đi – 
                Khám phá mới lạ – Đồng hành cùng du khách trên khắp miền đất Việt.`,
    },
    {
        key: "van-hoa",
        label: "Văn hóa",
        content: `Tôn vinh bản sắc văn hóa Việt Nam qua từng chuyến đi, 
                xây dựng tinh thần thân thiện, cởi mở và trách nhiệm trong phục vụ du khách.`,
    },
];

const AboutUs = () => {
    const [active, setActive] = useState("tam-nhin");

    return (
        <div className="pt-10">
            <section className="max-w-[1400px] mx-auto">
                <div className="flex items-center">
                    <div className="flex-1 h-[2px] w-full bg-gray-200 mr-5"></div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">GIỚI THIỆU VỀ CODEC TRAVEL - THƯƠNG HIỆU CHUẨN 100%</h1>
                    </div>
                    <div className="flex-1 h-[2px] w-full bg-gray-200 ml-5"></div>
                </div>
            </section>
            <section className="text-gray-800 py-10 px-6">
                <div className="max-w-5xl mx-auto space-y-6">
                    <div
                        dangerouslySetInnerHTML={{__html: aboutContent}}
                    />
                    
                </div>
            </section>
        
            <section className="bg-black text-white py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Câu Chuyện Về Codec
                        </h2>

                        <div className="flex flex-wrap gap-5 border-b border-gray-600 mb-6 text-sm md:text-base">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActive(tab.key)}
                                    className={`pb-2 font-semibold transition-colors cursor-pointer ${
                                        active === tab.key
                                        ? "text-orange-500 border-b-2 border-orange-500"
                                        : "hover:text-orange-400"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="min-h-[150px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-4 text-gray-200 leading-relaxed"
                                >
                                    {tabs
                                        .find((t) => t.key === active)
                                        ?.content.split("\n")
                                        .map((line, i) => (
                                            <p key={i}>{line}</p>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Image
                            src="/images/about_us.jpg"
                            alt="About us illustration"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                    
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
