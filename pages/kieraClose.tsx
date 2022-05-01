import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const kieraClose: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="./kiera.css"></link>
        <title>Inspiration</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Dancing+Script&family=Grape+Nuts&family=Henny+Penny&family=Lobster&family=Poiret+One&family=Rubik+Bubbles&family=Rubik+Moonrocks&family=Special+Elite&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar />
      <div className="mx-36">
        <Link href={'/kieraMain'} passHref>
          <a>Second page</a>
        </Link>
        <h1 className="centerText text-5xl">
          {' '}
          <span className="red-span">Congratulations!</span>
        </h1>
        <h1 className="centerText text-5xl mb-8">
          {' '}
          <span className="orange-span"> You're Done!</span>
        </h1>
        <p className="centerText">
          {' '}
          <span className="yellow-span"> I hope you feel inspired</span>{' '}
        </p>
        <p className='centerText'> 🍎🥝🥥🥔🥞🌮🍩🍯🥧🍰🥙🍟🥨🥑🌶️</p>
      </div>
    </div>
  )
}

export default kieraClose
