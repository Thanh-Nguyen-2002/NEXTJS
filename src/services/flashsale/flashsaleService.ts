import { API_PATHS } from "@/constants/apiPath";
import { apiCached } from "@/lib/api";
import { ResponseFlashSale } from "@/types/flashsale";

export async function getFlashSale(page?:number, size?: number):Promise<ResponseFlashSale> {
    return apiCached({
        url: `${API_PATHS.FLASHSALE.getAll}`,
        params: {
            page,
            size
        }
    })
}