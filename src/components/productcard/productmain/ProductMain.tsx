'use client';

import CartButton from '../../cartButton/CartButton';
import ProductInfo from '../productInfo/ProductInfo';
import ProductCounter from '../productcounter/ProductCounter';
import styles from './productMain.module.scss';
import ProductSlider from '../productslider/ProductSlider';
import useCart from '@/hooks/useCart';
import { FC, useEffect, useState } from 'react';
import { ProductsType } from '../../../mocks/productsType';
import productsJson from '../../../mocks/products.json';
import { fetchData } from '@/services/fetch';

const ProductMain = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const productsApi = await fetchData();
    setProducts(productsApi);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('api:', typeof products);
  const handleAddToCart = () => {
    {
      productsJson.PRODUCTS.map((item) => {
        const cart = {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: 1,
          thumbnail: item.thumbnail,
        };
        addToCart(cart);
        console.log(cart);
      });
    }
  };

  return (
    <>
      <main>
        {productsJson.PRODUCTS.map((product) => {
          return (
            <article className={styles.addtoCartContainer} key={product.id}>
              <div>
                <ProductSlider id={product.id} />
              </div>
              <div>
                <ProductInfo
                  id={product.id}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                />
                <ProductCounter id={product.id} />
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
