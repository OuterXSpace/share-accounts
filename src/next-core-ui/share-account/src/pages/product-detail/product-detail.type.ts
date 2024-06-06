export interface ProductDetailPageProps {
  routerId?: string;
  wuiWelcomePopup?: Record<string, any>;
  sacProductData?: Record<string, any>;
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
  duration: IProductItemDuration[];
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
