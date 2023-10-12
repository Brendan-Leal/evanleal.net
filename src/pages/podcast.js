import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Logo from "@/components/Logo";
import Head from "next/head";
import Image from "next/image";
const parseString = require("xml2js").parseString;

export default function Podcast({ rssData }) {
  console.log(rssData);
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

      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto font-unna p-4 text-center gap-4 lg:gap-5 max-w-xl md:max-w-3xl mx-auto lg:max-w-5xl lg:text-left">
        <p className="text-base lg:text-desktop-base col-span-full lg:col-span-3">
          Conversations contemplating the essence of what it means to exist &
          pursue a life well-lived through discussions on love, death,
          philosophy & connection.
        </p>

        <div className="hidden lg:block w-full h-[1px] bg-off-white col-span-3"></div>

        <div className="col-span-full lg:col-span-1 lg:row-start-3">
          <h2 className="text-2xl lg:hidden">Latest Episode</h2>

          <div className="w-full h-[25vh] md:h-[40vh] lg:h-full relative flex flex-col justify-end">
            <a href={rssData.href} target="_blank">
              <Image
                src="/img/pod-in-park.png"
                fill
                objectFit="cover"
                objectPosition="bottom right"
                alt="existence podcast cover art"
              />
              <p className="text-3xl md:text-4xl lg:text-desktop-lg font-sultan font-bold text-title-red drop-shadow-[2px_2px_3px_#EF9F20] tracking-[1rem] md:tracking-[2rem] lg:tracking-[.5rem] absolute top-[10%] left-0 right-0 mx-auto text-center">
                Existence
              </p>

              <div className="relative bg-overlay-black opacity-80 w-full h-7 md:h-12 flex justify-center items-center text-base md:text-lg lg:hidden">
                <p className="absolute z-50">{rssData.title}</p>
              </div>
            </a>
          </div>
        </div>

        <div className="hidden lg:block col-span-2 text-left">
          <h2 className="text-desktop-xl">Latest Episode:</h2>
          <p className="text-base text-left">
            {rssData.date} | {rssData.title}
          </p>
          <br />
          <p className="text-base col-span-2">{rssData.description}</p>
        </div>

        <div className="lg:flex flex-col justify-between items-end hidden">
          <Logo
            src="/img/spotify-white.png"
            alt=""
            url="https://open.spotify.com/show/1lKHRsuf2qen2PlnkjEFNV?si=7c44632705e64f66"
            size={40}
            className="hover:scale-125 transition-transform"
          />
          <Logo
            src="/img/youtube-white.png"
            alt=""
            url="https://www.youtube.com/@ExistencePod"
            size={40}
            className="hover:scale-125 transition-transform"
          />
          <Logo
            src="/img/apple-white.png"
            alt=""
            url="https://podcasts.apple.com/us/podcast/existence/id1636717921"
            size={40}
            className="hover:scale-125 transition-transform"
          />
        </div>
        <h2 className="text-2xl col-span-full lg:hidden">Featured Episodes</h2>

        <div className="relative w-full pt-[50%] lg:col-start-1 lg:col-end-3">
          <Image
            src="/img/sn-2.png"
            fill
            objectFit="cover"
            alt="thumbnail season 2 trailer"
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>

        <div className="w-full relative pt-[50%] lg:col-start-3 lg:col-end-5">
          <Image
            src="/img/healthy-relationships.png"
            alt="thumbnail healthy relationships episode"
            objectFit="cover"
            objectPosition="top"
            fill
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
        <div className="w-full relative pt-[50%] lg:col-start-1 lg:col-end-3">
          <Image
            src="/img/dd-laying.png"
            fill
            objectFit="cover"
            alt="thumbnail death & disability"
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
        <div className="w-full relative pt-[50%] lg:col-start-3 lg:col-end-5">
          <Image
            src="/img/controversial-opinions.png"
            fill
            objectFit="cover"
            objectPosition="top"
            alt="thumbnail controversial opinions episode"
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const RSS_URL =
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCF2rs7gcb9ADVnMrYJu_h2g";

  const res = await fetch(RSS_URL);
  const xmlAsString = await res.text();
  let data = {};
  parseString(xmlAsString, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      const regEx = /^.*?\n\n/;
      const entry = result.feed.entry[0];
      let description = entry["media:group"][0]["media:description"][0];

      data.description = description.match(regEx)[0];
      data.title = entry.title[0];
      data.date = new Date(entry.published[0]).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      data.href = entry.link[0]["$"].href;
    }
  });

  return {
    props: {
      rssData: data,
    },
  };
}
