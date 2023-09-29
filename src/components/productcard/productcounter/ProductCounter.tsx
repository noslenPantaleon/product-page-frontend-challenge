'use client';
import React, { useState } from 'react';
import styles from './productCounter.module.scss';
import useCart from '@/hooks/useCart';
import Cart from '@/components/cart/Cart';
import { CartItem } from '@/context/reducers/cartReducer';
import { ProductsType } from '../../../mocks/productsType';

interface props {
  id: number;
}

const ProductCounter: React.FC<props> = ({ id }) => {
  const { state, decrementQuantity, incrementQuantity, removeFromCart } =
    useCart();
  const [counter, setCounter] = useState<number>(0);

  const cartId = state.cartItems.filter((val) => val.id === id);
  // console.log('cartId:', typeof cartId);

  const incrementCounter = () => {
    setCounter(counter + 1);

    {
      cartId.map((item) => {
        const cart = {
          id: item.id,
        };

        incrementQuantity(cart.id);
      });
    }
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
    cartId.map((item) => {
      const cart = {
        id: item.id,
        quantity: item.quantity,
      };
      if (cart.quantity < 1 || undefined) {
        removeFromCart(cart.id);
      } else {
        decrementQuantity(cart.id);
      }
    });
  };

  return (
    <section className={styles.counter}>
      <a
        onClick={() => {
          decrementCounter();
        }}
      >
        <img src={'./images/icon-minus.svg'} />
      </a>

      <h5>{counter}</h5>
      {/* {state.cartItems.length == 0 || undefined ? (
        <h5>0</h5>
      ) : (
        <h5>{state.cartItems.map((val) => val.quantity)}</h5>
      )} */}
      <a
        onClick={() => {
          incrementCounter();
        }}
      >
        <img src={'./images/icon-plus.svg'} />
      </a>
    </section>
  );
};

export default ProductCounter;
