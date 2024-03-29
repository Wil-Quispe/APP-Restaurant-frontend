import { useQuery } from '@apollo/client'
import router from 'next/router'
import { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { LogInContext } from '../context/LogInState'
import { USER } from '../graphql/query'

const User = () => {
  const { state, dispatch } = useContext(LogInContext)
  const { data: dataUser } = useQuery(USER, {
    variables: { _id: state.liveKeyAuth.split('-')[1] },
  })

  useEffect(() => {
    dispatch({
      type: 'changeName',
      payload: {
        name: dataUser?.user.name,
      },
    })
  }, [dataUser])

  const logOut = () => {
    dispatch({
      type: 'changeAll',
      payload: {
        liveKeyAuth: '0',
        logged: false,
        name: '',
      },
    })
    router.push('/')
  }

  return (
    <Layout>
      <div className='flex justify-center items-center h-80'>
        <div className='flex flex-col sm:flex-row w-10/12 h-64 justify-around items-center bg-gray-100 rounded-lg'>
          <div className='flex'>
            <span className='flex justify-center items-center hover:cursor-pointer border-white border-2 bg-green-400 text-white h-10 w-10 rounded-full capitalize'>
              {dataUser?.user.name.split('')[0]}
            </span>
            <h3 className='ml-1 mt-2 capitalize'>Hola {dataUser?.user.name}</h3>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
              <h4 className='text-green-400 text-xl mr-3 '>Nombre</h4>
              <h5 className='text-xl capitalize'>{dataUser?.user.name}</h5>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
              <h4 className='text-green-400 text-xl mr-3 '>Correo</h4>
              <h5 className='text-xl'>{dataUser?.user.email}</h5>
            </div>
          </div>
          <div>
            <a
              onClick={logOut}
              className='bg-blue-300 text-white py-1 px-4 rounded-lg  self-center border border-blue-300 hover:text-blue-300 hover:bg-transparent mr-1.5'
            >
              Cerrar Sesion
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default User
