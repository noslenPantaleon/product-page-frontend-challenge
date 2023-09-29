import styles from './styles/page.module.scss';
import Navbar from '@/components/navbar/Navbar';
import ProductMain from '@/components/productcard/productmain/ProductMain';
import { CartProvider } from '@/context/cartContext';
import Cart from '@/components/cart/Cart';
import Login from '@/components/login/Login';

export default function Home() {
  return (
    <>
      <CartProvider>
        <Navbar />
        {/* <Cart />
        <Login /> */}
        <ProductMain />
      </CartProvider>
    </>
  );
}
