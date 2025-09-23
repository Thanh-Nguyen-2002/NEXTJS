"use client";
import { Card } from "antd";
import React from "react";
import { motion } from "framer-motion";
import useGetAllBlog from "@/hooks/blog/useGetAllBlog";
import { Post } from "@/types/blog";
import SkeletonContentBlog from "../skeleton/blog/SkeletonContentBlog";
import ApiError from "../error/ApiError";
import ApiEmpty from "../empty/ApiEmpty";
import { useRouter } from "next/navigation";
import ImageWithFallback from "../image/ImageWithCallBack";

export default function ContentBlogPage() {
    const page = 0;
    const size = 6;
    const router = useRouter();
    const {
        responseGetAllBlog,
        isLoadingGetAllBlog,
        refetchGetAllBlog,
        errorGetAllBlog
    } = useGetAllBlog(page,size);

    const blogPosts = responseGetAllBlog?.data?.content || ([] as Post[]);

    if(isLoadingGetAllBlog){
        return (
            <SkeletonContentBlog />
        )
    }

    if(errorGetAllBlog){
        return (
            <ApiError
                message="Đã có lỗi xảy ra khi tải bài viết. Vui lòng thử lại."
                onRetry={refetchGetAllBlog} 
            />
        )
    }

    if(!blogPosts || blogPosts.length === 0){
        return(
            <ApiEmpty 
                title="Chưa có bài viết nào"
                description="Hiện tại chưa có bài viết nào. Vui lòng quay lại sau."
                actionLabel="Tải lại"
                onAction={refetchGetAllBlog}
                goBack={true}
                onGoBack={() => router.push('/')}
            />
        )
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    onClick={() => router.push(`/blog/${post.id}/${post.slug}`)}
                >
                    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="relative h-48 w-full">
                            <ImageWithFallback
                                src={post.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover relative"
                            />
                            <div className="absolute bottom-0 left-0 bg-black/20 text-white px-3 py-1 rounded-br-lg">
                                <h2 className="text-xl font-semibold  mb-3 line-clamp-2">
                                    {post.title}
                                </h2>
                            </div>
                        </div>
                        
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
