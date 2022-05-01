import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Ashlynn: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="./ashlynn.css"></link>
        <title>All About The Office</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Bungee+Shade&family=Lobster+Two:ital@1&family=Noto+Serif&family=Oswald:wght@300&family=Roboto+Condensed:wght@700&family=Simonetta:ital@1&family=Yeseva+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className='mx-36'>
      <h1 className="centerText text-6xl">the office</h1>
      <img src="https://flxt.tmsimg.com/assets/p185008_ce_h10_aa.jpg"></img>

      <p className="fontsize">All about the office </p>
      <p className="fontResize">Pictures, Quotes, Memes and More</p>
    </div>
    </div>
  )
}

export default Ashlynn
