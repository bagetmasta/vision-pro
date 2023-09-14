import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/hero/hero";
import PhonesList from "../components/phones/phones";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Vision-Pro</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <PhonesList />
    </Fragment>
  );
}

export default HomePage;
