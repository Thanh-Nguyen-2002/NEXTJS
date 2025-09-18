"use client"
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, SendOutlined } from "@ant-design/icons"
import { BookOpen, FileText, Handshake, Shield } from "lucide-react";

import Link from "next/link";

const LayoutFooter = () => {

    const contactItems = [
        {
            icon: <EnvironmentOutlined />,
            text: "Tầng 8 tòa nhà 3A, số 3 ngõ 82 Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội, Việt Nam",
            href: "https://maps.app.goo.gl/8MScKhzeDhoi4Fje8",
            target: "_blank",
        },
        {
            icon: <PhoneOutlined />,
            text: "09637600289",
            href: "tel:09637600289",
        },
        {
            icon: <MailOutlined />,
            text: "contact@codec.com",
            href: "mailto:contact@codec.com",
        },
    ];

    return (
        <footer className="bg-[#0D1117] text-gray-300 text-[15px]">
            <div
                className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 py-10"
            >

                <div>
                    <div className="font-bold text-[22px] text-white mb-3">
                        <span className="text-orange-500">Codec</span>
                    </div>
                    <p className="text-gray-400">
                        Nền tảng mua sắm trực tuyến hàng đầu Việt Nam với hàng triệu sản phẩm
                        chất lượng, giá cả hợp lý và dịch vụ tận tâm.
                    </p>
                </div>


                <div className="">
                    <div className="font-bold text-lg text-white mb-3 flex gap-2 items-center">
                        <FileText  className="!text-orange-500" size={20}/><span className="text-orange-500">Các chính sách</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link href="/policy/chinh-sach-chung" className="hover:text-orange-500 transition cursor-pointer flex gap-1 items-center">
                            <FileText  className="!text-orange-500" size={18}/> Chính sách chung
                        </Link>
                        <Link href="/policy/bao-mat" className="hover:text-orange-500 transition cursor-pointer flex gap-1 items-center">
                            <Shield size={18} className="!text-orange-500"/> Chính sách bảo mật
                        </Link>
                        <Link href="/policy/huong-dan-dat-tour" className="hover:text-orange-500 transition cursor-pointer flex gap-1 items-center">
                            <BookOpen size={18} className="!text-orange-500"/> Hướng dẫn đặt tour
                        </Link>
                        <Link href="/policy/hop-tac" className="hover:text-orange-500 transition cursor-pointer flex gap-1 items-center">
                            <Handshake size={18} className="!text-orange-500"/> Hợp tác cùng chúng tôi
                        </Link>
                    </div>
                    
                </div>


                <div>
                    <div className="flex items-center gap-2 font-bold text-lg text-orange-500 mb-3">
                        <EnvironmentOutlined /> Liên hệ
                    </div>

                    <div className="space-y-3">
                        {contactItems.map((item, i) => (
                            <div key={i} className="flex gap-2 items-start">
                            <span className="text-orange-500 mt-1">{item.icon}</span>
                            <a
                                href={item.href}
                                target={item.target ?? "_self"}
                                rel={
                                    item.target === "_blank" ? "noopener noreferrer" : undefined
                                }
                                className="hover:text-orange-500 transition"
                            >
                                {item.text}
                            </a>
                            </div>
                        ))}
                    </div>
                    

                    <div className="mt-4">
                        <label className="font-medium text-white block mb-2">
                            Đăng ký nhận tin khuyến mãi
                        </label>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Nhập email..."
                                className="px-3 py-2 rounded-l-md w-full bg-gray-800 text-white border border-gray-700 focus:outline-none"
                            />
                            <button className="bg-orange-500 px-4 rounded-r-md hover:bg-orange-600 transition">
                                <SendOutlined className="text-white" />
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            Nhận thông tin sale sớm nhất, ưu đãi độc quyền
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 py-3 text-center text-gray-500 text-sm flex flex-col sm:flex-row justify-between px-6">
                <p>© {new Date().getFullYear()} Codec. Tất cả quyền được bảo lưu.</p>
                <p>Made with ❤️ in Vietnam</p>
            </div>
        </footer>
    )
}
export default LayoutFooter