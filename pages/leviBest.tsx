import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import LeviBest from '../components/sections/levi/pages/LeviBest'

const LeviConnerBest: NextPage = () => {
  return (
    <div className="flex flex-col py-2 bg-stone-100">
      <Head>
        <title>in5 | Levi Conner: Funniest Songs</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <LeviBest />
    </div>
  )
}

export default LeviConnerBest