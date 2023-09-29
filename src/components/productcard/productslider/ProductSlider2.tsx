import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleFullscreenToggle = () => {
    setFullscreen(!fullscreen);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={`product-gallery ${fullscreen ? 'fullscreen' : ''}`}>
      <div className='main-image'>
        <img src={images[selectedImageIndex]} alt='Product' />
        <div className='controls'>
          <button onClick={handlePrevImage}>&lt;</button>
          <button onClick={handleNextImage}>&gt;</button>
          <button onClick={handleFullscreenToggle}>
            {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>
      <div className='thumbnail-container'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${
              selectedImageIndex === index ? 'selected' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .product-gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }
        .product-gallery.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
        }
        .main-image {
          position: relative;
          margin-bottom: 20px;
        }
        .controls {
          position: absolute;
          display: flex;
          align-items: center;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
        }
        .thumbnail-container {
          display: flex;
        }
        .thumbnail {
          border: 2px solid transparent;
          cursor: pointer;
          margin: 0 10px;
          transition: border-color 0.3s ease-in-out;
        }
        .thumbnail.selected {
          border-color: #333;
        }
      `}</style>
    </div>
  );
};

export default ProductGallery;
