import React from 'react'
import Image from 'next/image'
import { Menu } from '../../interface/allMenu'

const Card = ({ name, price, quantity }: Menu) => {
  return (
    <div className="border px-3 py-4 rounded hover:shadow-xl">
      <div className="relative border-2 border-green-400 rounded-2xl p-1">
        <Image
          src="/ceviche.jpg"
          width="180"
          height="160"
          className="rounded-2xl"
        />

        <div className="absolute -top-3 w-full flex justify-center">
          <span className="bg-green-400 px-3 rounded text-white">
            {price} $
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-green-400">comida:</span>
          <span> {name}</span>
        </div>
        <div>
          <span className="text-green-400">cantidad:</span>
          <span> {quantity}</span>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button className="border border-green-400 rounded-lg text-green-400 px-2 hover:bg-green-400 hover:text-white">
          Ordenar
        </button>
      </div>
    </div>
  )
}

export default Card
