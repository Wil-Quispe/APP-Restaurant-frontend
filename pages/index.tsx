import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-2 grid grid-cols-6">
        <Sidebar />
        <div className="bg-blue-400 col-span-5">main</div>
      </div>
    </div>
  )
}

export default Home
