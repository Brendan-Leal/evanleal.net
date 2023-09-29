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
        imgPosition="object-[80%_top]"
        alt="Evan podcasting"
      />
    </>
  );
}
