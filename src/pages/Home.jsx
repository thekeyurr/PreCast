import React from 'react'
import Header from '../components/common/Header'
import RightSidebar from '../components/common/RightSidebar'
import Hero from '../components/sections/Hero'
import Sponsors from '../components/sections/Sponsors'
import ProductGrid from '../components/sections/ProductGrid'
import CrossroadsSection from '../components/sections/Crossroadssection'

const Home = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50">
      <Header />
      <Sponsors />
      <main className="relative flex-1">
        <div className='relative'>
          <Hero />

        </div>

        {/* Social Icons - Floating Bottom Right */}
        <div className="absolute bottom-8 right-6 flex flex-col gap-3 z-20">

        </div>

        {/* Product Information */}
        <ProductGrid />

        {/* <CrossroadsSection /> */}
      </main>
    </div>
  )
}

export default Home
