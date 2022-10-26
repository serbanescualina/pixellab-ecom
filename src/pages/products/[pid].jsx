// /products/2 /products/5 /products/21

import Head from 'next/head';
import { useRouter } from 'next/router';
import { CartControl, ContinueShopping } from '../../components/cart';
import { Layout } from '../../layouts';
import { BiLoaderCircle } from 'react-icons/bi';
import { useProduct } from '../../hooks';
import ProductReviews from './ProductReviews';
import Image from 'next/image';
import { AddToCart } from '../../components/catalog';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { product, status } = useProduct(pid);

  if (product === null && status !== '404') {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
      </div>
    );
  }

  if (status === '404') {
    return <span>Product not found</span>;
  }

  const { id, title, description, price, image, rating } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  }).format(price);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container px-4 lg:px-0 mx-auto flex justify-between">
            <ContinueShopping></ContinueShopping>

            <CartControl></CartControl>
          </header>

          <section className="mt-16 container px-4 lg:px-0 mx-auto grid gap-8 grid-cols-12">
            <div className="col-start-1 col-span-5">
              <Image
                alt={`Image of ${title}`}
                className="block w-full"
                src={image}
                width="650"
                height="650"
                objectFit="contain"
              ></Image>
            </div>
            <header className="col-start-7 col-span-6 pt-12">
              <h1 className="text-2xl uppercase font-medium">{title}</h1>
              <ProductReviews rate={rating.rate} count={rating.count} />

              <p className="mt-12">{description}</p>

              <div className="mt-12">
                <span className="text-3xl leading-9 font-bold">
                  {formattedPrice}
                </span>
              </div>

              <div className="mt-12">
                <AddToCart product={product}></AddToCart>
              </div>
            </header>
          </section>
          <section className="border-t"></section>
          <section className="container px-4 lg:px-0 mx-auto">jos</section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
