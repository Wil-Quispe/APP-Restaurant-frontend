import { ReactNode } from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
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
