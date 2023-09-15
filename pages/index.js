import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import IPhoneList from "../components/iPhone-list/iPhone-list";
import ProductList from "../components/product-list/product-list";
import { getAllProducts } from "../helpers/api-utils";

function HomePage({ products }) {
  return (
    <Fragment>
      <Head>
        <title>Vision-Pro</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <IPhoneList products={products} />
      <ProductList products={products} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
    revalidate: 1800,
  };
}

export default HomePage;
