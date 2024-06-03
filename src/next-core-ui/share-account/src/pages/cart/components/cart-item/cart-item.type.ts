export interface CartItemPageProps {
  item: CartItem;
}

export interface CartItem {
  price: number;
  quantity: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  linkUrl: string;
  timeExpired: string;
}
