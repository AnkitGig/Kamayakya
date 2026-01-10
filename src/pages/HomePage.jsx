import React from 'react'
import Home1 from '../components/Home1'
import LogoSlider from '../components/LogoSlider'
import SmartInvestmentSolutions from '../components/SmartInvestmentSolutions'
import PerformanceSection from '../components/PerformanceSection'
import TestimonialsSection from '../components/TestimonialsSection'
import InvestingPhilosophy from '../components/InvestingPhilosophy'
import TrustSection from '../components/TrustSection'
import PricingSection from '../components/PricingSection'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function HomePage() {
  return (
    <>
   <Home1/>
   <LogoSlider/>  
   <SmartInvestmentSolutions/>
   <InvestingPhilosophy/>
   <PricingSection/>
   <PerformanceSection/>
   <TrustSection/>
   <TestimonialsSection/>
   <AboutUs/>
   <ContactUs/>
   <Footer/>
    </>
  )
}
export default HomePage