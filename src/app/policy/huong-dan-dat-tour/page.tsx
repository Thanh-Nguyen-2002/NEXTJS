const BookingGuide = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Hướng Dẫn Đặt Tour
            </h1>

            <div className="space-y-8">

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Bước 1: Tìm kiếm tour
                    </h2>
                    <p>
                        Quý khách có thể truy cập website <span className="font-semibold">codec.com</span> 
                        để tìm kiếm tour theo điểm đến, thời gian hoặc mức giá phù hợp.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Bước 2: Lựa chọn tour
                    </h2>
                    <p>
                        Sau khi tìm được tour mong muốn, hãy xem chi tiết lịch trình, giá tour 
                        và các dịch vụ đi kèm để đảm bảo phù hợp với nhu cầu của Quý khách.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Bước 3: Đặt tour
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Click vào nút <span className="font-semibold">“Đặt tour”</span>.</li>
                        <li>Điền đầy đủ thông tin cá nhân và thông tin liên hệ.</li>
                        <li>Xác nhận số lượng khách, ngày khởi hành và các dịch vụ bổ sung (nếu có).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Bước 4: Thanh toán
                    </h2>
                    <p>
                        Quý khách có thể lựa chọn các phương thức thanh toán: 
                        <span className="font-semibold"> chuyển khoản ngân hàng, ví điện tử hoặc thanh toán trực tiếp tại văn phòng CODEC Travel</span>.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Bước 5: Xác nhận & khởi hành
                    </h2>
                    <p>
                        Sau khi hoàn tất thanh toán, CODEC Travel sẽ gửi email/SMS xác nhận. 
                        Quý khách vui lòng giữ lại thông tin xác nhận để làm thủ tục trước chuyến đi.
                    </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="text-center font-semibold text-orange-600">
                        CODEC Travel luôn đồng hành cùng Quý khách trong mọi hành trình, mang lại trải nghiệm an toàn và đáng nhớ.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BookingGuide;
