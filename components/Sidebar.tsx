import React from 'react'
import Ofert from './common/Ofert'

const Sidebar = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-green-300 rounded-lg p-3 mb-3">
        <h1 className="text-center text-white">Ofertas</h1>
      </div>
      <div>
        <Ofert ofert="Ofertas solo Hoy!" />
        <Ofert ofert="Ofertas en Deliverys!" />
      </div>
    </div>
  )
}

export default Sidebar
