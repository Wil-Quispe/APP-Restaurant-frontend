import Link from 'next/link'
import { FormEvent } from 'react'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import Layout from '../components/Layout'
import { useMutation } from '@apollo/client'
import { SIGNUP } from '../graphql/mutation'
import { useRouter } from 'next/router'

const registro = () => {
  const [signUp] = useMutation(SIGNUP)
  const router = useRouter()

  const signUpAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = (name: string) => {
      const elems = e.currentTarget.elements
      const value = (elems.namedItem(name) as HTMLInputElement).value
      return value
    }

    const name = elements('name')
    const email = elements('email')
    const password = elements('password')

    const res = await signUp({ variables: { name, email, password } })

    if (res.data.signUp) {
      router.push('/')
      return
    }

    alert('Algo salio mal')
  }
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <Form action={signUpAction} text="Registro">
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
