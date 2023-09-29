import React, { useState } from 'react';
import styles from './productSlider.module.scss';
import useScreenWidth from '@/hooks/useScreenWidth';

interface ProductGalleryProps {
  images: string[];
}

const ProductSlider: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [close, setClose] = useState<boolean>(false);
  const screenSize = useScreenWidth(700);

  const handleClose = () => {
    setClose(true);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSelectedImage(images[selectedImageIndex]);
  };

  const handleBack = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setSelectedImage(images[selectedImageIndex]);
  };

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <section>
      {!close ? (
        <div className={styles.productSlider}>
          <img
            onDrag={() => handleNext()}
            src={selectedImage}
            alt='Product'
            className={styles.imageSlider}
          />
          <div>
            <svg
              onClick={() => handleBack()}
              className={styles.svgIconBack}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              transform='matrix(-1, 0, 0, 1, 0, 0)'
            >
              <circle cx='12' cy='12' r='10' fill='white' />
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z'
                  fill='#D56B2B'
                ></path>{' '}
              </g>
            </svg>
          </div>
          <div className={`${styles.svgIconNext} ${styles.circleBase}`}>
            <svg
              onClick={() => handleNext()}
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='12' cy='12' r='10' fill='white' />
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                {' '}
                <path
                  d='M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z'
                  fill='#D56B2B'
                ></path>{' '}
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={styles.svgIconClose}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              fill='#D56B2B'
              strokeLinecap='round'
              strokeLinejoin='round'
              onClick={() => {
                handleClose();
              }}
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
              <path d='M18 6l-12 12' fill='#D56B2B'></path>
              <path d='M6 6l12 12' fill='#D56B2B'></path>
            </svg>
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
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default ProductSlider;
