import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../..';

export const RelatedProducts = ({ productCategory, productId }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/products/category/${productCategory}?limit=4`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, [productCategory]);

  if (products === null) {
    return <></>;
  }

  return (
    <div className="text-center mt-12">
      <h1 className="text-2xl font-bold">Related Products</h1>
      <div className="flex justify-center items-center gap-5 mt-16">
        {products.map((product) => {
          const { id, title, price, category, image } = product;
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(price);
          0;

          console.log(productCategory);
          if (category === productCategory && id !== productId) {
            return (
              <div
                className="flex justify-center items-center text-center"
                key={id}
              >
                <div className="mb-12">
                  <div className="relative">
                    <Link href={`/products/${id}`}>
                      <a className="cursor-pointer">
                        <div className="relative z-[-1]">
                          <Image
                            src={image}
                            width={500}
                            height={200}
                            objectFit="contain"
                            alt={`Image for product ${title}`}
                          />
                        </div>
                      </a>
                    </Link>
                  </div>

                  <Link href={`/products/${id}`}>
                    <a className="cursor-pointer">
                      <h1 className="text-zinc-400 uppercase text-base w-5/6 m-auto">
                        {title}
                      </h1>
                    </a>
                  </Link>
                  <span className="font-bold text-2xl">{formattedPrice}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
