import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-2 grid grid-cols-6">
        <Sidebar />
        <div className="bg-blue-400 col-span-5 grid grid-cols-3 justify-items-center">
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
