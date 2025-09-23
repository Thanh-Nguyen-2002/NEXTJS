"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TitleBlogPage() {
    return (
        <div className="text-center mb-12">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-800 mb-4">
                Blog Du Lịch Codec Travel
            </motion.h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Khám phá những câu chuyện, hành trình và trải nghiệm độc đáo tại Việt
                Nam.
            </p>
        </div>
    );
}
