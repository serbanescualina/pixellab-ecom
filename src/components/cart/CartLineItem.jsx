import { css } from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useProduct } from '../../hooks';
import ProductReviews from '../../pages/products/ProductReviews';
import { AppContext } from '../../pages/_app';
import { MdRemoveCircle } from 'react-icons/md';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const removeItem = (cart) => {
    cart.products = cart.products.filter((product) => {
      return product.productId !== productId;
    });
    setCart(cart.products);
  };

  const { image, price, id, title, rating } = cartItem;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);
  const gridFormat = css`
    display: grid;
    grid-template-areas: 'product price quantity total';
    grid-template-columns: 47% 13% 18% 17% 5%;
  `;

  const productCss = css`
    grid-area: product;
  `;

  const priceCss = css`
    grid-area: price;
  `;

  const quantityCss = css`
    grid-area: quantity;
  `;

  const totalCss = css`
    grid-area: total;
  `;

  return (
    <tr className={`${gridFormat} items-center w-full border p-2`}>
      <td className={`${productCss} flex gap-5 items-center `}>
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              src={image}
              width="100"
              height="100"
              objectFit="contain"
              alt=""
            ></Image>
          </a>
        </Link>

        <div className="flex flex-col justify-center w-72">
          <Link href={`/products/${id}`}>
            <a className="w-3/4" title={title}>
              {title}
            </a>
          </Link>
          <div className="flex gap-4 items-center mt-3">
            <ProductReviews
              rate={rating.rate}
              count={rating.count}
            ></ProductReviews>
          </div>
        </div>
      </td>
      <td className={`${priceCss} text-center`}>${price}</td>
      <td className={`${quantityCss} text-center`}>
        <div className="border">
          <button
            type="button"
            title="Decrease"
            className="p-4"
            onClick={() => {
              alterProduct(id, -1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            type="button"
            title="Increase"
            className="p-4"
            onClick={() => {
              alterProduct(id, 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td className={`${totalCss} text-center`}>{formattedPrice}</td>
      <td>
        {' '}
        <button
          type="button"
          title="Remove item"
          onClick={() => removeItem(cart)}
        >
          <MdRemoveCircle size="24"></MdRemoveCircle>
        </button>
      </td>
    </tr>
  );
};
