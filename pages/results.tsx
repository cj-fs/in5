import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const Results: NextPage = () => {
  return (
    <div className="flex flex-col py-2 bg-stone-100">
      <Head>
        <title>in5 | Results</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <div className="mt-8">
        <h1 className="text-6xl font-inter text-stone-900 font-semibold text-center mb-12">
          Example Projects
        </h1>
        <div className="mx-16 grid grid-cols-2 grid-rows-2 gap-8">
          <div className="flex flex-col items-center col-span-1 row-span-1">
            <div className="relative w-full h-auto">
              <Link href={'/leviFunny'} passHref>
                <Image
                  src={'/levi.png'}
                  alt="Levi Conner Thumbnail"
                  layout="responsive"
                  className='cursor-pointer'
                  width={2}
                  height={1}
                />
              </Link>
            </div>
            <br></br>
            <div>
              <p className="text-inter text-stone-900 text-2xl">
                Levi Conner -{' '}
                <Link href={'/leviBest'} passHref>
                  <a>Best Songs</a>
                </Link>{' '}
                /{' '}
                <Link href={'/leviFunny'} passHref>
                  <a>Funniest Songs</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-1 row-span-1">
            <div className="w-full h-auto">
              <Link href={'/friends'} passHref>
                <Image
                  src={'/hannah.png'}
                  alt="Hannah Clifton Thumbnail"
                  layout="responsive"
                  className='cursor-pointer'
                  width={2}
                  height={1}
                />
              </Link>
            </div>
            <br></br>
            <div>
              <p className="text-inter text-stone-900 text-2xl">
                Hannah Clifton -{' '}
                <Link href={'/friends'} passHref>
                  <a>All About Friends</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-1 row-span-1">
            <div className="w-full h-auto">
              <Link href={'/hayden'} passHref>
                <Image
                  src={'/hayden.png'}
                  alt="Hayden Hauer Thumbnail"
                  layout="responsive"
                  className='cursor-pointer'
                  width={2}
                  height={1}
                />
              </Link>
            </div>
            <br></br>
            <div>
              <p className="text-inter text-stone-900 text-2xl">
                Hayden Hauer -{' '}
                <Link href={'/hayden'} passHref>
                  <a>An Assortment of References</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
