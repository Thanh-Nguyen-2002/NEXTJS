export interface Product {
    id: string;
    name: string;
    description: string;
    slug:string;
    imageUrls: string[];
    categories: Category[];
    code: string;
    rating: number;
    publisher: {
        id: string;
        name: string;
    },

    flashSale:flashSale | null;
    createdAt: string
    pricing: pricing
    inventory: inventory,
    videoUrl: string | null;
}

export interface Category {
    id: number;
    name: string;
    seo_title: string,
    meta_description: string,
    slug: string
}

export interface ResponseProduct {
    data: {
        content: Product[];
        currentTotalElementsCount: number;
    }
}

export interface flashSale {
    id: string,
    name: string,
    startTime:string,
    endTime:string,
    remainingSeconds:number,
    sold:number,
    available:number,
    maxQuantity:number,
    active: boolean
}

export interface pricing {
    originalPrice: number;
    currentPrice: number;
    flashPrice: number | null;
    discountPercent: number | null;
    currency: string
}

export interface inventory {
    totalQuantity: number;
    sold: number;
    available: number;
}