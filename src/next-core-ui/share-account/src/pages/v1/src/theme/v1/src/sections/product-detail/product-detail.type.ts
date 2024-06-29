export interface ProductDetailPageShareAccountTheme01Props {
  data?: Record<string, any>;
  products?: Record<string, any>[];
  className?: string;
}

export interface IProductItem {
  id: string;
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
  currency: string;
  title: string;
  totalOrderNumber: number;
  categoryName: string;
  description: string;
  imagesUrls: IProductItemImagesUrls[];
  totalCustomerReviews: number;
  rating: number;
  durations: IProductItemDuration[];
}

export interface IProductItemImagesUrls {
  id: string;
  imageUrl: string;
}

export interface IProductItemDuration {
  id: string;
  price: number;
  label: string;
}
