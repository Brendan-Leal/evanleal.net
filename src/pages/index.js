import Hero from "@/components/Hero"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <div className="relative">
        <Nav />
        <Hero />

        <div className="md:py-12 bg-black">
          <video className="object-fill md:hidden h-[100dvh]" width="100%" controls={true} >
            <source src="/videos/mobile-trailer.mp4" />
          </video>

          <video className="hidden md:block" controls={true}>
            <source src="/videos/trailer-full-width.mp4" />
            {/* <source src="/videos/trailer-full-width.webm" /> */}
          </video>
        </div>

        {/* Quote  */}
        <div className="font-unna text-base text-center flex items-center justify-center gap-2 my-6 px-12">
          <div className="w-[2px] h-[100px] bg-off-white "></div>

          <div className="flex-col">
            <p>
              &quot;The mystery of human existence lies not in just staying alive, but in finding something to live for.&quot;
            </p>
            <p>- Fyodor Dostoyevsky</p>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
