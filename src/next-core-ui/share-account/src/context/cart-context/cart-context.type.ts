export interface CartContextType {
  cartItems: ICartItem1[];
  totalQuantity: number;
  totalPrice: number;
}

export interface ICartItem1 {
  price: number;
  quantity: number;
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  linkUrl: string;
  timeExpired: string;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
