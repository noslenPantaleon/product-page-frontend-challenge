import React, { useState } from 'react';
import styles from '../productGallery/productGallery.module.scss';
import ProductSlider from '../productslider/ProductSlider';
import useScreenWidth from '@/hooks/useScreenWidth';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [toggleGallery, setToggleGallery] = useState<boolean>(false);

  const screenSize = useScreenWidth(700);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleFullScreenClick = () => {
    setToggleGallery(!toggleGallery);
  };

  return (
    <section className={styles.productGallery}>
      <div>
        {screenSize ? (
          <ProductSlider images={images} />
        ) : (
          <img
            src={selectedImage}
            alt='Product'
            className={styles.imageProduct}
            onClick={() => handleFullScreenClick()}
          />
        )}
      </div>
      <div className={styles.thumbnailContainer}>
        {!screenSize &&
          images.map((image, index) => (
            <div key={index} onClick={() => handleThumbnailClick(image)}>
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className={styles.thumbnail}
              />
            </div>
          ))}
      </div>
      <div>{toggleGallery && <ProductSlider images={images} />}</div>
    </section>
  );
};

export default ProductGallery;
