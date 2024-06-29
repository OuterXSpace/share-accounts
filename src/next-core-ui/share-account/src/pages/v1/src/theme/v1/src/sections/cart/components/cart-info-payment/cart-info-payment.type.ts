import { ICartState } from '../../../../../../../../../../../../../store-tookit';

export interface ICartInfoPaymentProps {
  cart: ICartState[];
  onSubmit: () => void;
  disabled: boolean;
  isLoading: boolean;
}
