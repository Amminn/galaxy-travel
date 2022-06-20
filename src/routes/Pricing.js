import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import PricingCards from '../components/PricingCards'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
      <>
        <Navbar />
          <HeroImage
            heading="PRICING"
            text="Choose your trip."
          />
          <PricingCards />
        <Footer />
      </>
  )
}

export default Pricing