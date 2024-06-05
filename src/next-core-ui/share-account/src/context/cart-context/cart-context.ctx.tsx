/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { ICartContextInitState, ICartContextProviderProps, ICartContextType, ICartItemCtx } from './cart-context.type';

export const CartContext = createContext<ICartContextType | null>(null);

export const CartProvider: React.FC<ICartContextProviderProps> = (props) => {
  const { children } = props;

  const [initialState, setInitialState] = useState<ICartContextInitState>({
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  });

  const addItemToCart = (item: ICartItemCtx) => {
    const itemExist = checkItemInCartExist(item.id);
    const updatedCartItems = [...initialState.cartItems];
    let updatedTotalQuantity = initialState.totalQuantity;
    let updatedTotalPrice = initialState.totalPrice;
    // item exist return -1 if not exist
    if (itemExist !== -1) {
      // item exist in cart
      updatedCartItems[itemExist].quantity += 1;
      updatedCartItems[itemExist].totalPrice = calcTotalPriceItem(
        updatedCartItems[itemExist].originalPrice,
        updatedCartItems[itemExist].quantity,
      );
    } else {
      // item not exist in cart
      const newItem = {
        ...item,
        quantity: 1,
        totalPrice: item.originalPrice,
        originalPrice: item.originalPrice,
      };
      updatedCartItems.push(newItem);
    }
    updatedTotalQuantity += 1;
    updatedTotalPrice += item.originalPrice;
    setInitialState({
      cartItems: updatedCartItems,
      totalQuantity: updatedTotalQuantity,
      totalPrice: updatedTotalPrice,
    });
  };

  const removeItemToCart = (id: string) => {
    console.log('remove item to cart', id);
    const itemExist = checkItemInCartExist(id);
  };

  const increaseItemQuantity = (id: string) => {
    console.log('increase item quantity', id);
  };

  const decreaseItemQuantity = (id: string) => {
    console.log('decrease item quantity', id);
  };

  const calcTotalPriceItem = (price: number, quantity: number) => {
    return price * quantity;
  };

  const checkItemInCartExist = (id: string) => {
    return initialState.cartItems.findIndex((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        initialState,
        addItemToCart,
        removeItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
