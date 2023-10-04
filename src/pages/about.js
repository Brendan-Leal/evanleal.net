import Heading from "@/components/Heading";
import Image from "next/image";
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
        imgPosition="object-bottom"
      />

      <div className="font-unna mx-4 md:mx-20 my-2 md:my-6 text-center md:text-left ">
        <h6 className="text-lg md:text-desktop-xl m-3">
          Traveler. Thinker. Creative. Veteran.
        </h6>
        <div className="flex gap-6 ">
          <div className="hidden md:block relative w-[400px] md:h-[250px]">
            <Image
              src="/img/train-ride.png"
              fill={true}
              objectFit="cover"
              objectPosition="right"
              alt="evan and his partner on a train ride"
            />
          </div>
          <p className="text-base md:text-desktop-base md:w-2/3">
            I simply love genuine people and engaging conversation. So whether
            you're a guest on the podcast, seeking a skillful editor, or just
            looking to connect, my interests lie in collaborating with friendly,
            like-minded people in pursuit of producing beautiful and captivating
            work. Over the years I've fostered the knowledge, expertise &
            equipment with the purpose of crafting high quality, meaningful and
            artistically distinct content. Experienced in directing, editing,
            sounds design and overall podcast & film production.
          </p>
        </div>

        <h6 className="text-lg md:text-desktop-xl m-3">
          Host. Editor. Director. Producer.
        </h6>
        <div className="flex gap-6 ">
          {/* TODO: get content */}
          <p className="text-base md:text-desktop-base md:w-2/3 text-red-400">
            Lorem ipsum dolor sit amet consectetur. Convallis hac massa amet
            facilisis id vel pulvinar. Massa odio egestas consectetur nulla
            nullam vitae euismod sed. Ac rhoncus at purus viverra semper.
            Pretium nulla quis id nisl hendrerit. Tellus sagittis aliquet ut
            vitae urna accumsan habitant dis natoque.
          </p>

          <div className="hidden md:block relative w-[400px] md:h-[250px]">
            <Image
              src="/img/evan-cross-arm.png"
              fill={true}
              objectFit="cover"
              alt="evan and his partner on a train ride"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// {
//   /* <div className="w-[423px] h-[360px] relative">
//       <Image
//       />
//     </div> */
// }
