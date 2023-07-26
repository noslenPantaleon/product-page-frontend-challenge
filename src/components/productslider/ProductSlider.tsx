import { FC } from 'react';
import styles from './productSlider.module.scss';
import ProductThumbnails from './ProductThumbnails';
import products from '../../mocks/products.json';

interface Props {
  id: number;
}

const ProductSlider: FC<Props> = ({ id }) => {
  return products.products
    .filter((productId) => productId.id === id)
    .map((product: any) => {
      return (
        <article key={product.id}>
          <img className={styles.imageProduct} src={product.thumbnail} />
          <section>
            <ProductThumbnails slides={product.images} />
          </section>
        </article>
      );
    });
};

export default ProductSlider;
