import { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const About: NextPage = () => {
  return (
    <div className="flex flex-col py-2 bg-stone-100">
      <Head>
        <title>in5 | About</title>
        <link rel="icon" href="/in5logo.ico" />
      </Head>
      <Navbar />
      <div>
        <p className="font-inter">
          This project is a product of the Hamilton High School Senior Project
          Program. The individual behind it is Colter Purcell. The goal was to
          educate younger students on how to utilize low-level (computing)
          languages to spark an interest in the field while fostering practical
          skills that can be utilized in a variety of settings.
        </p>
      </div>
    </div>
  )
}
export default About
