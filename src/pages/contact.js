import Heading from "@/components/Heading";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Heading
        pageTitle="Contact"
        headingText="Contact"
        bgImg="/img/contact-heading-img.png"
        alt="evan connecting with someone"
        imgPosition="object-[bottom_right]"
      />
    </>
  );
}
