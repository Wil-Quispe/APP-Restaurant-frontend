import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

const LayoutSectionBlog = ({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) => {
  return (
    <div className="flex flex-col items-center mb-52">
      <div className="mb-12">
        <strong className="text-2xl">{title}</strong>
      </div>
      {children}
    </div>
  )
}

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

const MainItems = () => {
  return (
    <div className="flex justify-between items-center w-4/12 rounded-lg shadow-2xl hover:shadow-green-500 px-3 py-1 mb-5">
      <img
        src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-1.jpg"
        alt=""
        className="w-20 rounded"
      />
      <strong className="text-xl">Lomo Saltado</strong>
      <span className="text-green-400 text-lg">124 $</span>
    </div>
  )
}

const CardChef = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-4 hover:shadow-xl border rounded">
      <img
        src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-1.jpg"
        alt=""
        className="rounded-full w-36"
      />
      <strong className="mt-4 text-green-500">Luis Quispe</strong>
      <h2>Chef Principal</h2>
    </div>
  )
}

const CardComments = () => {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex flex-col justify-between px-4 py-2 mx-5 rounded-md ${
        hover ? 'bg-green-400' : 'bg-gray-100'
      }`}
    >
      <div>
        <h3 className={`${hover && 'text-white'}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          atque Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur atque
        </h3>
      </div>
      <div className="flex self-center mt-4">
        <div>
          <img
            src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/testimonial-1.jpg"
            className="rounded-full w-10 mr-2"
            alt=""
          />
        </div>
        <div>
          <h3
            className={`font-bold ${hover ? 'text-white' : 'text-green-500'}`}
          >
            Luis Quispe
          </h3>
          <h3 className={`${hover && 'text-white'}`}>IT person</h3>
        </div>
      </div>
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
        <div className="flex justify-center mb-52">
          <div className="w-4/6 flex justify-evenly">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="flex justify-center mb-52">
          <div className="w-3/6 flex justify-between">
            <div className="grid grid-cols-2 gap-2 w-2/6">
              <img
                src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-1.jpg"
                alt="sobre nosotros"
              />
              <img
                src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-2.jpg"
                alt="sobre nosotros"
              />
              <img
                src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-3.jpg"
                alt="sobre nosotros"
              />
              <img
                src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/about-4.jpg"
                alt="sobre nosotros"
              />
            </div>
            <div className="flex flex-col items-center w-3/6">
              <h2 className="text-xl inline">
                Bienvenido al Restaurant'
                <strong className="text-green-400 inline"> Menus Pa'ti</strong>
              </h2>

              <p className="my-3 w-5/6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                omnis! Placeat doloribus perspiciatis quo. Recusandae suscipit
                sunt, doloribus qui
              </p>

              <div className="border-green-400 border-l-8 rounded-md flex justify-evenly items-center w-3/6 ">
                <span className="text-3xl font-bold text-green-500">15</span>
                <h2 className="text-sm">
                  años de <h3>Experiencia</h3>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <LayoutSectionBlog title="Comidas mas Populares">
          <div className="w-full flex flex-col items-center">
            <MainItems />
            <MainItems />
            <MainItems />
            <MainItems />
          </div>
        </LayoutSectionBlog>
        <LayoutSectionBlog title="Nuestros Maestros Cosineros">
          <div className="flex w-6/12 justify-evenly">
            <CardChef />
            <CardChef />
            <CardChef />
          </div>
        </LayoutSectionBlog>
        <LayoutSectionBlog title="Comentarios">
          <div className="flex w-4/6">
            <CardComments />
            <CardComments />
            <CardComments />
          </div>
        </LayoutSectionBlog>
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
