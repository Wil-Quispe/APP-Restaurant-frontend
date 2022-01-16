import { useMutation, useQuery } from '@apollo/client'
import Link from 'next/link'
import router from 'next/router'
import React, { FormEvent, useEffect, useState } from 'react'
import ChangeImage from '../components/common/ChangeImage'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import { DELETE_MENU, NEW_MENU, UPDATE_MENU } from '../graphql/mutation'
import { ALL_MENU, USER } from '../graphql/query'
import { AllMenu } from '../interface/allMenu'
import Layout from './../components/Layout'

const Admin = () => {
  const [token, setToken] = useState<any>()
  const [newMenu] = useMutation(NEW_MENU)
  const [updateMenu] = useMutation(UPDATE_MENU)
  const [deleteMenu] = useMutation(DELETE_MENU)
  const { data, refetch } = useQuery<AllMenu>(ALL_MENU)
  const { data: dataUser } = useQuery(USER, {
    variables: { _id: token },
  })

  useEffect(() => {
    const liveKeyAuth = localStorage.getItem('liveKeyAuth')
    const id = liveKeyAuth?.split('-')[1]
    setToken(id)
  }, [])

  const crearMenu = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const elements = (name: string) => {
        const elems = e.currentTarget.elements
        const value = (elems.namedItem(name) as HTMLInputElement).value
        return value
      }

      const name = elements('name')
      const price = Number(elements('price'))
      const quantity = Number(elements('quantity'))

      if (name === '' || price <= 0 || quantity <= 0) {
        return alert('Campo Requerido')
      }

      return alert('No pueder Crear nuevos Productos no tiene las credenciales')

      await newMenu({ variables: { name, price, quantity } })

      const action = e.target as HTMLFormElement

      refetch()
      refetch()

      action.reset()
      alert('Listo')
    } catch (err) {
      alert('error')
    }
  }

  const actionUpdate = async (e: FormEvent<HTMLFormElement>, _id: any) => {
    e.preventDefault()

    try {
      const elements = (name: string) => {
        const elems = e.currentTarget.elements
        const value = (elems.namedItem(name) as HTMLInputElement).value
        return value
      }

      const name = elements('name')
      const price = Number(elements('price'))
      const quantity = Number(elements('quantity'))

      if (name === '' || price <= 0 || quantity <= 0) {
        return alert('Campo Requerido')
      }

      return alert('No pueder Crear nuevos Productos no tiene las credenciales')

      await updateMenu({ variables: { menuId: _id, name, price, quantity } })

      refetch()

      alert('Actualizado broder')
    } catch (err) {
      alert('error')
    }
  }

  const actionDelete = async (_id: any) => {
    return alert('No pueder Borrar estos datos son de Prueba')

    try {
      await deleteMenu({ variables: { menuId: _id } })

      refetch()
      alert('Hecho')
    } catch (err) {
      return alert('error')
    }
  }

  const logOut = () => {
    localStorage.removeItem('liveKeyAuth')
    router.push('/')
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center h-80 w-full">
          <div className="flex flex-col sm:flex-row w-10/12 h-64 justify-around items-center bg-gray-100 rounded-lg">
            <div className="flex">
              <span className="flex justify-center items-center hover:cursor-pointer border-white border-2 bg-green-400 text-white h-10 w-10 rounded-full">
                {dataUser?.user.name.split('')[0]}
              </span>
              <h3 className="ml-1 mt-2">Hola {dataUser?.user.name}</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <h4 className="text-green-400 text-xl mr-3 ">Nombre</h4>
                <h5 className="text-xl">{dataUser?.user.name}</h5>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                <h4 className="text-green-400 text-xl mr-3 ">Correo</h4>
                <h5 className="text-xl">{dataUser?.user.email}</h5>
              </div>
            </div>
            <div>
              <a
                onClick={logOut}
                className="bg-blue-300 text-white py-1 px-4 rounded-lg  self-center border border-blue-300 hover:text-blue-300 hover:bg-transparent mr-1.5"
              >
                Cerrar Sesion
              </a>
            </div>
          </div>
        </div>

        <Form text="Crea nueva Comida" action={crearMenu}>
          <Input text="Comida" name="name" />
          <Input text="Precio" name="price" type="number" />
          <Input text="Cantidad" name="quantity" type="number" />

          <button className="bg-green-400 text-white py-2 px-10 rounded-lg mt-3 self-center border border-green-400 hover:text-green-400 hover:bg-white">
            Crear
          </button>
        </Form>

        <>
          <h2 className="text-2xl">Actualización de Producto</h2>
          {data?.allMenu.length ? (
            data.allMenu.map((m) => (
              <Form
                text={m.name}
                action={(e) => actionUpdate(e, m._id)}
                key={m._id}
              >
                <Input text="Comida" name="name" defaultValue={m.name} />
                <Input
                  text="Precio"
                  name="price"
                  type="number"
                  defaultValue={m.price}
                />
                <Input
                  text="Cantidad"
                  name="quantity"
                  type="number"
                  defaultValue={m.quantity}
                />

                <ChangeImage name={m.name} img={m.img} />

                <div className="flex justify-center items-end">
                  <button className="bg-green-400 text-white py-2 px-10 rounded-lg mt-3 self-center border border-green-400 hover:text-green-400 hover:bg-white">
                    Actualizar
                  </button>

                  <div
                    className="z-10"
                    onClick={(e) => {
                      e.stopPropagation()
                      actionDelete(m._id)
                    }}
                  >
                    <svg
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                  </div>
                </div>
              </Form>
            ))
          ) : (
            <h2>No hay Productos</h2>
          )}
        </>
      </div>
    </Layout>
  )
}

export default Admin
