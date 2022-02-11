import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavContext } from '../context/NavState/index'
import ActiveLink from './common/ActiveLink'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { show, setShow } = useContext(NavContext)
  const [loggued, setLoggued] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const liveKeyAuth = localStorage.getItem('liveKeyAuth')

    const condition = liveKeyAuth?.split('-')[0]

    if (condition === '1' || condition === '100') {
      setLoggued(true)
    }
  }, [])

  const goTo = () => {
    const liveKeyAuth = localStorage.getItem('liveKeyAuth')
    const condition = liveKeyAuth?.split('-')[0]

    if (condition === '1') {
      router.push('/usuario')
      return
    }
    if (condition === '100') {
      router.push('/admin')
      return
    }
    router.push('/')
  }

  const showNav = () => {
    setShow(!show)
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-end sm:justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden w-3/5 justify-between">
            <button
              onClick={showNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div>
              <Link href="/">
                <a>
                  <Image
                    src="/mainlogo.png"
                    alt="Workflow"
                    width="80"
                    height="50"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <Link href="/">
              <a>
                <Image
                  src="/mainlogo.png"
                  alt="Workflow"
                  width="80"
                  height="50"
                />
              </a>
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex">
              <ActiveLink text="Inicio" href="/" />
              <ActiveLink text="Comidas" href="/comidas" />
              <ActiveLink text="Costa" href="/costa" />
              <ActiveLink text="Sierra" href="/sierra" />
              <ActiveLink text="Selva" href="/selva" />
            </div>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                {loggued ? (
                  <>
                    <a
                      onClick={goTo}
                      className="bg-gray-800 flex text-sm rounded-full "
                    >
                      <span className="flex justify-center items-center hover:cursor-pointer border-white border-2 bg-green-400 text-white h-10 w-10 rounded-full">
                        {
                          sessionStorage
                            .getItem('liveKeyName')
                            ?.split(' ')[0]
                            .split('')[0]
                        }
                      </span>
                    </a>
                  </>
                ) : (
                  <div className="hidden sm:block">
                    <Link href="/login">
                      <a className="bg-green-400 text-white py-1 px-4 rounded-lg  self-center border border-green-400 hover:text-green-400 hover:bg-transparent mr-1.5">
                        Iniciar Secion
                      </a>
                    </Link>
                    <Link href="/registro">
                      <a className="border border-green-400 rounded-lg text-green-400 px-4 py-1 hover:bg-green-400 hover:text-white">
                        Registrarse
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          show ? 'flex' : 'hidden'
        } sm:hidden flex-col justify-center pb-7`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1  flex flex-col justify-center">
          <ActiveLink text="Inicio" href="/" />
          <ActiveLink text="Comidas" href="/comidas" />
          <ActiveLink text="Costa" href="/costa" />
          <ActiveLink text="Sierra" href="/sierra" />
          <ActiveLink text="Selva" href="/selva" />
        </div>

        {!loggued && (
          <div className="flex justify-center sm:hidden">
            <Link href="/login">
              <a className="bg-green-400 text-white py-1 px-4 rounded-lg  self-center border border-green-400 hover:text-green-400 hover:bg-transparent mr-1.5">
                Iniciar Secion
              </a>
            </Link>
            <Link href="/registro">
              <a className="border border-green-400 rounded-lg text-green-400 px-4 py-1 hover:bg-green-400 hover:text-white">
                Registrarse
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
