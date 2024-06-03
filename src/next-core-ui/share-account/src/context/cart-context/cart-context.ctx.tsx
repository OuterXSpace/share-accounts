import { createContext, useState } from 'react';
import { CartContextProviderProps, CartContextType, ICartItem1 } from './cart-context.type';

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<CartContextProviderProps> = (props) => {
  const { children } = props;

  const [initialState, setInitialState] = useState<CartContextType>({
    cartItems: [
      {
        id: '1',
        linkUrl: '/product/mua-spotify-premium?id=2',
        imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2-510x510.png.webp',
        imageAlt: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
        title: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
        price: 90000,
        quantity: 1,
        timeExpired: '',
      },
      // {
      //   id: '2',
      //   linkUrl: '/product/mua-spotify-premium?id=2',
      //   imageUrl: 'https://gamikey.com/wp-content/uploads/2022/03/Spotify-2-510x510.png.webp',
      //   imageAlt: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
      //   title: 'Nâng cấp tài khoản Spotify Premium hàng chính chủ',
      //   price: 90000,
      //   quantity: 1,
      //   timeExpired: '',
      // },
    ],
    totalQuantity: 0,
    totalPrice: 0,
  });

  const handleAddItemToCart = (item: ICartItem1) => {};

  const handleRemoveItemToCart = (id: number) => {};

  return <CartContext.Provider value={initialState}>{children}</CartContext.Provider>;
};
