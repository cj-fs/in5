import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Results: NextPage = () => {
  return (
    <div className='flex flex-col py-2 bg-stone-100'>
        <Head>
            <title>in5 | Results</title><link rel="icon" href="/in5logo.ico" />
        </Head>
        <Navbar />
      <div>
        <Link href={"/LeviConner/pages/index"} passHref>
          <a className='text-inter text-stone-900'>
            Levi Conner - Best Songs / Funniest Songs
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Results
