import React from 'react'
import Home1 from '../components/Home1'
import LogoSlider from '../components/LogoSlider'
import SmartInvestmentSolutions from '../components/SmartInvestmentSolutions'
import PerformanceSection from '../components/PerformanceSection'
import TestimonialsSection from '../components/TestimonialsSection'

function HomePage() {
  return (
    <>
   <Home1/>
   <LogoSlider/>  
   <SmartInvestmentSolutions/>
   <PerformanceSection/>
   <TestimonialsSection/>
    </>
  )
}

export default HomePage