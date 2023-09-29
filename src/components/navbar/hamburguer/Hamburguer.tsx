import React from 'react';
import styles from './hamburguer.module.scss';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

const HamburgerMenu: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`${styles['hamburgerMenu']} ${
          isOpen ? styles['open'] : styles['close']
        }`}
        role='button'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
