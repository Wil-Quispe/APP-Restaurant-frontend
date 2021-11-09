import React from 'react'
import Card from '../components/common/Card'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-2 grid grid-cols-6 mt-16">
        <Sidebar />
        <div className="col-span-5 grid grid-cols-3 justify-items-center px-52 gap-y-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
