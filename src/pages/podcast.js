import Heading from "@/components/Heading";
import Head from "next/head";

export default function Podcast() {
  return (
    <>
      <Head>
        <title>Existence Podcast</title>
      </Head>

      <Heading
        pageTitle="Existence Podcast"
        headingText="Existence"
        bgImg="/img/podcast-header-img.png"
        position="80%"
        alt="Evan podcasting"
      />
    </>
  );
}
