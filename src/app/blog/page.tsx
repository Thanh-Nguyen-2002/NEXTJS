import TitleBlogPage from "@/components/blog/TitleBlogPage";
import ContentBlogPage from "@/components/blog/ContentBlogPage";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog | Codec Travel",
    description: "Tin tức, kinh nghiệm và chia sẻ hành trình từ Codec Travel",
};

export default function BlogPage() {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white px-6 py-12">
            <div className="max-w-[1400px] mx-auto">
                <TitleBlogPage />
                <ContentBlogPage />
            </div>
            
        </div>
    );
}
