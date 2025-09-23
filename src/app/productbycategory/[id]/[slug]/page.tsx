import ImageWithFallback from "@/components/image/ImageWithCallBack";
import { getAllCategory, getCategoryById } from "@/services/category/categoryService";
import { getProductByCategory } from "@/services/product/productService";
import { Button, Col, Form, Input, Row, Select } from "antd";
import { Tag } from "lucide-react";
import Link from "next/link";
type Prop = {
    params: { id: string; slug: string };
}
export default async function ProductByCategory({ params }: Prop) {
    // const productBycategory = await getProductByCategory()c
    const page = 0
    const size = 10
    const { id } = params
    if(!id) return(
        <div>
            ...Không tồn tại category...
        </div>
    )

    const responseCategoryDetail = await getCategoryById(id)
    const categoryDetail = responseCategoryDetail?.data

    const responseProduct = await getProductByCategory(id, page, size)
    const product = responseProduct?.data?.content

    return (
        <div className='mt-5 max-w-[1400px] p-3 mx-auto'>
            <section className='flex gap-4 py-[20px]'>
                <Link className='link' href='/'>
                TRANG CHỦ
                </Link>
                <p className='section-text'>/</p>
                <p className='font-bold'>{categoryDetail.name}</p>
            </section>

            <Row gutter={[48, 48]} align='top' className='relative overflow-hidden mb-5'>
                {/* FILTER */}
                <Col xs={0} sm={0} md={6} lg={6}>
                    {/* <ProductFilterPage
                        selectedPublisher={selectedPublisher}
                        setSelectedPublisher={setSelectedPublisher}
                        minPrice={minPrice}
                        setMinPrice={setMinPrice}
                        maxPrice={maxPrice}
                        setMaxPrice={setMaxPrice}
                    /> */}
                    123
                </Col>

                <Col xs={24} sm={24} md={18} lg={18}>
                <div>
                    <div className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 p-4 mb-4 rounded-xl shadow-md flex items-center gap-3">
                        <Tag className="w-8 h-8 text-white" />
                        <h2 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
                            {categoryDetail.name.toUpperCase()}
                        </h2>
                    </div>
                    {categoryDetail.categoryItems?.length > 0 && (
                        <div className='relative'>
                            <div
                                className="
                                    grid gap-4 p-4 rounded-xl mb-5 mt-12
                                    grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                                    bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300
                                "
                                >
                                {categoryDetail.categoryItems
                                    .map((item: any) => (
                                    <div
                                        key={item.id}
                                        // onClick={() => navigate(`/category/${categoryDetail.id}/${item.id}/${item.slug}`)}
                                        className="
                                        flex flex-col items-center gap-3 cursor-pointer rounded-xl bg-white 
                                        shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-3
                                        "
                                    >
                                        <div className="relative w-24 h-24">
                                            <ImageWithFallback
                                                src={item.image}
                                                alt={item.name}
                                                className="w-24 h-24 object-cover rounded-full border-gray-200"
                                            />
                                        </div>
                                        <p className="text-sm font-bold text-gray-800 text-center truncate w-full">
                                            {item.name.toUpperCase()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                
                <div className='flex flex-col bg-white rounded-2xl'>
                    <div className='flex flex-col sm:flex-row px-5 pt-5 gap-4 relative'>
                        {/* <Form form={formSearch} className="w-full lg:w-auto lg:hidden">
                            <Select
                                className='w-full lg:w-[220px] h-9 rounded-md shadow-md'
                                onChange={(value) => setSelectedPublisher(value === 'all' ? undefined : value)}
                                placeholder='Hãng sản xuất'
                                value={selectedPublisher}
                            >
                            <Select.Option value='all'>Tất cả</Select.Option>
                                {ResponseGetPublisher?.data.content.map((i) => (
                                    <Select.Option key={i.id} value={i.id}>
                                        {i.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form> */}
                        {/* <Form
                            form={form}
                            className='flex flex-col sm:flex-row gap-2 w-full lg:w-auto lg:hidden'
                            onFinish={handleSearchPrice}
                        >
                            <Row gutter={8} className="w-full">
                                
                                <Col xs={12} sm={12} md={0} lg={0}>
                                    <Form.Item name="minPrice" className="w-full">
                                        <Input placeholder="Giá thấp nhất" type="number" />
                                    </Form.Item>
                                </Col>

                                
                                <Col xs={0} sm={0} md={0} lg={0}>
                                    <Form.Item name="minPrice" className="w-full">
                                        <Input placeholder="Giá thấp nhất" type="number" />
                                    </Form.Item>
                                </Col>

                                <Col xs={12} sm={12} md={0}>
                                    <Form.Item name="maxPrice" className="w-full">
                                        <Input placeholder="Giá cao nhất" type="number" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <div className="flex gap-2">
                                <Button htmlType="submit" className="bg-[#fa7833] text-white">
                                    Tìm kiếm
                                </Button>
                                <Button onClick={handleRemoveSearch} className="bg-[#f5222d] text-white">
                                    Xóa
                                </Button>
                            </div>
                        </Form> */}
                    </div>
                    <div className='w-full h-[1px] bg-gray-300 lg:hidden'></div>
                    {/* {isPendingGetProductByCategory ? (
                        <div className='h-50 flex-1 text-center content-center'>
                            <SkeletonViewListProduct/>
                        </div>
                    ) : (
                        <div className=''>
                            {!ResponseGetProductByCategory ? (
                            <NoProduct />
                            ) : (
                            <div className='mt-5'>
                                {ResponseGetProductByCategory.data.content.length < 1 ? (
                                    <NoProduct />
                                ) : (
                                    <div className='grid gap-2 bg-white p-5 rounded-xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                        {ResponseGetProductByCategory.data.content.map((item) => (
                                        <Card
                                            key={item.id}
                                            hoverable
                                            className='bg-white rounded-[5px] shadow-sm group product-card'
                                            style={{ width: '100%' }} 
                                            onClick={() => handleNavigateProduct(item.id)}
                                            >
                                
                                            <div className="relative h-[160px] rounded-[8px] overflow-hidden mx-auto">

                                                <ImageWithFallback
                                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                                                src={item?.imageUrls?.[0] || ''}
                                                
                                                alt={item.name}
                                                />
                                                {item.flashSale &&
                                                <div className="text-white bg-red-600 absolute top-0 left-0 py-[5px] px-3 rounded-[5px] 
                                                                z-999 flex gap-[2px] items-center">
                                                <b>Flash sale</b>
                                                </div>
                                                }

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
                                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" />

                                                {item.inventory.available !== 0 && (
                                                <button
                                                    className="absolute bottom-0 left-0 w-full bg-[#fa7833] text-white py-2 font-semibold
                                                            opacity-0 translate-y-full 
                                                            group-hover:opacity-100 group-hover:translate-y-0
                                                            transition-all duration-300 ease-out z-10 flex gap-2 justify-center cursor-pointer"
                                                    onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddCart(userId!, false, item.id, 1);
                                                    }}
                                                    disabled={loadingProductId === item.id}
                                                >
                                                    <ShoppingCartOutlined /> {loadingProductId === item.id ? "Đang thêm..." : "Giỏ hàng"}
                                                </button>
                                                )}
                                            </div>
                                            <p className='text-sm text-[#777]'>Mã: {item.code}</p>
                                            <p className='text-[16px] font-bold text-[black] line-clamp-2 truncate'>
                                                {item.name}
                                            </p>
                                            <div className='flex'>
                                                <p className='text-[14px] line-clamp-2 text-gray-400 flex-1'>
                                                Số lượng:{item.inventory.available}
                                                </p>
                                                {item.inventory.available === 0 && (
                                                <p className='text-red-600 font-bold'>Hết hàng</p>
                                                )}
                                            </div>
                                            <div className=' mt-2 min-h-10'>
                                            <div className='flex-1'>
                                                <div>
                                                    {item.flashSale ? (
                                                    <>
                                                        <p className="text-gray-500 line-through text-[16px] h-[20px]">
                                                        {(item.pricing.originalPrice || 0).toLocaleString()} VNĐ
                                                        </p>
                                                        <p className="text-[#fa7833] text-[18px] font-bold">
                                                        {(item.pricing.currentPrice || 0).toLocaleString()} VNĐ
                                                        </p>
                                                    </>
                                                    ) : (
                                                    <>
                                                        <div className="h-[20px]"></div>
                                                        <div className="text-[#fa7833] text-[18px] font-bold">
                                                        {item.pricing.currentPrice.toLocaleString()} VNĐ
                                                        </div>
                                                    </>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                className='flex gap-2 text-blue-500 hover:text-blue-300'
                                                onClick={() => handleAddProductCompare(item)}
                                            >
                                                <p>So sánh</p>
                                                <PlusCircleOutlined />
                                            </div>
                                            </div>
                                        
                                        </Card>

                                        ))}

                                    </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )} */}
                    <div className='py-5'>
                    {/* <Pagination
                        current={page + 1}
                        onChange={pageNumber => setPage(pageNumber - 1)}
                        total={ResponseGetProductByCategory?.data.currentTotalElementsCount}
                        pageSize={size}
                        align='center'
                        showSizeChanger={false}
                    /> */}
                    </div>
                </div>
                </Col>
            </Row>
          
            
        </div>
    )
}
