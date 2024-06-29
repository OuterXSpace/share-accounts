import { PayloadAction } from '@reduxjs/toolkit';
import { CartPayloadAction, ContainerState, ICartState, IFieldValue } from './types';
import { createSlice, getUuid } from '../../utils';

export const initialState: ContainerState = {
  loading: false,
  data: {},
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeFieldValue: {
      reducer: (state, action: PayloadAction<IFieldValue>) => {
        state[action.payload.field] = action.payload.value;
      },
      prepare(field: string, value: any) {
        return { payload: { field, value } };
      },
    },
    changeLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    addToCart(state, action: PayloadAction<ICartState>) {
      const cart = [...state.cart];

      const { productId, quantity, variants } = action.payload;

      const existingProductIndex = cart.findIndex((item) => item.productId === productId && item.variants === variants);

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
      } else {
        cart.push({ ...action.payload, id: getUuid() });
      }

      state.cart = cart;
    },
    removeFromCart(state, action: PayloadAction<ICartState>) {
      const cart = [...state.cart];

      const { id } = action.payload;

      const newCart = cart.filter((item) => !(item.id === id));

      state.cart = newCart;
    },
    updateCart(state, action: PayloadAction<CartPayloadAction>) {
      let cart = [...state.cart];

      const { idCart, type } = action.payload;

      if (type === 'increase') {
        cart = cart.map((item) => (item.id === idCart ? { ...item, quantity: item.quantity + 1 } : item));
      }
      if (type === 'decrease') {
        cart = cart
          .map((item) => (item.id === idCart ? { ...item, quantity: item.quantity - 1 } : item))
          .filter((item) => item.quantity > 0);
      }
      if (type === 'variants') {
        cart = cart.map((item) => (item.id === idCart ? { ...item, variants: item.variants } : item));
      }

      state.cart = cart;
    },
  },
});

export const { actions: cartActions, reducer, name: cartSliceKey } = cartSlice;
