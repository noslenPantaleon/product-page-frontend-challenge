import { FC } from 'react';
import products from '../../../mocks/products.json';
import ProductGallery from '../productGallery/ProductGallery';

interface Props {
  id: number;
}

const ProductImages: FC<Props> = ({ id }) => {
  const filterProduct = products.PRODUCTS.filter(
    (productId) => productId.id === id
  );

  return filterProduct.map((product: any) => {
    return (
      <article key={product.id}>
        <ProductGallery images={product.images} />
      </article>
    );
  });
};

export default ProductImages;
