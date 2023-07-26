'use client';
import React, { useState } from 'react';
import styles from './productCounter.module.scss';
import useCart from '@/hooks/useCart';

const ProductCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const { state, addToCart, removeFromCart, clearCart } = useCart();

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    state.cartItems.map((item) => {
      const cart = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
        thumbnail: item.thumbnail,
      };
      // incrementCounter();
      addToCart(cart);
    });
  };

  const handleDeleteFromCart = () => {
    state.cartItems.map((item) => {
      const cart = {
        id: item.id,
      };
      // decrementCounter();
      removeFromCart(cart.id);
    });
  };

  return (
    <section className={styles.counter}>
      <a
        onClick={() => {
          handleDeleteFromCart();
        }}
      >
        <img src={'./images/icon-minus.svg'} />
      </a>

      <h5>{state.cartItems.map((value) => value.quantity)}</h5>
      <a
        onClick={() => {
          handleAddToCart();
        }}
      >
        <img src={'./images/icon-plus.svg'} />
      </a>
    </section>
  );
};

export default ProductCounter;
