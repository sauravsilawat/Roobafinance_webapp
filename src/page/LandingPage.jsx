import React from 'react'
import Hero from '../section/Hero'
import WhyInvest from '../section/WhyInvest'
import HowtoInvest from '../section/HowtoInvest'
import NavBar from '../component/NavBar'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <WhyInvest />
      <HowtoInvest />
    </div>
  )
}

export default LandingPage