import { DollarCircleOutlined, EnvironmentOutlined, SendOutlined, StarOutlined } from "@ant-design/icons";
import Link from "next/link";

const TextInfo = () => {
    return (
        <div className="max-w-[1400px] mx-auto p-3">
            <div className="bg-white py-10 px-4 md:px-10 rounded-lg shadow-md mt-[-50px] relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                    CODEC TRAVEL
                </h2>

                <p className="text-orange-600 mb-5 border-r-4 border-orange-500 pr-1">
                    Khám phá Việt Nam – Trải nghiệm trọn vẹn cùng Codec Travel
                </p>

                <ul className="text-gray-700 grid md:grid-cols-2 gap-3 mb-6">
                    <li className="flex items-center gap-2">
                        <SendOutlined className="!text-orange-500" /> Khởi hành hàng ngày
                    </li>
                    <li className="flex items-center gap-2">
                        <EnvironmentOutlined className="!text-orange-500" /> 
                        Đa dạng điểm đến từ Bắc vào Nam
                    </li>
                    <li className="flex items-center gap-2">
                        <DollarCircleOutlined className="!text-orange-500" /> 
                        Giá tour trọn gói – không phát sinh
                    </li>
                    <li className="flex items-center gap-2">
                        <StarOutlined className="!text-orange-500" /> 
                        Dịch vụ chuyên nghiệp & tận tâm
                    </li>
                </ul>

                <div className="flex gap-4">
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold cursor-pointer">
                        <Link href="/tour">Đặt Tour Ngay</Link>
                    </button>
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
