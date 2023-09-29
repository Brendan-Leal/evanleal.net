import Heading from "@/components/Heading";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Heading
        pageTitle="About"
        headingText="About Evan"
        bgImg="/img/about-heading-img.png"
        alt="Evan in a bed of flowers"
      />
    </>
  );
}
