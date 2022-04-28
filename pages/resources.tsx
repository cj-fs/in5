import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Resources: NextPage = () => {
  return (
    <div className='flex flex-col py-2 bg-stone-100'>
      <Head>
        <title>in5 | Resources</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
    </div>
  )
}

export default Resources
