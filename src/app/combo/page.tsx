import React from "react";

export default function ComboPage() {
    
    const combos = [
        {
            id: "1",
            nameCombo: "Combo Laptop + Chuột + Balo",
            description: "Trang bị đầy đủ cho học tập và làm việc, tối ưu cho năng suất và sự tiện lợi di động. Đa nhiệm mượt mà, thoải mái di chuyển.",
            imageUrl:
                "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cải thiện URL để có chất lượng tốt hơn
            price: 15500000,
            originalTotalPrice: 18500000,
            discountPercentage: 16,
            products: [
                {
                    productId: "101",
                    productName: "Laptop Dell XPS 13",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=300&auto=format&fit=crop&q=80",
                    ],
                },
                {
                    productId: "102",
                    productName: "Chuột Logitech MX Master 3",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1587574293440-d9a02dab03ef?w=300&auto=format&fit=crop&q=80",
                    ],
                },
                {
                    productId: "103",
                    productName: "Balo Laptop Cao Cấp",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&auto=format&fit=crop&q=80",
                    ],
                },
            ],
        },
        {
            id: "2",
            nameCombo: "Combo Gaming Gear",
            description: "Đắm chìm vào thế giới game với bộ gear chuyên nghiệp: chuột siêu tốc, bàn phím cơ phản hồi nhanh, tai nghe âm thanh vòm sống động.",
            imageUrl:
                "https://images.unsplash.com/photo-1587202372775-98927b5a89ae?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 4500000,
            originalTotalPrice: 6000000,
            discountPercentage: 25,
            products: [
                {
                    productId: "201",
                    productName: "Chuột Razer DeathAdder V2",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1587202372775-98927b5a89ae?w=300&auto=format&fit=crop&q=80",
                    ],
                },
                {
                    productId: "202",
                    productName: "Bàn phím cơ Corsair K70 RGB",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1616886470008-01185038c350?w=300&auto=format&fit=crop&q=80",
                    ],
                },
                {
                    productId: "203",
                    productName: "Tai nghe HyperX Cloud II",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1606813902769-83d53de1d3f9?w=300&auto=format&fit=crop&q=80",
                    ],
                },
            ],
        },
        {
            id: "3",
            nameCombo: "Combo Văn Phòng Thiết Yếu",
            description: "Nâng cấp không gian làm việc với màn hình chất lượng cao, bàn phím êm ái và chuột không dây tiện lợi. Hiệu quả tối đa, thoải mái cả ngày.",
            imageUrl:
                "https://images.unsplash.com/photo-1511216124504-f58356c39edb?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 8990000,
            originalTotalPrice: 10500000,
            discountPercentage: 15,
            products: [
                {
                    productId: "301",
                    productName: "Màn hình Dell UltraSharp",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1598586927575-b6d806540c49?w=300&auto=format&fit=crop&q=80",
                    ],
                },
                {
                    productId: "302",
                    productName: "Bàn phím cơ Dareu EK87",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1616886470008-01185038c350?w=300&auto=format&fit=crop&q=80",
                    ],
                },
                {
                    productId: "303",
                    productName: "Chuột không dây Xiaomi",
                    productImageUrl: [
                        "https://images.unsplash.com/photo-1596767746738-f86a23363403?w=300&auto=format&fit=crop&q=80",
                    ],
                },
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 bg-gray-50"> {/* Nền nhẹ nhàng hơn */}
        {/* Tiêu đề trang */}
            <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 leading-tight">
                🎁 Combo Ưu Đãi Đặc Biệt <br className="sm:hidden"/> <span className="text-indigo-600">Đừng Bỏ Lỡ!</span>
            </h1>

            {/* Grid combo */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {combos.map((combo) => (
                    <div
                        key={combo.id}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden border border-gray-100"
                    >
                        {/* Tag combo và giảm giá */}
                        <div className="absolute top-0 left-0 right-0 flex justify-between p-4 z-10">
                            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                {/* <FaTag className="w-3 h-3"/> { /* Icon tùy chọn */} COMBO
                            </span>
                            <span className="bg-red-500 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-md animate-pulse">
                                -{combo.discountPercentage}%
                            </span>
                        </div>

                        {/* Ảnh chính */}
                        <div className="h-56 overflow-hidden rounded-t-3xl">
                            <img
                                src={combo.imageUrl}
                                alt={combo.nameCombo}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>


                        {/* Nội dung */}
                        <div className="p-5 flex flex-col justify-between h-[calc(100%-14rem)]"> {/* Điều chỉnh chiều cao cho nội dung */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
                                    {combo.nameCombo}
                                </h2>
                                <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                                    {combo.description}
                                </p>

                                {/* Danh sách sản phẩm nhỏ */}
                                <p className="text-gray-500 text-xs mt-4 mb-2 font-medium">Sản phẩm trong combo:</p>
                                <div className="flex gap-2 justify-center flex-wrap"> {/* Căn giữa và bọc hàng */}
                                    {combo.products.map((p) => (
                                    <img
                                        key={p.productId}
                                        src={p.productImageUrl[0]}
                                        alt={p.productName}
                                        title={p.productName}
                                        className="w-14 h-14 object-cover rounded-lg border border-gray-200 shadow-sm hover:border-indigo-400 hover:scale-105 transition"
                                    />
                                    ))}
                                </div>
                            </div>

                            {/* Giá */}
                            <div className="mt-6 border-t pt-4 border-gray-100">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-extrabold text-indigo-700">
                                        {combo.price.toLocaleString()}₫
                                    </span>
                                    <span className="text-base line-through text-gray-400">
                                        {combo.originalTotalPrice.toLocaleString()}₫
                                    </span>
                                </div>
                                <p className="text-sm text-green-600 font-semibold mt-1">
                                    Tiết kiệm {combo.discountPercentage}% khi mua combo này!
                                </p>
                            </div>

                            {/* Button */}
                            <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                Xem chi tiết combo {/* <FaArrowRight className="w-4 h-4"/> { /* Icon tùy chọn */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}