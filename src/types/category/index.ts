export interface ResponseCategory {
    data:{
        content:category[],
        currentTotalElementsCount: number
    }
}

export interface category {
    id: string,
    name: string,
    categoryItems: categoryItems[],
    seo_title: string,
    meta_description: string,
    slug: string
}

export interface categoryItems {
    id: string,
    name: string,
    categoryId: string,
    seoTitle: string,
    metaDescription: string,
    slug: string
}

export interface ResponseGetCategoryDetail {
    data:category
}