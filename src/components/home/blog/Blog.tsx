import ImageWithFallback from "@/components/image/ImageWithCallBack";
import { getBlog } from "@/services/blog/blogService";
import Link from "next/link";

export default async function Blog() {

    const responseBlog = await getBlog()

    if(!responseBlog || !responseBlog?.data?.content?.length) return null;
    const blog = responseBlog.data.content

    return (
        <div className="mb-[50px] p-3">
            <div className="max-w-[1400px] mx-auto  min-h-[70vh] bg-white rounded-[10px] border border-gray-100 p-4 shadow-md">
                <div className="border-b border-orange-500 flex items-center justify-between p-3">
                    <h1 className="py-3 font-bold text-xl">Bài viết phổ biến</h1>
                    <button
                        className="px-4 py-2 rounded-[20px] border border-orange-600 text-orange-600 font-medium 
                        hover:bg-orange-600 hover:text-white transition cursor-pointer"
                    >
                        <Link href={"/blog"}>
                            Xem thêm
                        </Link>
                        
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
                    <div className="flex flex-col gap-20">
                        <div>
                                <div className="mt-5 flex flex-col gap-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        {blog.slice(0, 2).map((p) => (
                                            <Link
                                                key={p.id}
                                                href={`/blog/${p.id}/${p.slug}`}
                                                className="relative block w-full rounded-lg overflow-hidden"
                                            >
                                                <ImageWithFallback
                                                    src={p.imageUrl}
                                                    alt={p.title}
                                                    className="w-80 h-45 object-cover rounded-[10px]"
                                                    width={320}
                                                    height={160}
                                                />
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-600">
                                                        {(p.publishedAt)}
                                                    </p>
                                                    <h2 className="text-md font-bold text-black line-clamp-2 hover:text-orange-500">
                                                        {p.title}
                                                    </h2>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    {blog[2] && (
                                        <Link
                                        href={`/blog/${blog[2].id}/${blog[2].slug}`}
                                        className="relative block rounded-lg"
                                    >
                                            <ImageWithFallback
                                                src={blog[2].imageUrl}
                                                alt={blog[2].title}
                                                className="w-170 h-70 object-cover rounded-[10px]"
                                                width={170}
                                                height={70}
                                            />
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-600">
                                                    {(blog[2].publishedAt)}
                                                </p>
                                                <h2 className="text-xl font-bold text-black line-clamp-2 hover:text-orange-500">
                                                    {blog[2].title}
                                                </h2>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <>
                            <Link
                                href={`/blog/${blog[0].id}/${blog[0].slug}`}
                                className="lg:block relative w-full rounded-lg overflow-hidden"
                            >
                                <ImageWithFallback
                                    src={blog[0].imageUrl}
                                    alt={blog[0].title}
                                    className="w-full h-136 object-cover block z-0 rounded-[10px]"
                                    height={540}
                                    width={660}
                                />

                                <div className="mt-2">
                                    <p className="text-sm text-gray-600">
                                        {(blog[0].publishedAt)}
                                    </p>
                                    <h2 className="text-xl font-bold text-black line-clamp-2 hover:text-orange-500">
                                        {blog[0].title}
                                    </h2>
                                </div>
                            </Link>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}
