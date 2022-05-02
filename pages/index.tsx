import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial = {{opacity:0}}
      animate = {{opacity:1}}
      className="flex flex-col py-2 bg-stone-100 h-screen overflow-hidden"
    >
      <Head>
        <title>in5</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <Hero />
    </motion.div>
  )
}

export default Home
