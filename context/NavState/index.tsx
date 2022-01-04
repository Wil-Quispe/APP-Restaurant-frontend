import { ReactNode, Dispatch, createContext, useState } from 'react'

type navType = {
  show: boolean
  setShow: Dispatch<boolean>
}

export const NavContext = createContext({} as navType)

const NavProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false)
  return (
    <NavContext.Provider value={{ show, setShow }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider
