import React from "react";
import { Card } from "antd";

export default function SkeletonContentBlog() {
    return (
        <div className="grid md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                    <Card hoverable className="border-none">
                        <div className="relative w-full h-48 bg-gray-200 rounded-md" />
                    </Card>
                </div>
            ))}
        </div>
    );
}

