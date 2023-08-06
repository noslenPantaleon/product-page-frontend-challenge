import { FC } from 'react';
import styles from './productThumbnails.module.scss';

interface Props {
  slides: string[];
}

const ProductThumbnails: FC<Props> = ({ slides }) => {
  return (
    <section className={styles.productThumnails}>
      {slides.map((slide: any, index) => (
        <img key={index} src={slide} alt={slide.title} id={slide.id} />
      ))}
    </section>
  );
};

export default ProductThumbnails;
