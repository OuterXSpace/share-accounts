export interface ICartContextType {
  cartItems: ICartItemCtx[];
  totalQuantity: number;
  totalPrice: number;
}

export interface ICartItemCtx {
  price: number;
  quantity: number;
  imageUrl: string;
  imageAlt: string;
  title: string;
  linkUrl: string;
  durationLabel: string;
  totalPrice: number;
}

export interface ICartContextProviderProps {
  children: React.ReactNode;
}
