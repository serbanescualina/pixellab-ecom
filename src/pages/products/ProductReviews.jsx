import { css } from '@emotion/css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function ProductReviews({ rate, count }) {
  const fullStar = Math.floor(rate);
  const procentageStar = Number((rate - fullStar).toFixed(2));
  const starToDisplay = 5;
  const procentage = 16 * procentageStar;
  const procentageStarClass = css`
    overflow: hidden;
    width: ${procentage}px;
  `;
  const style = { color: '#BEBEBE' };
  return (
    <div className="flex items-center gap-4 mt-3">
      <span className="flex">
        {Array(starToDisplay)
          .fill('_')
          .map((_, index) => {
            return index === fullStar && procentageStar !== 0 ? (
              <div className="relative">
                <span
                  className={procentageStarClass + ' absolute left-0 top-0'}
                >
                  <AiFillStar />
                </span>
                <AiFillStar style={style} />
              </div>
            ) : index < fullStar ? (
              <AiFillStar />
            ) : (
              <AiFillStar style={style} />
            );
          })}
      </span>
      <span>({count} Reviews)</span>
    </div>
  );
}

export default ProductReviews;
