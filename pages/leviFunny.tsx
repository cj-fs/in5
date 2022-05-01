import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import Navbar from '../components/Navbar'
import LeviFunny from '../components/sections/levi/pages/LeviFunny'

const LeviConnerFunniest: NextPage = () => {
  return (
    <div className="flex flex-col py-2 bg-stone-100">
      <Head>
        <title>in5 | Levi Conner: Funniest Songs</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <LeviFunny />
    </div>
  )
}

export default LeviConnerFunniest