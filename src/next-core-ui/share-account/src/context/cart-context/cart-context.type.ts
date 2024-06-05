export interface ICartContextType {
  initialState: ICartContextInitState;
  addItemToCart: (item: ICartItemCtx) => void;
  removeItemToCart: (id: string) => void;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  onChangeItemQuantity: (id: string, quantity: number) => void;
}

export interface ICartContextInitState {
  cartItems: ICartItemCtx[];
  totalQuantity: number;
  totalPrice: number;
}

export interface ICartItemCtx {
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

export interface ICartContextProviderProps {
  children: React.ReactNode;
}
