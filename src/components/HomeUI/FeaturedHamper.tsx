import React from 'react'
import featuredHampers from '../../Data/featuredGiftHampers.json'

const FeaturedHamper: React.FC = () => {
  return (
    <div className='py-12 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='mb-10'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Featured Gift Hampers
          </h2>
        </div>

        {/* Hampers Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {featuredHampers.featuredHampers.map((hamper, index) => (
            <div 
              key={index} 
              className='cursor-pointer'
            >
              {/* Hamper Image */}
              <div className='w-80 h-auto'>
                <img 
                  src={hamper.image} 
                  alt={hamper.title}
                  className='w-full h-full'
                />
              </div>
              
              {/* Hamper Content */}
              <div className='p-6 tracking-tight'>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                  {hamper.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4 font-light'>
                  {hamper.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
                      <button 
            className='bg-[#e5e5e5] text-black px-8 py-4 rounded-2xl text-sm cursor-pointer font-semibold'
            aria-label="Random Gift Generator"
          >
            Random Gift Generator
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedHamper