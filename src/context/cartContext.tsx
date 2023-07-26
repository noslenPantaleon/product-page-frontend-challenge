// CartContext.tsx
'use client';
import { createContext, useReducer } from 'react';
import {
  cartReducer,
  CartContextType,
  initialState,
  CartState,
  CartItem,
} from './reducers/cartReducer';

export const CartContext = createContext<CartContextType>({
  state: initialState,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

type Props = {
  children?: React.ReactNode;
};

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  return { state, addToCart, removeFromCart, clearCart };
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
