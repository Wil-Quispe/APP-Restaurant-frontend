import React, { FormEvent } from 'react'
import Input from '../components/common/Input'

const Admin = () => {
  const crearMenu = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = (name: string) => {
      const elems = e.currentTarget.elements
      const value = (elems.namedItem(name) as HTMLInputElement).value
      return value
    }

    const name = elements('name')
    const price = elements('price')
    const quantity = elements('quantity')
  }

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col my-10 w-4/12" onSubmit={crearMenu}>
        <h1 className="self-center mb-5 font-bold text-2xl text-green-400">
          Crea nueva Comida
        </h1>
        <Input text="Comida" name="name" />
        <Input text="Precio" name="price" type="number" />
        <Input text="Cantidad" name="quantity" type="number" />

        <button className="bg-green-400 text-white py-2 px-10 rounded-lg mt-3 self-center">
          Crear
        </button>
      </form>
    </div>
  )
}

export default Admin
