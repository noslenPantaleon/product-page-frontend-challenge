// CartContext.tsx
'use client';
import { createContext, useReducer, useEffect } from 'react';
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
  decrementQuantity: () => {},
  incrementQuantity: () => {},
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

  const decrementQuantity = (id: number) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  };

  const incrementQuantity = (id: number) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const loadCart = (item: string) => {
    dispatch({
      type: 'LOAD_CART',
      payload: JSON.parse(item) || null,
    });
  };
  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    loadCart,
  };
};

const CART_STORAGE_KEY = 'cartItems';

export const CartProvider: React.FC<Props> = ({ children }) => {
  const {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    decrementQuantity,
    incrementQuantity,
    loadCart,
  } = useCartReducer();

  //Load cart items from localStorage on initial render
  // useEffect(() => {
  //   const cartItemsFromStorage = localStorage.getItem(CART_STORAGE_KEY);
  //   if (cartItemsFromStorage != undefined) {
  //     loadCart(cartItemsFromStorage);
  //   }
  // }, []);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        clearCart,
        decrementQuantity,
        incrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
