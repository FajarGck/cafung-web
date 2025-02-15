import React from 'react'
import Hero from '../components/Hero'
import Facility from '../components/Facility'
import PopularProductsPage from './PopularProductsPage'
import StoresPage from './StoresPage'
import ModalStores from '../components/ModalStores'
import ScrollNav from '../components/scrollNav'
import FeedBack from './../components/FeedBack';


function HomePage() {
  return (
   <>
      <ScrollNav />
      <Hero />
      <ModalStores />
      <PopularProductsPage />
      <Facility />
      <StoresPage />
      <FeedBack />
   </>
  )
}

export default HomePage