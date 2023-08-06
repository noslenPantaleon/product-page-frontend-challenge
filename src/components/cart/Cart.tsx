'use client';
import { useId, useState, useEffect } from 'react';
import CartButton from '../cartButton/CartButton';
import styles from './cart.module.scss';
import useCart from '@/hooks/useCart';
import { CartItem } from '../../context/reducers/cartReducer';

const CartItems = ({ thumbnail, title, price, quantity, id }: CartItem) => {
  const { state, removeFromCart } = useCart();
  const cartQuantity = state.cartItems.map((item) => item.quantity);
  console.log('cartlength:', cartQuantity);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
  const total = price * quantity;
  // const clearCart = state.cartItems.length <= 0 && handleRemoveFromCart();

  return (
    <li>
      <div className={styles.productList}>
        <img src={thumbnail} width={60} height={60}></img>
        <div>
          <p>{title}</p>
          <h3>
            ${price} x {quantity} <span> {total}</span>
          </h3>
        </div>
        <a onClick={handleRemoveFromCart}>
          <img src='./images/icon-delete.svg' width={20} height={20}></img>
        </a>
      </div>
    </li>
  );
};

const Cart = () => {
  const { state } = useCart();
  const cartCheckboxId = useId();
  const quantities = state.cartItems.map((item) => item.quantity);
  console.log('quantities:', quantities);

  return (
    <>
      <label className={styles.cartButton} htmlFor={cartCheckboxId}>
        <img src='./images/icon-cart.svg' alt='cart-icon' />
        <span>{state.cartItems.map((item) => item.quantity)}</span>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden></input>
      <aside className={styles.cart}>
        {state.cartItems.length <= 0 ? (
          <h4>Your cart is empty now</h4>
        ) : (
          <div>
            <ul>
              {state.cartItems?.map((product: CartItem, index) => (
                <CartItems
                  key={index}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  id={product.id}
                />
              ))}
            </ul>
            <CartButton ButtonName='Checkout' />
          </div>
        )}
      </aside>
    </>
  );
};
export default Cart;
