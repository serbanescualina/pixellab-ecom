import { css } from '@emotion/css';
import { ProductTile } from './ProductTile';

export const ProductGrid = ({ products = [], perRow = 4 }) => {
  if (products.length <= 0) {
    return (
      <div className="flex justify-center">
        <p>There is no products found</p>
      </div>
    );
  }

  const gridCss = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${perRow}, 1fr);
      column-gap: 32px;
    }
  `;

  return (
    <ul className={gridCss}>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <ProductTile product={product}></ProductTile>
          </li>
        );
      })}
    </ul>
  );
};
