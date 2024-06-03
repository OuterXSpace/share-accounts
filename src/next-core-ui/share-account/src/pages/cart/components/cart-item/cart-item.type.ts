export interface CartItemPageProps {
  item: ICartItem;
}

export interface ICartItem {
  price: number;
  quantity: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  linkUrl: string;
  timeExpired: string;
}
