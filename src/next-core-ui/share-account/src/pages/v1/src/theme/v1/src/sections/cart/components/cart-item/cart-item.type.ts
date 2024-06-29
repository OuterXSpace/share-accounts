import { ICartState } from '../../../../../../../../../../../../../store-tookit';

export interface ICartItemPageProps {
  item: ICartState;
  removeFromCart: (id: string) => void;
}
