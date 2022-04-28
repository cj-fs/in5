import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="grid grid-cols-2 justify-center h-[90vh]">
      <div className="flex flex-col col-span-1 justify-center relative -top-10">
        <h1 className="text-7xl text-left ml-10 font-inter mb-4 font-extrabold">
          Teaching and Learning{'\n'}with the Next Generation
        </h1>
        <p className="text-2xl font-inter text-justify font-regular mb-4 ml-10">
          The goal was educating the next generation on modern skills that they
          could use to innovate, explore, and express ideas. In the end, it was
          both a teaching and teachable experience.
          {/* This project is a product of the Hamilton High School Senior Project
        Program. The individual behind it is Colter Purcell. The goal was to
        educate younger students on how to utilize low-level (computing)
        languages to spark an interest in the field while fostering practical
        skills that can be utilized in a variety of settings. */}
        </p>
        <div className="flex ml-10">
          <Link href={'/about'} passHref>
            <a className="mr-8">
              <button className="bg-orange-400 hover:bg-orange-300 transition-all duration-[400ms] text-2xl font-inter px-3 py-1 rounded-sm font-medium">
                Read About the Project
              </button>
            </a>
          </Link>
          <Link href={'/results'} passHref>
            <a>
              <button className="bg-orange-400 hover:bg-orange-300 transition-all duration-[400ms] text-2xl font-inter px-3 py-1 rounded-sm font-medium">
                See the Work Created
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="col-span-1">
        <div className="width-full height-[90vh] relative">
          <Image src={'/back.png'} alt="Backing image" layout="responsive" height={"100%"} width={"67%"}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
