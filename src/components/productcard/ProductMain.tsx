'use client';
import { useContext } from 'react';
import CartButton from '../cartButton/CartButton';
import ProductInfo from './ProductInfo';
import ProductCounter from '../productcounter/ProductCounter';
import styles from './productMain.module.scss';
import { PRODUCTS } from '../../mocks/products';
import { CartContext } from '../../context/CountReducer';
import ProductSlider from '../productslider/ProductSlider';

const ProductMain = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item: any) => {
    addToCart(item);
    console.log(item);
  };

  return PRODUCTS.map((product) => {
    return (
      <article key={product.id}>
        <div className={styles.productInfo}>
          <ProductSlider id={1} />
          <div>
            <ProductInfo id={1} />
            <section className={styles.addtoCartContainer}>
              <ProductCounter />
              <CartButton
                icon={'../images/icon-cart.svg'}
                ButtonName={'Add to cart'}
                onClick={() => {
                  handleAddToCart({ id: product.id, name: product.title });
                }}
              />
            </section>
          </div>
        </div>
      </article>
    );
  });
};

export default ProductMain;
