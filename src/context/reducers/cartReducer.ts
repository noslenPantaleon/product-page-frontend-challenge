export const initialState: CartState = {
  cartItems: [],
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

export type CartState = {
  cartItems: CartItem[];
};

type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'DECREMENT_QUANTITY'; payload: number }
  | { type: 'INCREMENT_QUANTITY'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

export type CartContextType = {
  state: CartState;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  decrementQuantity: (id: number) => void;
  incrementQuantity: (id: number) => void;
  clearCart: () => void;
};

// update localStorage with state for cart
export const updateLocalStorage = (state: CartState) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

export const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems?.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems?.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems?.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + action.payload }
            : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems?.map((item) =>
          item.id === action.payload && item.quantity !== 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems?.filter(
          (item) => item.id !== action.payload
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    case 'LOAD_CART':
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};
