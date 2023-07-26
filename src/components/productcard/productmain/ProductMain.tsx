'use client';

import CartButton from '../../cartButton/CartButton';
import ProductInfo from '../productInfo/ProductInfo';
import ProductCounter from '../../productcounter/ProductCounter';
import styles from './productMain.module.scss';
import ProductSlider from '../../productslider/ProductSlider';
import useCart from '@/hooks/useCart';
import { FC } from 'react';
import { ProductsType } from '../../../mocks/productsType';
import productsJson from '../../../mocks/products.json';

const ProductMain = () => {
  const { state, addToCart, removeFromCart, clearCart } = useCart();

  const handleAddToCart = () => {
    {
      state.cartItems.map((item) => {
        const cart = {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1,
          thumbnail: item.thumbnail,
        };
        addToCart(cart);
      });
    }
  };

  return (
    <>
      <main>
        {productsJson.products.map((product) => {
          return (
            <article className={styles.addtoCartContainer} key={product.id}>
              <div>
                <ProductSlider id={product.id} />
              </div>
              <div>
                <ProductInfo id={product.id} />
                <ProductCounter />
                <CartButton
                  icon={'../images/icon-cart.svg'}
                  ButtonName={'Add to cart'}
                  onClick={handleAddToCart}
                />
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default ProductMain;
