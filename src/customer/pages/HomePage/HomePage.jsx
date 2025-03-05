import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../data/Men/Mens_kurta'
import { mens_shirts } from '../../../data/Men/men_shirt'
import { mensShoesPage1 } from '../../../data/mens_shoes'
import { sareePage1 } from '../../../data/Saree/page1'
import { lehngacholiPage2 } from '../../../data/Saree/lenghaCholiPage2'

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Carousel */}
      <MainCarosel />
      
      {/* Sections with spacing and styling */}
      <div className="space-y-16 py-20 px-5 lg:px-20">
        <HomeSectionCarosel 
          data={sareePage1} 
          sectionName="Women's Saree" 
          sectionClass="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white shadow-lg rounded-lg p-4"
        />
        <HomeSectionCarosel 
          data={lehngacholiPage2} 
          sectionName="Women's Lehenga Choli"
          sectionClass="bg-gradient-to-r from-pink-400 via-red-500 to-orange-600 text-white shadow-lg rounded-lg p-4"
        />
        <HomeSectionCarosel 
          data={mens_kurta} 
          sectionName="Men's Kurta"
          sectionClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-700 text-white shadow-lg rounded-lg p-4"
        />
        <HomeSectionCarosel 
          data={mens_shirts} 
          sectionName="Men's Shirt"
          sectionClass="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white shadow-lg rounded-lg p-4"
        />
        <HomeSectionCarosel 
        
          data={mensShoesPage1} 
          sectionName="Men's Shoes" 
          sectionClass="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white shadow-lg rounded-lg p-4"
        />
      </div>

      
    </div>
  )
}

export default HomePage
