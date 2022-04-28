import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col py-2 bg-stone-100 h-screen overflow-hidden">
      <Head>
        <title>in5</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home
