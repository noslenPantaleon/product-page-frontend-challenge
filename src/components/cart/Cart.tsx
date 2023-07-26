'use client';
import { useId } from 'react';
import CartButton from '../cartButton/CartButton';
import styles from './cart.module.scss';
import useCart from '@/hooks/useCart';
import { CartItem } from '../../context/reducers/cartReducer';

const CartItems = ({ thumbnail, title, price, quantity, id }: CartItem) => {
  const { removeFromCart, clearCart } = useCart();
  const total = price * quantity;

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
        <a onClick={clearCart}>
          <img src='./images/icon-delete.svg' width={20} height={20}></img>
        </a>
      </div>
    </li>
  );
};

const Cart = () => {
  const { state } = useCart();
  const cartCheckboxId = useId();

  return (
    <>
      <label className={styles.cartButton} htmlFor={cartCheckboxId}>
        <img src='./images/icon-cart.svg' alt='cart-icon' />
        <span>{state.cartItems.map((item) => item.quantity)}</span>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden></input>
      <aside className={styles.cart}>
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
        <div>
          <CartButton ButtonName='Checkout' />
        </div>
      </aside>
    </>
  );
};
export default Cart;
