'use client';

import CartButton from '../../cartButton/CartButton';
import ProductInfo from '../productInfo/ProductInfo';
import ProductCounter from '../productcounter/ProductCounter';
import styles from './productMain.module.scss';
import ProductImages from '../productsImages/ProductImages';
import useCart from '@/hooks/useCart';
import { FC, useEffect, useState } from 'react';
import { ProductsType } from '../../../mocks/productsType';
import productsJson from '../../../mocks/products.json';
import { fetchData } from '@/services/fetch';

const ProductMain = () => {
  const {
    state,
    addToCart,
    decrementQuantity,
    incrementQuantity,
    removeFromCart,
  } = useCart();
  const [products, setProducts] = useState<ProductsType>();
  const [counter, setCounter] = useState<number>(0);

  const getProducts = async () => {
    const productsApi = await fetchData();
    setProducts(productsApi);
    console.log('products:', products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = () => {
    if (counter > 0) {
      {
        productsJson.PRODUCTS.map((item) => {
          const cart = {
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: counter,
            thumbnail: item.thumbnail,
          };
          addToCart(cart);
          // console.log(cart);
        });
      }
    }
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
    state.cartItems?.map((item) => {
      const cart = {
        id: item.id,
        quantity: item.quantity,
      };
      incrementQuantity(cart.id);
    });
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    state.cartItems.map((item) => {
      const cart = {
        id: item.id,
        quantity: item.quantity,
      };
      if (cart.quantity < 1 || undefined) {
        removeFromCart(cart.id);
      } else {
        decrementQuantity(cart.id);
      }
    });
  };

  return (
    <>
      <main>
        {productsJson.PRODUCTS.map((product) => {
          return (
            <article className={styles.addtoCartContainer} key={product.id}>
              <div>
                <ProductImages id={product.id} />
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
                {/* <ProductCounter id={product.id} /> */}
                <section className={styles.counter}>
                  <a
                    onClick={() => {
                      decrementCounter();
                    }}
                  >
                    <img src={'./images/icon-minus.svg'} />
                  </a>

                  <h5>{counter}</h5>
                  {/* {state.cartItems.length == 0 || undefined ? (
        <h5>0</h5>
      ) : (
        <h5>{state.cartItems.map((val) => val.quantity)}</h5>
      )} */}
                  <a
                    onClick={() => {
                      incrementCounter();
                    }}
                  >
                    <img src={'./images/icon-plus.svg'} />
                  </a>
                </section>
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
