import { css } from '@emotion/css';
import { useContext } from 'react';
import { AppContext } from '../../pages/_app';
import { CartLineItem } from './CartLineItem';

export const CartItems = () => {
  const { cart } = useContext(AppContext);

  if (cart === null) {
    return <></>;
  }

  const { products } = cart;

  if (products === undefined) {
    return;
  }

  if (products.length <= 0) {
    return <></>;
  }

  const gridFormat = css`
    display: grid;
    grid-template-areas: 'space product price quantity total';
    grid-template-columns: 5% 47% 13% 18% 17%;
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
    <table className="flex justify-center items-center flex-col w-full">
      <thead className="w-full">
        <tr className={`${gridFormat} items-center border-b w-full mb-5`}>
          <th className={`${productCss}`}>Product</th>
          <th className={`${priceCss}`}>Price</th>
          <th className={`${quantityCss}`}>Quantity</th>
          <th className={`${totalCss}`}>Total</th>
        </tr>
      </thead>

      <tbody className="w-full flex flex-col gap-5 items-center justify-center">
        {products.map((product) => {
          return (
            <CartLineItem
              product={product}
              key={product.productId}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
