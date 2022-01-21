import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'
import Form from '../components/common/Form'
import Input from '../components/common/Input'
import Layout from '../components/Layout'
import { LOGIN } from '../graphql/mutation'

const login = () => {
  const router = useRouter()
  const [logIn] = useMutation(LOGIN)
  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const elements = (name: string) => {
      const elems = e.currentTarget.elements
      const value = (elems.namedItem(name) as HTMLInputElement).value
      return value
    }

    const email = elements('email')
    const password = elements('password')

    const res = await logIn({ variables: { email, password } })

    if (res.data.logIn.logIn === '1' || res.data.logIn.logIn === '100') {
      if (typeof window !== undefined) {
        localStorage.setItem(
          'liveKeyAuth',
          `${res.data.logIn.logIn}-${res.data.logIn.token}`,
        )
      }
      router.push('/')
      return
    }

    alert('Algo salio mal')
  }
  return (
    <Layout>
      <div className="h-screen">
        <div className="flex flex-col items-center">
          <Form action={login} text="Iniciar Sesion">
            <Input text="Correo" name="email" />
            <Input text="Contraseña" name="password" type="password" />
            <button className="bg-green-400 text-white py-1 px-4 rounded-lg  self-center border border-green-400 hover:text-green-400 hover:bg-transparent mr-1.5">
              Iniciar Secion
            </button>
          </Form>

          <Link href="/registro">
            <a className="text-blue-400">Ir a Registro</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default login
