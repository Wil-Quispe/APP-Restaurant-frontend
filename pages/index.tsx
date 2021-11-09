import { useQuery } from '@apollo/client'
import React from 'react'
import Card from '../components/common/Card'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ALL_MENU from '../graphql/query'

const Home = () => {
  const { data, error } = useQuery(ALL_MENU)

  console.log(error)
  console.log(data)

  return (
    <div>
      <Navbar />
      <div className="px-2 grid grid-cols-6 mt-8">
        <Sidebar />
        <div className="col-span-5 grid grid-cols-4 justify-items-center px-20 gap-y-8">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
