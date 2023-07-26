import { FC } from 'react';
import styles from './productInfo.module.scss';
import products from '../../../mocks/products.json';

interface Props {
  id: number;
}

const ProductInfo: FC<Props> = ({ id }) => {
  const savings = () => {};
  console.log(id);

  return (
    <section className={styles.productInfoContainer}>
      {products.products
        ?.filter((idproject) => idproject.id === id)
        .map((productdetail) => {
          return (
            <article key={productdetail.id}>
              <h5>{productdetail.subtitle.toLocaleUpperCase()}</h5>
              <h1>{productdetail.title}</h1>
              <h2>{productdetail.description}</h2>
              <div className={styles.price}>
                <h3>${productdetail.price}</h3>
                <h5>${productdetail.discountPercentage}%</h5>
              </div>
              <h6>$250</h6>
            </article>
          );
        })}
    </section>
  );
};

export default ProductInfo;
