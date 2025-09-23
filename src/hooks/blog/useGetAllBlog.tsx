import { getAllBlog } from "@/services/blog/blogService";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllBlog(page:number, size:number) {
    const {
        data : responseGetAllBlog,
        isPending: isLoadingGetAllBlog,
        refetch: refetchGetAllBlog,
        error: errorGetAllBlog
    } = useQuery({
        queryKey: ['getAllBlog',page, size],
        queryFn: () => getAllBlog(page, size),
        retry: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })
    return {
        responseGetAllBlog,
        isLoadingGetAllBlog,
        refetchGetAllBlog,
        errorGetAllBlog
    }
}
