import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { RiShoppingCartLine } from 'react-icons/ri';

export const CartControl = () => {
  const { cart } = useContext(AppContext);
  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  const cartQty = products.reduce((cartQty, product) => {
    const { quantity } = product;

    cartQty += quantity;

    return cartQty;
  }, 0);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-20 h-24 flex justify-center items-center"
            title="Cart"
          >
            <RiShoppingCartLine size={25}></RiShoppingCartLine>
          </a>
        </Link>
      </li>
    </ul>
  );
};
