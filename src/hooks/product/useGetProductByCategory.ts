import { getProductByCategory } from '@/services/product/productService'
import { useQuery } from '@tanstack/react-query'

export const useGetProductByCAtegory = (id: string, page?: number, size?: number) => {
    const {
        data: ResponseProductByCategory,
        isPending : isLoadingGetProductByCategory,
        error: ErrorGetProductByCategory

    } = useQuery({
        queryKey: ["useGetProductByCategory", id, page, size],
        queryFn: () =>  getProductByCategory(id, page, size),
        retry: false,
        refetchOnMount:false,
        refetchOnReconnect:false
    })
    return {
        ResponseProductByCategory,
        isLoadingGetProductByCategory,
        ErrorGetProductByCategory
    }
}