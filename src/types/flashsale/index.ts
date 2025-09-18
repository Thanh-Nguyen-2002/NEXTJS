export interface ResponseFlashSale {
    data: {
        currentPage: number;
        currentTotalElementsCount: number;
        pageSize: number;
        content: FlashSale[];
        notLast: boolean;
        pagesCount: number;
        hasPrevious: boolean;
        hasNext: boolean;
    };
}

export interface FlashSale {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
    products: FlashSaleProduct[];
    createdBy: string;
    active: boolean;
}

export interface FlashSaleProduct {
    productId: string;
    name: string;
    description: string;
    code: string;
    slug:string;
    originalPrice: number;
    imageUrl: string;
    flashPrice: number;
    availableQuantity: number;
    soldQuantity: number;
    publisher: Publisher;
    categories: Category[];
    isInFlashSale:boolean
}
export interface Publisher {
    id: number;
    name: string;
}

export interface Category {
    type: number | Category | null | undefined;
    id: string;
    name: string;
    description: string;
    slug:string;
    categoryItems: { id: number; name: string; img: string;slug:string }[];
}