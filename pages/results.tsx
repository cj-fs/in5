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
      <div className="mt-8 flex flex-col items-center">
        <h1 className="text-6xl font-inter text-stone-900 font-semibold text-center mb-4">
          Example Projects
        </h1>
        <p className="text-xl font-inter text-stone-900 font-regular text-justify w-1/2 mb-14">
          Students were encouraged to pick a topic (or really anything) that
          they were interested in and compile information on it in teh format of
          a basic HTML5 website. Most used images and spans to add uniqueness to
          their sites. Some used colors through CSS selectors. Here are the more
          complete sites of the bunch.
        </p>
        <div className="mx-16 grid grid-cols-2 grid-rows-3 gap-8 gap-y-14 pb-14 w-full px-10">
          <div className="flex flex-col items-center col-span-1 row-span-1">
            <div className="relative w-full h-auto">
              <Link href={'/leviFunny'} passHref>
                <Image
                  src={'/levi.png'}
                  alt="Levi Conner Thumbnail"
                  layout="responsive"
                  className="cursor-pointer shadow-md"
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
                  className="cursor-pointer shadow shadow-md"
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
                  className="cursor-pointer shadow shadow-md"
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
          <div className="flex flex-col items-center col-span-1 row-span-1">
            <div className="w-full h-auto">
              <Link href={'/kieraMain'} passHref>
                <Image
                  src={'/judy.png'}
                  alt="Kiera Judy Thumbnail"
                  layout="responsive"
                  className="cursor-pointer shadow shadow-md"
                  width={2}
                  height={1}
                />
              </Link>
            </div>
            <br></br>
            <div>
              <p className="text-inter text-stone-900 text-2xl">
                Kiera Judy -{' '}
                <Link href={'/kieraMain'} passHref>
                  <a>Inspiration</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-1 row-span-1">
            <div className="w-full h-auto">
              <Link href={'/ashlynn'} passHref>
                <Image
                  src={'/ashlynn.png'}
                  alt="Ashlynn Meyer Thumbnail"
                  layout="responsive"
                  className="cursor-pointer shadow shadow-md"
                  width={2}
                  height={1}
                />
              </Link>
            </div>
            <br></br>
            <div>
              <p className="text-inter text-stone-900 text-2xl">
                Ashlynn Meyer -{' '}
                <Link href={'/ashlynn'} passHref>
                  <a>All About The Office</a>
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
