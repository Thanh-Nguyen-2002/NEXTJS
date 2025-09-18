import { getAllCategory } from "@/services/category/categoryService";
import Link from "next/link";

export default async function ListProduct() {   
    const page = 0;
    const size = 10
    const category = await getAllCategory(page,size)

    const responseCategory = category?.data?.content

    return (
        <div>
            {responseCategory.map((cate) => {

                return(
                    <div key={cate.id}>
                        <div className="flex justify-between items-center flex-wrap px-2">
                            <h2 className="text-xl font-bold uppercase">{cate.name}</h2>
                            <div className="flex gap-5">
                                <div className="flex gap-2">
                                    {(cate.categoryItems || []).slice(0, 2).map((item: any) => (
                                        <div
                                            key={item.id}
                                            // onClick={() => navigate(`/category/${cat.id}/${item.id}/${item.slug}`)}
                                            className="px-5 py-2 rounded-full text-sm border border-dashed text-[#fa7833] cursor-pointer hover:bg-[#fa7833] hover:text-white"
                                        >
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="text-[#fa7833] hover:underline text-sm hover:cursor-pointer"
                                    // onClick={() => navigate(`/category/${cat.id}/${cat.slug}`)}
                                >
                                    <Link href={`productbycategory/${cate.id}/${cate.slug}`}> 
                                    
                                        XEM THÊM
                                    </Link>
                                </button>
                            </div>

                        </div>
                        
                    </div>
                )
            })}
            
        </div>
    )
}
