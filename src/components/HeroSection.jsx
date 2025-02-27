import { useState } from 'react'
import heroBg from "../assets/heroBg.png"
import { BsArrowUpRight } from "react-icons/bs";
import Modal from './Modal';


const HeroSection = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-full sm:h-screen h-screen relative '>
      <img src={heroBg} alt="hero-bg" className='overflow-scroll w-[100%] -z-20 h-screen object-cover heroScale absolute top-0' />
      <div className="flex justify-center items-center h-full w-full z-20">
        <div className='text-white text-center relative'>
          <div className="absolute rounded-3xl heroBlack sm:h-96 h-72 sm:left-8 left-0 top-0 sm:w-72 w-60 bg-black bg-opacity-40 -z-10"></div>
          <p className='text-center text-[#7b538f] sm:text-xl text-sm italic my-1'>WELCOME TO THE ONE AND ONLY:</p>
          <h4 className='sm:text-6xl text-5xl font-bold'>KROWNED</h4>
          <h4 className='sm:text-6xl text-5xl font-bold my-1'>KUEENS</h4>
          <p className='sm:text-xl text-sm mt-3'>Your favourite Digital Audio WorkStation!</p>
          <div className="flex justify-center items-center flex-col">
            <button onClick={() => setOpen(true)} className="bg-transparent rounded-full p-3 text-white hover:bg-white hover:text-purple-600 text-lg transition-colors duration-300 ease-in-out mt-5 w-fit uppercase font-semibold flex gap-2 items-center">LOGIN/Register <BsArrowUpRight /></button>
            <button className="mt-2 bg-primary rounded-full w-fit p-3 text-white hover:bg-[#d6833a]  text-lg transition-colors duration-300 ease-in-out uppercase font-semibold">meet the team</button>
          </div>

        </div>


      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>

  )
}

export default HeroSection