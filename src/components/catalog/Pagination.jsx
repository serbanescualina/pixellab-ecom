import { useEffect, useState } from 'react';

export const Pagination = ({ products, setPaginatedProducts }) => {
  const [pagination, setPagination] = useState({
    perPage: 8,
    page: 1,
    total: 0,
  });

  useEffect(() => {
    setPagination({
      perPage: pagination.perPage,
      page: pagination.page,
      total: products.length,
    });
  }, [products, setPagination, pagination.perPage, pagination.page]);

  useEffect(() => {
    const { total, page, perPage } = pagination;

    if (total === 0) {
      return;
    }

    const newProducts = [...products].splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newProducts);
  }, [pagination, setPaginatedProducts]);

  const { perPage, page, total } = pagination;
  const pagesCount = Math.ceil(total / perPage);

  return (
    <ul className="flex gap-2 justify-center items-center">
      {Array(pagesCount)
        .fill('_')
        .map((_, index) => {
          const i = index + 1;

          return (
            <li
              key={index}
              className={`border py-2 px-3 mb-2 cursor-pointer${
                i === page ? 'font-bold bg-black text-white ' : ''
              }`}
              onClick={() => {
                if (i === page) {
                  return;
                }

                setPagination({
                  ...pagination,
                  page: i,
                });
              }}
            >
              {i}
            </li>
          );
        })}
    </ul>
  );
};
