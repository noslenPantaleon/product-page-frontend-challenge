'use client';

import { FC, ReactElement, MouseEventHandler } from 'react';
import styles from './cartButton.module.scss';
import Image from 'next/image';

interface Props {
  ButtonName: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: string;
  icon?: string;
}

const CartButton: FC<Props> = ({
  ButtonName,
  onClick = () => {},
  type,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      className={styles.buttonContainer}
    >
      <div className={styles.buttonText}>
        {icon && <img className={styles.icon} src={icon} />}
        {ButtonName}
      </div>
    </button>
  );
};

export default CartButton;
