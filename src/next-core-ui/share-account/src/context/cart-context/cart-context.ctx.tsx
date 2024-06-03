import { createContext, useState } from 'react';
import { ICartContextProviderProps, ICartContextType, ICartItemCtx } from './cart-context.type';

export const CartContext = createContext<ICartContextType | null>(null);

export const CartProvider: React.FC<ICartContextProviderProps> = (props) => {
  const { children } = props;

  const [initialState, setInitialState] = useState<ICartContextType>({
    cartItems: [
      {
        linkUrl: '/product/mua-spotify-premium?id=2',
        imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2-510x510.png.webp',
        imageAlt: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
        title: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
        price: 90000,
        quantity: 1,
        durationLabel: '',
        totalPrice: 90000,
      },
      // {
      //   linkUrl: '/product/mua-spotify-premium?id=2',
      //   imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2-510x510.png.webp',
      //   imageAlt: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
      //   title: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
      //   price: 90000,
      //   quantity: 1,
      //   durationLabel: '',
      // totalPrice: 90000,
      // },
    ],
    totalQuantity: 0,
    totalPrice: 0,
  });

  const handleAddItemToCart = (item: ICartItemCtx) => {};

  const handleRemoveItemToCart = (id: number) => {};

  const handleIncreaseItemQuantity = (id: number) => {};

  const handleDecreaseItemQuantity = (id: number) => {};

  return <CartContext.Provider value={initialState}>{children}</CartContext.Provider>;
};
