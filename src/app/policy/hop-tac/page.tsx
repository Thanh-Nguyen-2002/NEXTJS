const Cooperation = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Hợp Tác Cùng Chúng Tôi
            </h1>

            <div className="space-y-8">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Cơ hội hợp tác
                    </h2>
                    <p>
                        CODEC Travel luôn chào đón các đối tác trong và ngoài nước cùng tham
                        gia phát triển ngành du lịch Việt Nam. Chúng tôi mong muốn tạo ra các
                        giá trị bền vững thông qua những chương trình hợp tác đa dạng và hiệu
                        quả.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Hình thức hợp tác
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-semibold">Liên kết tour:</span> phối hợp xây
                            dựng và triển khai các tour nội địa, quốc tế.
                        </li>
                        <li>
                            <span className="font-semibold">Đại lý phân phối:</span> phân phối
                            sản phẩm tour của CODEC Travel tới khách hàng.
                        </li>
                        <li>
                            <span className="font-semibold">Dịch vụ hỗ trợ:</span> cung cấp vận
                            chuyển, lưu trú, nhà hàng hoặc trải nghiệm du lịch.
                        </li>
                        <li>
                            <span className="font-semibold">Truyền thông & Marketing:</span>{" "}
                            cùng quảng bá thương hiệu, sự kiện và chương trình khuyến mãi.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền lợi đối tác
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Được hỗ trợ truyền thông trên hệ thống của CODEC Travel.</li>
                        <li>
                            Chính sách chiết khấu, hoa hồng cạnh tranh và minh bạch.
                        </li>
                        <li>
                            Tham gia các chương trình quảng bá du lịch trong nước & quốc tế.
                        </li>
                        <li>
                            Xây dựng quan hệ hợp tác lâu dài, cùng phát triển bền vững.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Liên hệ hợp tác
                    </h2>
                    <p>
                        Nếu Quý đối tác quan tâm, vui lòng gửi email tới{" "}
                        <a
                            href="mailto:contact@codec.com"
                            className="text-orange-600 font-semibold hover:underline"
                        >
                            contact@codec.com
                        </a>{" "}
                        hoặc liên hệ hotline{" "}
                        <a
                            href="tel:09637600289"
                            className="text-orange-600 font-semibold hover:underline"
                        >
                            0963 760 0289
                        </a>{" "}
                        để được tư vấn chi tiết.
                    </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="text-center font-semibold text-orange-600">
                        CODEC Travel cam kết mang đến sự hợp tác minh bạch, chuyên nghiệp và
                        đôi bên cùng có lợi.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Cooperation;
