'use client';
import { useId } from 'react';
import styles from './navbar.module.scss';
import Avatar from '../avatar/Avatar';
import useCart from '@/hooks/useCart';

const Navbar = () => {
  const { state } = useCart();
  const cartCheckboxId = useId();

  return (
    <header>
      <nav className={styles.navbarContainer}>
        <img src='./images/logo.svg'></img>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* <div className={styles.cartSection}>
          <label htmlFor={cartCheckboxId}>
            <img src='./images/icon-cart.svg' alt='cart-icon' />
          </label>
          <input id={cartCheckboxId} type='checkbox' hidden></input>

          <Avatar pic={'./images/image-avatar.png'} />
        </div>
        <span>{state.cartItems.map((item) => item.quantity)}</span> */}
      </nav>
    </header>
  );
};

export default Navbar;
