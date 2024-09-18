import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ContractorFilters from './components/ContractorFilters'
import ContractorProfile from './components/ContractorProfile'
import ContractorProfileCard from './components/ContractorProfileCard'
import Footer from './components/Footer'
import RatingStars from './components/RatingStars'

function App() {
  return (
   <>
   <Navbar />
      <HeroSection />
      <ContractorProfile />
      <Footer />
   </>
  )
}

export default App
