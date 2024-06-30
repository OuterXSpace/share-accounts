export interface ISACV1ProductModel {
  id: string;
  linkUrl: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  totalOrderNumber: number;
  categoryName: string;
  currency: string;
  description: string;
  totalCustomerReviews: number;
  rating: number;
  imagesUrls: ISACV1ImageModel[];
  durations: ISACV1DurationModel[];
}

export interface ISACV1DurationModel {
  id: string;
  label: string;
  price: number;
}

export interface ISACV1ImageModel {
  id: string;
  label: string;
  price: number;
}
