import React from 'react'
import Hero from '../../components/HomeUI/Hero'
import QuickCategories from '../../components/HomeUI/QuickCategories'
import FeaturedHamper from '../../components/HomeUI/FeaturedHamper'
import HowItWorks from '../../components/HomeUI/HowItWorks'
import CTASection from '../../components/HomeUI/CTASection'
import TestimonialSection from '../../components/HomeUI/Testimonials'

const Home:React.FC = () => {
  return (
    <div className=''>
      <Hero/>
      <QuickCategories/>
      <FeaturedHamper/>
      <HowItWorks/>
      <TestimonialSection/>
      <CTASection/>
      {/* Add more components as needed */}
    </div>
  )
}

export default Home