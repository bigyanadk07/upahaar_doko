import React from 'react'
import quickCategories from "../../Data/quickCategories.json"

const QuickCategories: React.FC = () => {
  return (
    <div className='py-12'>
      <div className='container px-4'>
        {/* Section Header */}
        <div className=' mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Quick Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {quickCategories.quickCategories.map((category, index) => (
            <div 
              key={index} 
              className='flex flex-col items-center py-2 bg-white rounded-lg transition-shadow duration-200 cursor-pointer'
            >
              {/* Category Icon/Image */}
              <div className='w-16 h-16 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden'>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className='w-12 h-12 object-cover rounded-full'
                />
              </div>
              
              {/* Category Title */}
              <h3 className='text-sm font-medium text-gray-700 text-center leading-tight'>
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickCategories