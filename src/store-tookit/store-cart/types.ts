export interface CartState {
  loading: boolean;
  dialogCart: boolean;
  data: Record<string, any>;
  cart: ICartState[];
}

export interface IFieldValue {
  field: string;
  value: any;
}

export interface ICartState {
  id?: string;
  productId: string;
  quantity: number;
  price: number;
  variants: string;
  product: Record<string, any>;
}

export interface CartPayloadAction {
  idCart: string;
  type: 'increase' | 'decrease' | 'variants' | 'pass-parameters';
  quantity?: number;
}
export type ContainerState = CartState;
