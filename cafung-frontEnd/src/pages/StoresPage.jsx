import React from 'react'
import umkm from '../assets/umkm.jpg'
import StoresCard from '../components/StoresCard';
import { useFetchStores } from '../hooks/stalls/useFetchStores';



function StoresPage() {
  const { data: storesResponse, isLoading, isError } = useFetchStores();
  const stalls = storesResponse?.data || [];
  const baseImageUrl = import.meta.env.VITE_API_BASE_URL  + "/";

  return (
    <section id="stall" className="stall">
    <div className="container min-h-screen mx-auto min-w-full bg-white pt-6 mb-10">
      <div className="container mx-auto min-w-full bg-base-color pt-6">
      <div className="wrapper h-[90%] flex flex-col justify-center items-start gap-2 mx-[5%] md:gap-5  md:flex-row md:justify-center md:items-center">
         <div className="hero-img h-full w-full mb-4 flex justify-center items-center">
          <img className="w-auto h-auto rounded-t-3xl" src={umkm} alt="umkm-img" />
        </div>
        <div className="hero-text flex flex-col w-sm gap-2 mb-4">
          <p className="text-4xl lg:text-5xl font-bold text-white">Grow With Local UMKM</p>
          <p className="text-2xl lg:text-3xl font-semibold text-white">Our café proudly supports local micro businesses, offering you fresh, authentic experiences and unique flavors.</p>
        </div>
      </div>
    </div>
      <h3 id="stalls" className="text-white py-2 px-4 scroll-mt-10 rounded-3xl text-2xl lg:text-4xl font-extrabold mx-auto text-center w-fit my-4 bg-base-color">OUR PARTNERS <br /> STALL</h3>
    { isLoading ? (
        <p className="text-center text-gray-500">Loading stalls...</p>
    ) : isError ? (
        <p className="text-center text-red-500">Error: {isError}</p>
    ) : (
        <div id="stall-container" className="stall-container border px-2 mx-auto h-auto flex flex-wrap justify-center items-center gap-3 md:mx-[5%] md:gap-5 lg:px-16 lg:gap-8">
        {stalls.map((stall) => (
            <StoresCard  
                key={stall.id}
                stallId={stall.id}
                stallName={stall.name}
                stallOwner={stall.owner}
                stallContact={stall.kontak}
                stallImg={baseImageUrl + stall.image_path}
            />
        ))}
      </div>
    )}
    </div>
  </section>
  )
}

export default StoresPage