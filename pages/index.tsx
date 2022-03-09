import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React from 'react'
import CardChef from '../components/blog/CardChef'
import CardComments from '../components/blog/CardComments'
import CardService from '../components/blog/CartService'
import LayoutSectionBlog from '../components/blog/LayoutSectionBlog'
import MainItems from '../components/blog/MainItems'
import Footer from '../components/Footer'
import Layout from '../components/Layout'

import Data from '../data.json'
import { ALL_MENU } from '../graphql/query'
import { AllMenu } from '../interface/allMenu'

const Home = () => {
  const { data: dataPopularItems } = useQuery<AllMenu>(ALL_MENU)

  return (
    <Layout>
      <div className="h-screen w-full">
        <div className="h-full relative">
          <div className="background-image"></div>
          <div className="absolute w-full flex flex-col sm:flex-row sm:justify-evenly justify-center items-center color">
            <img
              src="https://raw.githubusercontent.com/EasyLearning97/restaurant_html_css/master/img/hero.png"
              alt="menu principal"
              className="w-9/12 sm:w-2/6"
            />
            <div className="flex flex-col items-center w-11/12 sm:w-2/6">
              <h2 className="font-bold text-white text-4xl">
                Disfruta nuestros <br /> Deliciosos Platos
              </h2>
              <h3 className="text-white my-4 text-center">
                Si piensas que tu vida está en manos de los dioses, estás
                equivocado. Está en manos de los cocineros
              </h3>
              <Link href="/comidas">
                <a className="bg-green-400 text-white py-1 px-4 rounded-lg  self-center border border-green-400 hover:text-green-400 hover:bg-transparent mr-1.5">
                  Ver la lista del Menu
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-52">
          <div className="flex flex-col justify-evenly sm:flex-row sm:w-11/12 lg:w-4/6">
            {Data &&
              Data.services.map((s) => (
                <CardService text={s.text} title={s.title} />
              ))}
          </div>
        </div>
        <div className="flex justify-center mb-52">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:w-5/6 lg:w-3/6">
            <div className="grid grid-cols-2 gap-2 w-4/6 sm:w-2/6 mb-8">
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
            <div className="flex flex-col items-center md:w-3/6">
              <h2 className="text-xl inline">
                Bienvenido al Restaurant'
                <strong className="text-green-400 inline"> Menus Pa'ti</strong>
              </h2>

              <p className="my-3 w-5/6 text-center">
                Unos de los restaurants mas populares y favoritos por las
                personas de nuestra zona con clientes bastante reconocidos y
                encantados con nuestra sazon
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
          <div className="flex flex-col w-11/12 sm:w-3/6">
            {dataPopularItems &&
              dataPopularItems.allMenu
                .slice(0, 4)
                .map((m) => (
                  <MainItems img={m.img} name={m.name} price={m.price} />
                ))}
          </div>
        </LayoutSectionBlog>
        <LayoutSectionBlog title="Nuestros Maestros Cosineros">
          <div className="flex flex-col sm:flex-row sm:w-8/12 sm:justify-evenly">
            {Data &&
              Data.team.map((m) => (
                <CardChef img={m.img} name={m.name} ocupation={m.ocupation} />
              ))}
          </div>
        </LayoutSectionBlog>
        <LayoutSectionBlog title="Comentarios">
          <div className="flex flex-col sm:flex-row w-full lg:w-4/6">
            {Data &&
              Data.comments.map((c) => (
                <CardComments
                  name={c.name}
                  body={c.body}
                  ocupation={c.ocupation}
                  img={c.img}
                />
              ))}
          </div>
        </LayoutSectionBlog>
        <Footer />
      </div>
    </Layout>
  )
}

export default Home
