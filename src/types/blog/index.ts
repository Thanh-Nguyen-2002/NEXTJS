export interface ResponseDataGetAllPostsProp {
    data: {
        currentTotalElementsCount: number,
        content: Post[]
    }
}


export interface Post {
    id: string;
    title: string;
    imageUrl: string;
    slug: string;
    publishedAt: string;
    authorName: string;
    tags: Tag[];
};

export interface Tag {
    name: string;
    slug: string;
};


export interface ResponseDataGetPostById {
  data: contentData;
}

export interface contentData {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
  publishedAt: string;
  authorName: string;
  tags: Tag[];
  content: string;
  seoTitle: string;
  metaDescription: string;
}