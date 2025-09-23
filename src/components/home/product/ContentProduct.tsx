"use client"
import ImageWithFallback from '@/components/image/ImageWithCallBack';
import useResponseProductCount from '@/hooks/mobile/useResponseProductCount';
import { useGetProductByCAtegory } from '@/hooks/product/useGetProductByCategory';
import { Product } from '@/types/product';
import { Card } from 'antd';
import React from 'react'
interface Props {
    id: string
}
export default function ContentProduct( props: Props ) {
    const id = props.id
    const page = 0;
    const size = 10
    const visibleCount = useResponseProductCount()
    const {
        ResponseProductByCategory,
        isLoadingGetProductByCategory,
        ErrorGetProductByCategory
    } = useGetProductByCAtegory(id, page, size)

    if(ErrorGetProductByCategory) return null;
    if(!ResponseProductByCategory?.data?.content || ResponseProductByCategory.data.content.length === 0 ) {
        return null;
    }

    const dataProduct = ResponseProductByCategory.data.content || ([] as Product[])

    if(dataProduct.length < 5) return null;

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 no-scrollbar gap-3 pt-2 mx-auto">
                {dataProduct.slice(0,visibleCount).map((prod) => (
                    <Card
                      key={prod.id}
                      className="relative flex flex-col p-3 bg-white rounded-[8px] flex-shrink-0 shadow transition-all duration-500 group product-card"
                      hoverable
                      style={{ borderRadius: 8, margin: 8 }}
                    //   onClick={() => handleNavigateProduct(prod.id)}
                    >
                      <div className="relative h-[160px] w-full rounded-[8px] overflow-hidden mx-auto">
                        <ImageWithFallback
                          className="w-full h-full object-cover transition-transform duration-300 ease-in-out rounded-[5px]"
                          src={prod?.imageUrls?.[0] || ""}
                          alt={prod.name}
                          fill
                        />
                        {prod.flashSale && (
                          <div className="text-white bg-red-600 absolute top-0 left-0 py-[5px] px-3 rounded-[5px] z-999 flex gap-[2px] items-center">
                            <b>Flash sale</b>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" />
{/* 
                        {prod.availableQuantity !== 0 && (
                          <button
                            className="absolute bottom-0 left-0 w-full bg-[#fa7833] text-white py-2 font-semibold opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-10 flex gap-2 justify-center cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddCart(userId!, false, prod.id, 1);
                            }}
                            disabled={loadingProductId === prod.id}
                          >
                            <ShoppingCartOutlined />{" "}
                            {loadingProductId === prod.id ? "Đang thêm..." : "Giỏ hàng"}
                          </button>
                        )} */}
                      </div>
   
                        <p className="text-[16px] font-bold line-clamp-2 text-black truncate mt-2">
                          {prod.name}
                        </p>
                        <p className="text-[16px] line-clamp-2 text-gray-400 truncate">
                          Mã:{prod.code}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-[14px] text-gray-400">
                            Số lượng: {prod.inventory.available}
                          </p>
                          {/* {prod.availableQuantity === 0 && (
                            <p className="text-red-600 font-bold">Hết hàng</p>
                          )} */}
                        </div>
                      <div className="py-1">
                        {prod.flashSale ? (
                          <>
                            <p className="text-gray-500 line-through text-[14px]">
                              {(prod.pricing.originalPrice || 0).toLocaleString()} VNĐ
                            </p>
                            <p className="text-[#fa7833] text-[18px] font-bold">
                              {(prod.pricing.currentPrice || 0).toLocaleString()} VNĐ
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="h-[20px]"></div>
                            <div className="text-[#fa7833] text-[18px] font-bold">
                              {prod.pricing.currentPrice.toLocaleString()} VNĐ
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
