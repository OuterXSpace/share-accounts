import { ICartInfoTableItem } from '../cart-info-table';

export interface ICartInfoPaymentProps {
  items: ICartInfoTableItem[];
  totalPrice: number;
  handlePostOrder: () => void;
  isLoading: boolean;
}
