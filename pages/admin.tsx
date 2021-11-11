import { useMutation, useQuery } from '@apollo/client'
import React, { FormEvent } from 'react'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import { DELETE_MENU, NEW_MENU, UPDATE_MENU } from '../graphql/mutation'
import ALL_MENU from '../graphql/query'
import { AllMenu } from '../interface/allMenu'

const Admin = () => {
  const [newMenu] = useMutation(NEW_MENU)
  const [updateMenu] = useMutation(UPDATE_MENU)
  const [deleteMenu] = useMutation(DELETE_MENU)
  const { data, refetch } = useQuery<AllMenu>(ALL_MENU)

  console.log(data)

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

      await newMenu({ variables: { name, price, quantity } })

      const action = e.target as HTMLFormElement

      refetch()
      refetch()

      action.reset()
      alert('Listo')
    } catch (err) {
      console.log(err)
      alert('error')
    }
  }

  const actionUpdate = async (e: FormEvent<HTMLFormElement>, _id: any) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      const elements = (name: string) => {
        const elems = e.currentTarget.elements
        const value = (elems.namedItem(name) as HTMLInputElement).value
        return value
      }

      const name = elements('name')
      const price = Number(elements('price'))
      const quantity = Number(elements('quantity'))

      await updateMenu({ variables: { menuId: _id, name, price, quantity } })

      refetch()

      alert('Actualizado broder')
    } catch (err) {
      console.log(err)
      alert('error')
    }
  }

  const actionDelete = async (_id: any) => {
    try {
      await deleteMenu({ variables: { menuId: _id } })

      refetch()
      alert('Hecho')
    } catch (err) {
      console.log(err)
      return alert('error')
    }
  }

  return (
    <div className="flex flex-col items-center">
      <Form text="Crea nueva Comida" action={crearMenu}>
        <Input text="Comida" name="name" />
        <Input text="Precio" name="price" type="number" />
        <Input text="Cantidad" name="quantity" type="number" />

        <button className="bg-green-400 text-white py-2 px-10 rounded-lg mt-3 self-center">
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

              <div className="flex justify-center items-end">
                <button className="bg-green-400 text-white py-2 px-10 rounded-lg mt-3 self-center">
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
  )
}

export default Admin
