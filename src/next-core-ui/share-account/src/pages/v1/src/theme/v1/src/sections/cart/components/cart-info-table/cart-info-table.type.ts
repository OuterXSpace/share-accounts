export interface ICartInfoTableProps {
  items: ICartInfoTableItem[];
  removeItemToCart: (id: string) => void;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  onChangeItemQuantity: (id: string, quantity: number) => void;
}

export interface ICartInfoTableItem {
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
