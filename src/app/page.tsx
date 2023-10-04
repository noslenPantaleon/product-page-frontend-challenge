import Navbar from '@/components/navbar/Navbar';
import ProductMain from '@/components/productcard/productmain/ProductMain';
import { CartProvider } from '@/context/cartContext';

export default function Home() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <ProductMain />
      </CartProvider>
    </>
  );
}
