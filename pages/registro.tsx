import Link from 'next/link'
import { FormEvent } from 'react'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import Layout from '../components/Layout'

const registro = () => {
  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hola')
  }
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <Form action={signUp} text="Registro">
            <Input text="Nombre" name="name" />
            <Input text="Correo" name="email" />
            <Input text="Contraseña" name="password" type="password" />
            <button className="bg-green-400 text-white py-1 px-4 rounded-lg  self-center border border-green-400 hover:text-green-400 hover:bg-transparent mr-1.5">
              Crear cuenta
            </button>
          </Form>

          <Link href="/login">
            <a className="text-blue-400">Ir a Login</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default registro
