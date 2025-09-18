"use client";

import {
    EnvironmentOutlined,
    PhoneOutlined,
    MailOutlined,
    ClockCircleOutlined,
    FacebookOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const contactItems = [
    {
        icon: <EnvironmentOutlined />,
        title: "Địa chỉ",
        text: "Tầng 8, tòa nhà 3A, số 3 ngõ 82 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        href: "https://maps.app.goo.gl/8MScKhzeDhoi4Fje8",
        target: "_blank",
    },
    {
        icon: <PhoneOutlined />,
        title: "Điện thoại",
        text: "0963 760 0289",
        href: "tel:09637600289",
    },
    {
        icon: <MailOutlined />,
        title: "Email",
        text: "contact@codec.com",
        href: "mailto:contact@codec.com",
    },
    {
        icon: <ClockCircleOutlined />,
        title: "Giờ làm việc",
        text: "Thứ 2 - Chủ nhật: 8h30 - 21h30",
    },
];

export default function ContactPage() {
    return (
        <section className="max-w-[1400px] mx-auto px-4 py-16">

            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
                    Liên Hệ Với CODEC TRAVEL
                </h1>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Mọi thắc mắc, yêu cầu hỗ trợ hoặc hợp tác xin vui lòng liên hệ với
                    chúng tôi. Codec Travel luôn sẵn sàng đồng hành cùng bạn trên mọi hành
                    trình.
                </p>
            </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
                {contactItems.map((item, i) => (
                    <div
                        key={i}
                        className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <span className="text-orange-500 text-2xl">{item.icon}</span>
                        <div>
                            <p className="font-semibold text-blue-900">{item.title}</p>
                            {item.href ? (
                                <a
                                    href={item.href}
                                    target={item.target ?? "_self"}
                                    rel={
                                    item.target === "_blank"
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                    className="text-gray-600 hover:text-orange-500 transition"
                                >
                                    {item.text}
                                </a>
                            ) : (
                                <p className="text-gray-600">{item.text}</p>
                            )}
                        </div>
                    </div>
                ))}

                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 text-blue-900">
                        Kết nối với chúng tôi
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="https://zalo.me"
                            target="_blank"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Chat Zalo
                        </Link>
                        <Link
                            href="https://m.me/codec"
                            target="_blank"
                            className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
                        >
                            Messenger
                        </Link>
                        <Link
                            href="https://facebook.com/codec"
                            target="_blank"
                            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition flex items-center gap-2"
                        >
                            <FacebookOutlined /> Facebook
                        </Link>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-md py-7 px-5 border border-gray-100">
                    <h2 className="text-xl font-semibold mb-6 text-blue-900">
                        Gửi thông tin liên hệ
                    </h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Số điện thoại"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <textarea
                            rows={6}
                            placeholder="Nội dung liên hệ..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition font-semibold w-full"
                        >
                            Gửi ngay
                        </button>
                    </form>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md mt-15">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.835284410229!2d105.78124831473123!3d21.037963792855894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab390f6a91e5%3A0x6ddf5bb0c1bc6b0f!2zMyBOZ-G6oWkgODIgRHXhu5kgVMOgbiwgROG7i2NoIFbDtG5nIEjhuq11LCBD4bqndSBHaeG6o2ksIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1673612345678!5m2!1svi!2s"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    >
                    </iframe>
                </div>
            </div>
        </div>
        </section>
    );
}
