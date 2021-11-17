import { useQuery } from '@apollo/client'
import React from 'react'
import Card from '../components/common/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ALL_MENU from '../graphql/query'
import { AllMenu } from '../interface/allMenu'

const Home = () => {
  const { data } = useQuery<AllMenu>(ALL_MENU)

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-6 mt-8 pb-12">
        <Sidebar />
        <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center px-20 gap-y-8">
          {data?.allMenu ? (
            data.allMenu.map((m) => (
              <Card
                key={m._id}
                _id={m._id}
                name={m.name}
                quantity={m.quantity}
                price={m.price}
                img={m.img}
              />
            ))
          ) : (
            <h1>No hay comtenido para mostrar</h1>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
