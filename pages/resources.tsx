import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const Resources: NextPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}
    initial = {{opacity:0}}
    animate = {{opacity:1}} className="flex flex-col py-2 bg-stone-100">
      <Head>
        <title>in5 | Resources</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <div className="absolute h-max max-w-[20vw] right-12 top-48">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="auto"
          fill="none"
          viewBox="0 0 117 893"
        >
          <path
            fill="url(#paint0_linear_2_6)"
            fillRule="evenodd"
            d="M68 9V0H50v791.25H4.373c-3.079 0-5.003 3.333-3.464 6L55.036 891c1.54 2.667 5.389 2.667 6.928 0l54.127-93.75c1.539-2.667-.385-6-3.464-6H68V9z"
            clipRule="evenodd"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_2_6"
              x1="64"
              x2="128"
              y1="815"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F97316"></stop>
              <stop offset="1" stopColor="#F97316" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col mt-8 mx-16 items-center">
        <h1 className="font-inter text-stone-900 font-bold text-6xl mb-4">
          Resources
        </h1>
        <p className="text-xl font-inter text-stone-900 font-regular text-justify w-1/2 mb-14">
          Although I intended for these presentations to be a major part of the
          instruction process (similarly to a high school class), I soon found
          that even quick lectures were not a great way to connect with
          students. Now they are available for viewing here as provenance for
          the premeditation of the project.
        </p>
        <div className="flex flex-col items-start w-1/2 mb-20">
          <h2 className="font-inter text-stone-900 font-bold text-5xl ">
            Getting Started...
          </h2>
          <p className="text-lg font-inter text-stone-900 font-regular text-justify w-3/4 my-2">
            This presentation goes over the basic file structure of the project,
            along with some of the extensions used for ease of development.
          </p>
          <div className="w-full h-auto relative shadow-md cursor-pointer">
            <Link
              href={
                'https://docs.google.com/presentation/d/1yAZNyM461FRCnSF21-0SySGAnmOSVN_sfkDnYRva8P4/edit?usp=sharing'
              }
              passHref
            >
              <Image
                src={'/introToProj.png'}
                layout={'responsive'}
                width={16}
                height={9}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start w-1/2 mb-20">
          <h2 className="font-inter text-stone-900 font-bold text-5xl ">
            Building Structure
          </h2>
          <p className="text-lg font-inter text-stone-900 font-regular text-justify w-3/4 my-2">
            The next step is to understand the history of the way that HTML has
            developed. Sites made with early HTML were far more plain than
            current ones. After gaining a foundation in the language, students
            learn the basic elements that they will leverage in their sites.
          </p>
          <div className="w-full h-auto relative shadow-md cursor-pointer">
            <Link
              href={
                'https://docs.google.com/presentation/d/1HmP_T4NwK1f9UG3XpIcDbYWjgKFHP1aAo6QVJKdfRyI/edit?usp=sharing'
              }
              passHref
            >
              <Image
                src={'/htmlBase.png'}
                layout={'responsive'}
                width={16}
                height={9}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start w-1/2 mb-20">
          <h2 className="font-inter text-stone-900 font-bold text-5xl ">
            Adding Some Spice
          </h2>
          <p className="text-lg font-inter text-stone-900 font-regular text-justify w-3/4 my-2">
            After learning to construct a site using the base tags for the head
            and body, students can move on to making those elements more
            visually appealing through the use of CSS selectors and inline
            styling. They will build in a stylesheet into their HTML site for
            easy connection and global styling.
          </p>
          <div className="w-full h-auto relative shadow-md cursor-pointer">
            <Link
              href={
                'https://docs.google.com/presentation/d/1uX_8CEMtgDNbcnLfbbleSyFNQCjEJdDflYLa9tdSa-c/edit?usp=sharing'
              }
              passHref
            >
              <Image
                src={'/baseCSS.png'}
                layout={'responsive'}
                width={16}
                height={9}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start w-1/2 mb-20">
          <h2 className="font-inter text-stone-900 font-bold text-5xl ">
            ...Finishing Touches
          </h2>
          <p className="text-lg font-inter text-stone-900 font-regular text-justify w-3/4 my-2">
            After learning the basics of CSS and its integration, students wrap
            up their sites using CSS classes to make advanced distinctions
            between elements.
          </p>
          <div className="w-full h-auto relative shadow-md cursor-pointer">
            <Link
              href={
                'https://docs.google.com/presentation/d/1jr_ecWmqSu0FAy3rmtoxnD8pOEwkFa4Nl_gufxbPygA/edit?usp=sharing'
              }
              passHref
            >
              <Image
                src={'/cssClass.png'}
                layout={'responsive'}
                width={16}
                height={9}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resources
