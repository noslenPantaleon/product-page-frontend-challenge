'use client';
import { useId } from 'react';
import CartButton from '../cartButton/CartButton';
import styles from './cart.module.scss';
import useCart from '@/hooks/useCart';
import { CartItem } from '../../context/reducers/cartReducer';

const CartItems = ({ thumbnail, title, price, quantity, id }: CartItem) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };
  const total = price * quantity;

  return (
    <ul>
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
    </ul>
  );
};

const Cart = () => {
  const { state } = useCart();
  const cartCheckboxId = useId();
  return (
    <>
      <label className={styles.cartButton} htmlFor={cartCheckboxId}>
        <img
          className={styles.cartIcon}
          src='./images/icon-cart.svg'
          alt='cart-icon'
        />
        <h3 className={state.cartItems.length <= 0 ? '' : styles.circle}>
          {state.cartItems?.map((item) => item.quantity)}
        </h3>
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden></input>
      <aside className={styles.cart}>
        {state.cartItems?.length < 1 ? (
          <h4>Your cart is empty now</h4>
        ) : (
          <div>
            <ul>
              {state?.cartItems?.map((product: CartItem, index) => (
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
            <div className={styles.checkoutButton}>
              <CartButton ButtonName='Checkout' />
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
export default Cart;
