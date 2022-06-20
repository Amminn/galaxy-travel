import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainingPage from '../components/TrainingPage'

const Training = () => {
  return (
    <>
      <Navbar />
        <HeroImage 
          heading="training"
          text="Pre-Flight & In-Flight Training."
        />
        <TrainingPage />
      <Footer />
    </>
  )
}

export default Training