import { FC } from 'react';
import styles from './productInfo.module.scss';
import products from '../../../mocks/products.json';

interface Props {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  discountPercentage: number;
  price: number;
}

const ProductInfo: FC<Props> = ({
  id,
  title,
  subtitle,
  description,
  price,
  discountPercentage,
}) => {
  const savings = () => {};
  console.log(id);

  return (
    <section className={styles.productInfoContainer}>
      <article key={id}>
        <h5>{subtitle.toLocaleUpperCase()}</h5>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className={styles.price}>
          <h3>${price}</h3>
          <h5>${discountPercentage}%</h5>
        </div>
        <h6>$250</h6>
      </article>
    </section>
  );
};

export default ProductInfo;
