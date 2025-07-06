import React from 'react'
import HeroBackground from "/images/hero-background.jpg"

const Hero: React.FC = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <img 
          src={HeroBackground} 
          alt="Hero Image" 
          className='rounded-xl h-[80vh] w-full object-cover' 
        />
        
        
        {/* Content overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6'>
          <h1 className='text-6xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight'>
            Gifts for Every Occassion - Curated with Love
          </h1>
          
          <p className='text-lg md:text-lg mb-8 mx-16 leading-relaxed opacity-90 max-w-full '>
            Find the perfect gift for your loved ones, no matter the occasion. We offer a wide selection of curated gift packages and hampers to suit every taste and budget.
          </p>
          
          <button 
            className='bg-[#E82933] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#a81a1a] cursor-pointer transition-colors duration-300 shadow-lg'
            aria-label="Shop Now"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero