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
   <section id="home"><Home1/></section>
   <LogoSlider/>
   <SmartInvestmentSolutions/>
   <InvestingPhilosophy/>
   <section id="pricing"><PricingSection/></section>
   <PerformanceSection/>
   <section id="why-trust"><TrustSection/></section>
   <TestimonialsSection/>
   <section id="about"><AboutUs/></section>
   <section id="contact"><ContactUs/></section>
   <Footer/>
    </>
  )
}
export default HomePage