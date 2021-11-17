import React from 'react'
import Ofert from './common/Ofert'

const Sidebar = () => {
  return (
    <aside className="bg-gray-100">
      <div className="bg-green-300 rounded-lg p-3 mb-3">
        <h1 className="text-center text-white">Ofertas</h1>
      </div>
      <div className="mx-5 flex flex-col sm:flex-row md:flex-row lg:flex-col lg:mx-2">
        <Ofert ofert="Ofertas solo Hoy!" />
        <Ofert ofert="Ofertas en Deliverys!" />
      </div>
    </aside>
  )
}

export default Sidebar
