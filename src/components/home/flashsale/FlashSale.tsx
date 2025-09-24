import ImageWithFallback from "@/components/image/ImageWithCallBack";
import { getFlashSale } from "@/services/flashsale/flashsaleService"
import { Flame } from "lucide-react";
import Link from "next/link";
import FlipCountdown from "./FlipCountdown";
import { type FlashSale} from "@/types/flashsale";

export default async function FlashSale() {
    const page = 0;
    const size = 10
    const flashsale = await getFlashSale(page, size)

    if(!flashsale?.data?.content  || flashsale.data.content.length === 0 ) {
        return null;
    }

    const dataFlashSale = flashsale.data.content.find(items => items.active === true) || ( {} as FlashSale)

    if(!dataFlashSale?.id)  return null;

    const nearestEndTime = dataFlashSale.endTime

    if(nearestEndTime && new Date(nearestEndTime) < new Date()) return null;

    return (
        <div className=' p-5'>
            <div className="max-w-[1400px] mx-auto rounded-[8px] pb-2 group">
                <div className="relative">
                    <div className="mx-auto text-center content-center">

                        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-3 md:gap-4 py-6">

                            <h1 className="text-center md:text-left text-3xl md:text-4xl font-extrabold leading-tight">
                                <span
                                    className="bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 
                                            bg-clip-text text-transparent 
                                            drop-shadow-[0_0_5px_rgba(255,140,0,0.8)]
                                            drop-shadow-[0_0_15px_rgba(255,80,0,0.6)]
                                            drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]
                                            animate-gradient"
                                >
                                    FLASH SALE SIÊU KHỦNG
                                </span>
                            </h1>

                            <div className="shrink-0">
                                <div className="inline-flex items-center gap-2 rounded-[8px] bg-black/35 backdrop-blur px-3 py-2 md:px-4 md:py-2.5 ring-1 ring-white/15 shadow">
                                    <span className="hidden md:inline text-xs uppercase tracking-wider text-white/85 font-semibold">
                                        Kết thúc trong
                                    </span>
                                    <div className="scale-95 md:scale-100">
                                        <FlipCountdown endTime={nearestEndTime} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-xl md:text-2xl font-extrabold text-black">
                                GIẢM GIÁ LÊN ĐẾN <span className="text-orange-400">80%</span>
                            </p>
                            <p className="mt-2 text-base sm:text-lg md:text-xl font-medium text-black/90">
                                Cơ hội vàng trong năm — đừng bỏ lỡ
                            </p>
                        </div>

                    </div>
                </div>

                    <div className='mt-5'>

                            <div key={dataFlashSale.id} className='grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300'> 
                                {dataFlashSale.products.slice(0,6).map((p) => (
                                    <div 
                                        key={p.productId} 
                                        className="p-2 rounded-[5px] group/image cursor-pointer shadow border border-gray-200 bg-gray-100 grid grid-cols-2 gap-2"
                                        
                                    >
                                        <div className="rounded-[5px] relative overflow-hidden h-36 md:h-42 w-full">
                                            <ImageWithFallback
                                                className="hover:cursor-pointer object-cover transition-transform duration-300 rounded-[5px]
                                                            ease-in-out"
                                                src={p?.imageUrl?.[0]}
                                                alt={p.name}
                                                fill
                                                // onClick={() => handleNavigateProduct(p.productId)}
                                            />
                                        </div>
                                        <div className="">
                                            <div 
                                                // onClick={() => handleNavigateProduct(p.productId)}
                                            >
                                                <div className='flex items-center gap-15 text-[12px]'>
                                                    <p className='text-[#777] truncate'>Mã: {p.code}</p>
                                                </div>
                                                <b className='text-[16px] font-bold line-clamp-1 text-black'>
                                                    {p.name}
                                                </b>
                                            </div>
                                            <div className="py-1">
                                                <div className="text-red-600 text-[16px]">
                                                    <p className="hidden xl:inline text-[12px] line-through text-gray-400">
                                                        {(p.originalPrice || 0).toLocaleString()} VNĐ
                                                    </p>
                                                    <p className='font-bold'>{(p.flashPrice || 0 ).toLocaleString()} VNĐ</p>
                                                        
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <p className='text-[14px] line-clamp-2 text-gray-400 flex-1'>
                                                    Còn lại: {p.availableQuantity} sản phẩm
                                                </p>
                                                {p.availableQuantity === 0 && (
                                                    <p className='text-red-600 font-bold'>Hết hàng</p>
                                                )}
                                            </div>
                                            {/* <div className="my-2">
                                                <Button
                                                    className="bg-[#fa7833]! text-white! flex! items-center! justify-center! w-full h-10! hover:border-[#fa7833]!"
                                                    onClick={() => handleAddCart(userId!, false, p.productId, 1)}
                                                    disabled={loadingProductId === p.productId}
                                                    loading={loadingProductId === p.productId}
                                                >
                                                    <ShoppingCartOutlined /> Giỏ hàng
                                                </Button>
                                            </div> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        {/* ))} */}
                    </div>

                <div className="py-4">
                    <div className="mx-auto text-center">

                        <p className="text-black mt-2 text-base">
                            Hàng ngàn sản phẩm khác đang được giảm giá cực sốc!
                        </p>

                        <div
                            className='mx-auto w-[300px] h-[50px] text-center rounded-[8px] font-bold mt-3
                                    hover:cursor-pointer font-blod text-[18px] content-center bg-black text-yellow-400 hover:border hover:border-orange-500'
                        >
                            <Link
                                href={'/product-sale'}
                                className='flex! justify-center! items-center! gap-3!'
                            >
                                XEM TẤT CẢ FLASH SALE
                                <Flame className="w-5 h-5 text-red-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
