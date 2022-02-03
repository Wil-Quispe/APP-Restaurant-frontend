import Link from 'next/link'
import React, { useState } from 'react'
import Layout from '../components/Layout'

const Card = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      className={`${
        hover && 'bg-green-400'
      } flex flex-col w-64 px-7 py-5 border rounded-lg shadow-2xl items-center`}
    >
      <h2
        className={`${
          hover ? 'text-white' : 'text-green-400'
        } font-bold text-xl mb-3`}
      >
        Chef Principal
      </h2>
      <p className={`${hover && 'text-white'}`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate est
        repellendus vitae. Recusandae velit, modi incidunt quidem voluptatem
      </p>
    </div>
  )
}

const Home = () => {
  return (
    <Layout>
      <div className="h-screen w-full">
        <div className="h-full relative">
          <div className="background-image"></div>
          <div className="absolute w-full flex justify-evenly items-center color">
            <div className="w-2/6">
              <h2 className="font-bold text-white text-4xl">
                Disfruta nuestros <br /> Deliciosos Platos
              </h2>
              <h3 className="text-white my-4">
                Si piensas que tu vida está en manos de los dioses, estás
                equivocado. Está en manos de los cocineros
              </h3>
              <Link href="/login">
                <a className="bg-green-400 text-white py-1 px-4 rounded-lg  self-center border border-green-400 hover:text-green-400 hover:bg-transparent mr-1.5">
                  Ver la lista del Menu
                </a>
              </Link>
            </div>
            <img
              src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/hero.png"
              alt="menu principal"
              className="w-2/6"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-4/6 flex justify-evenly">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
