import Link from 'next/link'
import React from 'react'
import CardChef from '../components/blog/CardChef'
import CardComments from '../components/blog/CardComments'
import CardService from '../components/blog/CartService'
import LayoutSectionBlog from '../components/blog/LayoutSectionBlog'
import MainItems from '../components/blog/MainItems'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

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
            <CardService />
            <CardService />
            <CardService />
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
          <div className="flex flex-col sm:flex-row w-full  lg:w-4/6">
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
