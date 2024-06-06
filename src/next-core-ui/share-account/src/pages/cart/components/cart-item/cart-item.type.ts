export interface ICartItemPageProps {
  item: ICartItem;
  removeItemToCart: (id: string) => void;
}

export interface ICartItem {
  id: string;
  quantity?: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  linkUrl: string;
  durationLabel: string;
  totalPrice?: number;
  originalPrice: number;
}
