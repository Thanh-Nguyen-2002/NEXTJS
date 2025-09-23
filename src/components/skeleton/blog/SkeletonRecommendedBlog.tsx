import React from "react";
import { Skeleton } from "antd";
export default function SkeletonRecommendedBlog() {
    return (
        <div className="bg-gray-50 rounded-2xl shadow p-5">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                ✨ Bài viết gợi ý
            </h3>
            <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="flex items-end gap-4 hover:bg-white p-2 rounded-lg transition"
                    >
                        <Skeleton.Image className="!w-20 !h-20 rounded-lg" />
                        <div className="text-sm font-medium text-gray-700 line-clamp-2">
                            <Skeleton.Input className="!w-30 !h-6" active />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
