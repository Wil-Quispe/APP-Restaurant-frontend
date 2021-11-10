import { useMutation } from '@apollo/client'
import React, { FormEvent } from 'react'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import { NEW_MENU } from '../graphql/mutation'

const Admin = () => {
  const [newMenu] = useMutation(NEW_MENU)

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
    </div>
  )
}

export default Admin
