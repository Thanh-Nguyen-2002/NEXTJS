"use client";
import React from "react";
import ApiEmpty from "../empty/ApiEmpty";
import useGetAllBlog from "@/hooks/blog/useGetAllBlog";
import ApiError from "../error/ApiError";
import { Post } from "@/types/blog";
import SkeletonRecommendedBlog from "../skeleton/blog/SkeletonRecommendedBlog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageWithFallback from "../image/ImageWithCallBack";

export default function RecommendedBlogs() {
    const page = 0;
    const size = 6;
    const router = useRouter();
    const {
        responseGetAllBlog,
        isLoadingGetAllBlog,
        errorGetAllBlog,
    } = useGetAllBlog(page, size);

    const blogPosts = responseGetAllBlog?.data?.content || ([] as Post[]);

    if (isLoadingGetAllBlog) {
        return <SkeletonRecommendedBlog />;
    }

    if (errorGetAllBlog) {
        return (
            <ApiError
                message="Đã có lỗi xảy ra khi tải bài viết. Vui lòng thử lại."
            />
        );
    }

    if (!blogPosts || blogPosts.length === 0) {
        return (
            <ApiEmpty
                title="Chưa có bài viết nào"
                description="Hiện tại chưa có bài viết nào. Vui lòng quay lại sau."
            />
        );
    }
    return (
        <div className="bg-gray-50 rounded-2xl shadow p-5">
            <h3 className="text-xl font-semibold text-gray-800">
                ✨ Bài viết gợi ý
            </h3>
            <div className="space-y-4">
                {blogPosts.map((blog) => (
                    <div
                        key={blog.id}
                        className="flex items-center gap-4 hover:bg-white p-2 rounded-lg transition cursor-pointer"
                        onClick={() => router.push(`/blog/${blog.id}/${blog.slug}`)}
                    >
                        <div className="relative flex-shrink-0 w-20 h-20">
                            <ImageWithFallback
                                src={blog.imageUrl}
                                alt={blog.title}
                                fill
                                className="rounded-lg object-fill h-20 w-20"
                            />
                        </div>
                        
                        <div className="text-sm font-medium text-gray-700 line-clamp-2">
                            {blog.title}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
