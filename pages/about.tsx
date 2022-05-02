import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About: NextPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col py-2 bg-stone-100"
    >
      <Head>
        <title>in5 | About</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col items-center mt-8">
        <h1 className="font-inter text-stone-900 font-bold text-6xl mb-4">
          About
        </h1>
        <p className="font-inter text-stone-900 text-xl w-1/2 mb-4">
          This project is a product of the Hamilton High School Senior Project
          Program. The individual behind it is Colter Purcell. The goal was to
          educate younger students on how to utilize low-level (computing)
          languages, spark an interest in the field, and foster practical skills
          that can be utilized in a variety of settings.
        </p>
        <div className="w-1/2 h-auto relative">
          <Image
            src="/inClass.jpg"
            alt="Students in a Session"
            layout="responsive"
            width={4}
            height={3}
          />
        </div>
        <p className="font-inter text-stone-900 text-xl w-1/2 my-4">
          Colter will be majoring in Software Engineering in the fall. He is an
          aspiring entreprenuer who is working towards starting his own web
          design agency. This experience was one that provided perspective and
          reinforced his knowledge in basic elements of the web design process.
        </p>
        <br></br>

        <p className="font-inter text-stone-900 text-xl w-1/2 mb-4">
          Not only was this a career focused project, but also one that provided
          newfound respect for educators at the middle school level, especially
          in recent years. The change in students&apos; daily structure during
          the pandemic has proved to have a profound impact on attention spans
          and information absorbtion. Both of these factors have made the
          already challenging age group more difficult to engage with. Still,
          these teachers come in with a will and passion for their jobs that is
          nothing short of commendable.
        </p>
        <br></br>
        <p className="font-inter text-stone-900 text-xl w-1/2 mb-4">Thanks for checking this out, {'\n'}<span className='font-medium'>Colter Purcell</span></p>
      </div>
    </motion.div>
  )
}
export default About
