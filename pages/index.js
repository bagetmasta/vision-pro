import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Vision-Pro</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
    </Fragment>
  );
}

export default HomePage;
