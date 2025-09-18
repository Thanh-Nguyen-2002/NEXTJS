import { API_PATHS } from "@/constants/apiPath";
import { apiFetch } from "@/lib/api";
import { ResponseCategory, ResponseGetCategoryDetail } from "@/types/category";

export async function getAllCategory(page?:number, size?:number):Promise<ResponseCategory> {
    return apiFetch({
        url: `${API_PATHS.PRODUCT.getCategory}`,
        params: {
            page,
            size
        }
    })
}

export async function getCategoryById(id: string):Promise<ResponseGetCategoryDetail> {
    return apiFetch({
        url: `${API_PATHS.PRODUCT.getCategoryDetail}/${id}`,
    })
}


