import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex justify-around py-2 md:py-5 bg-green-50">
      <div className="w-8 md:w-16">
        <img src="/mainlogo.png" alt="main logo" />
      </div>
      <div>
        <h1 className="hidden sm:block text-2xl font-bold">
          Martes y Miercoles
        </h1>
      </div>
      <div>
        <span className="bg-green-400 text-white mr-2 md:mr-4 py-1 md:py-2 px-2 md:px-5 rounded-lg border border-green-400 hover:text-green-400 hover:bg-white cursor-pointer">
          Hoy
        </span>
        <Link href="/admin">
          <a className="bg-green-600 text-white mr-2 md:mr-4 py-1 md:py-2 px-2 md:px-5 rounded-lg hover:bg-green-400">
            Admin
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
