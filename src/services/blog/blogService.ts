import { API_PATHS } from "@/constants/apiPath";
import { apiCached, apiFetch } from "@/lib/api";
import { ResponseDataGetAllPostsProp, ResponseDataGetPostById } from "@/types/blog";

export async function getBlog(page?:number, size?: number): Promise<ResponseDataGetAllPostsProp> {
    return await apiCached({
        url: `${API_PATHS.POST.getAllPost}`,
        params: {
            page: page ??  0,
            size: size ?? 10
        }
    })
}

export async function getAllBlog(page: number, size: number): Promise<ResponseDataGetAllPostsProp> {
    return await apiFetch({
        url: `${API_PATHS.POST.getAllPost}`,
        params: {
            page,
            size
        }
    })
}

export async function getBlogById(id: string): Promise<ResponseDataGetPostById> {
    return await apiFetch({
        url: `${API_PATHS.POST.getPostById}/${id}`,
    })

}