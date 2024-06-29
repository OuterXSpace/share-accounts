import { CartPayloadAction, ICartState } from '../../../../../../../../../../../../../store-tookit';

export interface ICartInfoTableProps {
  cart: ICartState[];
  removeFromCart: (pl: { id: string }) => void;
  updateCart: (cA: CartPayloadAction) => void;
}
