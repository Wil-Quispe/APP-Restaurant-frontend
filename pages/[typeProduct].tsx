import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Card from '../components/common/Card'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { TYPE_MENU } from '../graphql/query'
import { AllMenu } from '../interface/allMenu'

const Costa = () => {
  const { query } = useRouter()

  const { data } = useQuery<AllMenu>(TYPE_MENU, {
    variables: { type: query.typeProduct },
  })

  console.log({ data })
  if (data?.typeMenu.length === 0)
    return (
      <Layout>
        <div className="h-screen flex flex-col justify-center items-center">
          <h3>No hay contenido para este tipo de Producto</h3>
          <Link href="/">
            <a className="text-blue-400"> Volver al Inicio</a>
          </Link>
        </div>
      </Layout>
    )

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-6 mt-8 pb-12">
        <Sidebar />
        <article className="mt-10 col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mt-0 2xl:grid-cols-6 justify-items-center gap-y-8 gap-x-2">
          {data?.typeMenu ? (
            data.typeMenu.map((m) => (
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
            <h1>Cargando...</h1>
          )}
        </article>
      </div>
      <Footer />
    </Layout>
  )
}

export default Costa
