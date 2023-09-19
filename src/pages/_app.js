import '@/styles/globals.css'

import localFont from 'next/font/local'
const sultan = localFont({
  src: '../../public/fonts/Sultan.otf',
  variable: '--font-sultan',
})

import { Unna } from "next/font/google"
const unna = Unna({
  subsets: ["latin"],
  variable: '--font-unna',
  weight: ["400", "700"],
})



export default function App({ Component, pageProps }) {
  return <main className={`${sultan.variable} ${unna.variable}`}>
    <Component {...pageProps} />
  </main>
}
