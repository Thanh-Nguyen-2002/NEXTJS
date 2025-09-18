import { API_PATHS } from "@/constants/apiPath";
import { apiFetch } from "@/lib/api";
import { ResponseProduct } from "@/types/product";

export async function getProducts(page?: number, size?: number):Promise<ResponseProduct> {
    return apiFetch({
        url: `${API_PATHS.PRODUCT.getAllProduct}`,
        params: {
            page,
            size
        }
    });
}

export async function getProductByCategory(categoryId: string, page?: number, size?: number ): Promise<ResponseProduct> {
    return apiFetch({
        url: `${API_PATHS.PRODUCT.getProductByCategory}`,
        params: {
            categoryId,
            page,
            size
        }
    })
}