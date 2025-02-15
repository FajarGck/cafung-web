import React from 'react'
import cafungLogo from '../assets/logo.png'
import { Link } from 'react-router'

function Hero() {
  return (
    <section id="home" className="hero scroll-mt-10">
        <div className="container min-h-screen mx-auto min-w-full bg-base-color pt-6">
        <div className="wrapper h-[90%] flex flex-col justify-center items-start gap-2 mx-[5%] md:gap-5  md:flex-row md:justify-center md:items-center">
            <div className="hero-text flex flex-col w-sm gap-2">
            <p className="text-lg lg:text-2xl font-semibold text-white">WELCOME TO </p>
            <p className="text-4xl lg:text-6xl font-bold text-white">CAFE UNGU</p>
            <p className="text-2xl lg:text-4xl font-semibold text-white">#COBAAJADULUGAKSIH</p>
            <div className="hero-btn bg-white text-black w-fit rounded-3xl py-2 px-4 font-semibold hover:bg-[#ffffffc9]">
                <Link to="/#popular-products">Check Now</Link>
            </div>
            </div>
            <div className="hero-img h-full w-full mb-4 flex justify-center items-center">
            <img className="w-auto h-auto" src={cafungLogo} alt="logo" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero