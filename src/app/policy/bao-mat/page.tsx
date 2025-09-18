const Security = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Chính Sách Bảo Mật
            </h1>

            <div className="space-y-8">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Mục đích thu thập thông tin
                    </h2>
                    <p>
                        CODEC thu thập dữ liệu cá nhân của Quý khách nhằm mục đích hỗ trợ đặt
                        tour, cung cấp dịch vụ chăm sóc khách hàng và cải thiện trải nghiệm
                        người dùng trên website.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Phạm vi sử dụng thông tin
                    </h2>
                    <p>
                        Các thông tin được cung cấp chỉ được dùng trong phạm vi quản lý nội
                        bộ, chăm sóc khách hàng và cung cấp dịch vụ du lịch. CODEC cam kết
                        không bán, chia sẻ hoặc trao đổi dữ liệu cá nhân cho bên thứ ba khi
                        chưa được sự đồng ý của Quý khách.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Thời gian lưu trữ thông tin
                    </h2>
                    <p>
                        Thông tin cá nhân của Quý khách sẽ được lưu trữ trong hệ thống của
                        CODEC cho đến khi Quý khách yêu cầu hủy bỏ hoặc CODEC ngừng hoạt động
                        website này.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền của khách hàng
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Kiểm tra, cập nhật và điều chỉnh dữ liệu cá nhân của mình.</li>
                        <li>
                            Yêu cầu CODEC ngừng sử dụng hoặc hủy bỏ dữ liệu cá nhân bất kỳ lúc nào.
                        </li>
                        <li>
                            Gửi khiếu nại về việc dữ liệu cá nhân bị sử dụng sai mục đích.
                        </li>
                    </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="text-center font-semibold text-orange-600">
                        CODEC cam kết bảo mật tuyệt đối thông tin cá nhân của Quý khách, tuân thủ theo pháp luật Việt Nam.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Security;
