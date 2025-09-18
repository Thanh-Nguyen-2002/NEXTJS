export const API_PATHS = {

  PRODUCT: {
    getAllProduct: '/products/getAllProducts',
    searchProduct: '/products/search',
    getProductByCategory: '/products/getByCategory',
    getPublishers: '/publishers/getAllPublishers',
    searchPublisher: '/publishers/search',
    getCategory: '/category/getAllCategories',
    getProductByCategoryItem: '/products/getByCategoryItem',
    // getCategory:'/category/getAllCategories',
    getCategoryDetail: '/category/getById',
    getCategoryItemsDetail: '/categoryItem/getById',
    getAllFlashSale: '/flash-sales/getAll',
    getFlashSaleDetail: '/flash-sales/getById',
  },
  FEEDBACK: {
    getFeedbackByProductId: '/feedbacks/getFeedbacksByProductId',
  },
  FLASHSALE: {
    getAll: '/flash-sales/getAll',
    getFlashSaleById: '/flash-sales/getById',
    getCheckProductFlashSale: '/flash-sales/flash-sale/products/exclude-scheduled',
  },
  VNPAY: {
    getCallBack: '/vnpay/callback',
  },
  SEARCH: {
    searchProductByImage: '/image/search',
  },
  NOTIFICATION: {
    getAllNotification: '/notifications/getAllNotifications',
    getNotificationById: '/notifications/getNotificationById',
  },
  COMBO: {
    getAllCombo: '/combos/getAll',
    getDetailCombo: '/combos/getById',
  },
  COMPARE:{
    compare: '/products/compare'
  },
  TAGS:{
    getAllTag : '/tag/getAll',
    toggleTag : '/tag/toggle',
    getTagById : 'tag/getById'
  },
  POST:{
    getAllPost: '/post/getAll',
    getPostById: '/post/getById',
  },
  POLICY:{
    getAllPolicy :'/policies/getAll',
    getAllCatPolicy :'/categoryPolicies/getAll',
    getCatPolicyById:'/categoryPolicies/getById',
    getPolicyById:'/policies/getById',
  },
};
