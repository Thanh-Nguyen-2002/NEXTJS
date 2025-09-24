import RecommendedBlogs from '@/components/blog/RecommendedBlogs';
import { getBlogById } from '@/services/blog/blogService';
import { contentData } from '@/types/blog';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
export const metadata: Metadata = {
    title: "Blog | Codec Travel",
    description: "Tin tức, kinh nghiệm và chia sẻ hành trình từ Codec Travel",
};

interface Props {
    params: { id: string, slug: string };
}
export default async function BlogDetail( { params }: Props ) {

    const { id } = params;
    const result = await getBlogById(id)

    const dataPost = result?.data || ( {} as contentData); 

    return (
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

            <div className="lg:col-span-8 bg-white rounded-2xl shadow-md p-6">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 leading-snug line-clamp-2">
                    {dataPost.title}
                </h1>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <span>✍️ {dataPost.authorName}</span>
                    <span>📅 {dataPost.publishedAt}</span>
                </div>
                <div className='relative w-full h-150 mb-5'>
                    <Image
                        src={dataPost.imageUrl}
                        alt={dataPost.title}
                        fill
                        className="rounded-xl mb-6"
                    />
                </div>
                

                <article className="prose max-w-none prose-lg text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: dataPost.content }} />
                </article>
            </div>

            <aside className="lg:col-span-4 space-y-6">
                <div className='lg:sticky lg:top-[140px] lg:space-y-6 flex flex-col gap-5'>
                    <div>
                        <RecommendedBlogs />
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow p-6 text-center">
                        <h3 className="text-lg font-bold mb-2">Đăng ký nhận tin</h3>
                        <p className="mb-4 text-sm text-blue-100">
                            Nhận bài viết mới nhất về du lịch Việt Nam mỗi tuần.
                        </p>
                        <input
                            type="email"
                            placeholder="Nhập email của bạn"
                            className="w-full px-4 py-2 rounded-lg text-white focus:outline-none border border-gray-300"
                        />
                        <button className="mt-3 w-full px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 cursor-pointer">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}
