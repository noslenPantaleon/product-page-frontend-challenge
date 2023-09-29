'use client';

import styles from './navbar.module.scss';
import useCart from '@/hooks/useCart';
import Cart from '../cart/Cart';
import Login from '../login/Login';
import React, { useState } from 'react';
import SideMenu from './sidemenu/SideMenu';
import HamburgerMenu from './hamburguer/Hamburguer';

const Navbar = () => {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header>
      <nav className={styles.navbarContainer}>
        {isOpen && <SideMenu />}
        <div className={styles.burguer} onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <img className={styles.logo} src='./images/logo.svg' alt='logo' />
        <ul className={styles.desktopMenu}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles.loginCart}>
          <Cart />
          <Login />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* <header>
<div className={styles.burguer} onClick={() => setIsOpen(!isOpen)}>
  <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
</div>
{isOpen ? (
  <div>
    <SideMenu />
  </div>
) : (
  <nav className={styles.navbarContainer}>
    <img className={styles.logo} src='./images/logo.svg' alt='logo' />
    <ul>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
      <div className={styles.loginCart}>
        <Cart />
        <Login />
      </div>
    </ul>
  </nav>
)}
</header> */
}
