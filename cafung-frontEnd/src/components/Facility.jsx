import React from 'react'
import place from '../assets/place.jpg'
import wc from '../assets/wc.jpg'
import wifi from '../assets/wifi.jpg'
import sink from '../assets/sink.jpg'

function Facility() {
  return (
    <section id="facility" className="facility">
        <div className="container min-h-screen min-w-full bg-white pt-6">
        <h3 className="text-black font-extrabold text-4xl mx-auto w-fit my-4 md:my-8">FACILITY</h3>
        <div className="wrapper h-auto grid grid-cols-1 gap-3 content-center mx-[5%] md:grid-cols-2 md:gap-5">
            <div className="galery-facility grid grid-cols-2 gap-2">
            <div className="grid gap-1">
                <img src={place} alt="galery-img" className="galery-img mb-2 rounded-lg aspect-square object-cover" />
                <img src={wc} alt="galery-img" className="galery-img mb-2 rounded-lg aspect-video object-cover" />
            </div>
            <div className="grid gap-1">
                <img src={wifi} alt="galery-img" className="galery-img mb-2 rounded-lg aspect-video object-cover" />
                <img src={sink} alt="galery-img" className="galery-img mb-2 rounded-lg" />
            </div>
            </div>
            <div className="facility-text h-full w-full bg-white grid grid-cols-1 content-start mx-auto gap-1 max-w-lg md:gap-3">
            <div className="facility-title">
                <h3 className="text-xl text-black font-semibold lg:text-4xl">Comfortable Facility😋</h3>
            </div>
            <p className="text-sm h-10 max-w-sm text-black lg:text-2xl lg:mb-10">We provide best facility to ensure Comfortable and hygienic for our visitors.</p>
            <div className="facility-description">
                <div className="ul list-none grid grid-cols-2 gap-1">
                <li className="h-full my-2">
                    <h3 className="text-base text-black font-semibold md:text-lg lg:text-xl"><i className="facility-icon  fa-solid fa-leaf bg-base-color text-center w-fit p-2 rounded-full mr-2"></i>Cozy</h3>
                    <p className="text-sm h-fit max-w-sm text-black lg:text-xl">Cozy atmosphere at Café Ungu, place to relax, work, or gather with friends.</p>
                </li>
                <li className="h-full my-2">
                    <h3 className="text-base text-black font-semibold md:text-lg lg:text-xl"><i className="facility-icon  fa-solid fa-wifi bg-base-color text-center w-fit p-2 rounded-full mr-2"></i>Wifi</h3>
                    <p className="text-sm h-fit max-w-sm text-black lg:text-xl">Fast and free internet access is available to support your productivity.</p>
                </li>
                <li className="h-full my-2">
                    <h3 className="text-base text-black font-semibold md:text-lg lg:text-xl"><i className="facility-icon  fa-solid fa-sink bg-base-color text-center w-fit p-2 rounded-full mr-2"></i>Wastafel</h3>
                    <p className="text-sm h-fit max-w-sm text-black lg:text-xl">Well-maintained and clean sinks to ensure the hygiene and comfort of our visitors.</p>
                </li>
                <li className="h-full my-2">
                    <h3 className="text-base text-black font-semibold md:text-lg lg:text-xl"><i className="facility-icon  fa-solid fa-restroom bg-base-color text-center w-fit p-2 rounded-full mr-2"></i>RestRoom</h3>
                    <p className="text-sm h-fit max-w-sm text-black lg:text-xl">We take restroom cleanliness very seriously, that are always clean and hygienic.</p>
                </li>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Facility