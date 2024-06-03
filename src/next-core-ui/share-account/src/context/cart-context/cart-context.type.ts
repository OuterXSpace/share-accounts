export interface CartContextType {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface CartItem {
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
