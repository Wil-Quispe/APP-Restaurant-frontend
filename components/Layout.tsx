import Router from 'next/router'
import { ReactNode, useContext, useEffect } from 'react'
import { NavContext } from '../context/NavState'
import Navbar from './Navbar/index'

const Layout = ({ children }: { children: ReactNode }) => {
  const { setShow } = useContext(NavContext)
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      setShow(false)
    })
  }, [])
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Layout
