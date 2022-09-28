import Head from 'next/head';
import { Layout } from '../layouts/Layout';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Layout>
        <main>hello from next</main>
      </Layout>
    </>
  );
};

// este obligatoriu sa returnam un default export
// pentru fiecare pagina
export default ContactPage;
