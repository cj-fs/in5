import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'

const kieraIntro: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="./kiera.css"></link>
        <title>Inspiration: The Intro</title>
      </Head>
      <Navbar />
      <h1 className="centerText text-6xl">
        🎨<span className="red-span">Q</span>
        <span className="orange-span">U</span>
        <span className="yellow-span">O</span>
        <span className="green-span">T</span>
        <span className="blue-span">E</span>
        <span className="purple-span">S</span>🎨
      </h1>
      <img src="https://www.silhcdn.com/3/i/shapes/lg/1/7/d300671.jpg?cache=2021-10-10+11%3A42%3A28"></img>
      <Link href="/kieraMain" passHref>
        <a className="centerText text-center"> Second Page</a>
      </Link>
    </div>
  )
}

export default kieraIntro
