import { useMutation, useQuery } from '@apollo/client'
import React, { FormEvent } from 'react'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import { NEW_MENU, UPDATE_MENU } from '../graphql/mutation'
import ALL_MENU from '../graphql/query'
import { AllMenu } from '../interface/allMenu'

const Admin = () => {
  const [newMenu] = useMutation(NEW_MENU)
  const [updateMenu] = useMutation(UPDATE_MENU)
  const { data, refetch } = useQuery<AllMenu>(ALL_MENU)

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
      action.reset()

      alert('Listo')
    } catch (err) {
      console.log(err)
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

      await updateMenu({ variables: { menuId: _id, name, price, quantity } })

      refetch()

      alert('Actualizado')
    } catch (err) {
      console.log(err)
      alert('error')
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
        <h2>Actualisacion de Producto</h2>
        {data?.allMenu &&
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

              <button className="bg-green-400 text-white py-2 px-10 rounded-lg mt-3 self-center">
                Actualizar
              </button>
            </Form>
          ))}
      </>
    </div>
  )
}

export default Admin
