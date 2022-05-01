import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const kieraMain: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="./kiera.css"></link>
        <title>Inspiration: The End</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Dancing+Script&family=Grape+Nuts&family=Henny+Penny&family=Lobster&family=Poiret+One&family=Rubik+Bubbles&family=Rubik+Moonrocks&family=Special+Elite&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className="mx-36">
        <Link href={"/kieraIntro"} passHref><a>Title page</a></Link>
        <h1 className="centerText text-7xl">
          <span className="pink-span">🍓#1🍓</span>{' '}
        </h1>
        <p className='mb-16'>
          {' '}
          The way I see it,if you want the rainbow, you gotta put up with the
          rain
        </p>
        <h1 className="centerText text-7xl">
          <span className="orange-span"> 🍊#2🍊</span>
        </h1>
        <p className='mb-16'>
          {' '}
          Two things you are in total control of in your ilfe, are you attitude
          and your effort.
        </p>
        <h1 className="centerText text-7xl">
          <span className="yellow-span">🍍#3🍍</span>
        </h1>
        <p className='mb-16'> If you want to succeed, focus on changing yourself, not others.</p>
        <Link href={"/kieraClose"} passHref><a>Third page</a></Link>
      </div>
    </div>
  )
}

export default kieraMain
