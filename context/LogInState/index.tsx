import { ReactNode, Dispatch, createContext, useReducer } from 'react'

type DataType = {
  liveKeyAuth: string
  logged: boolean
  name: string
}

type LogInType = {
  state: DataType
  dispatch: Dispatch<ActionType>
}

type ActionType =
  | { type: 'changeLiveKeyAuth'; payload: { liveKeyAuth: string } }
  | { type: 'changeLogged'; payload: { logged: boolean } }
  | { type: 'changeName'; payload: { name: string } }
  | {
      type: 'changeAll'
      payload: { liveKeyAuth: string; logged: boolean; name: string }
    }

const initialState = {
  liveKeyAuth: '0',
  logged: false,
  name: '',
}

const logInReducer = (state: DataType, action: ActionType) => {
  switch (action.type) {
    case 'changeLiveKeyAuth':
      return {
        ...state,
        liveKeyAuth: action.payload.liveKeyAuth,
      }
    case 'changeLogged':
      return {
        ...state,
        logged: action.payload.logged,
      }
    case 'changeAll':
      return {
        ...state,
        liveKeyAuth: action.payload.liveKeyAuth,
        logged: action.payload.logged,
      }

    default:
      return { ...state }
  }
}

export const LogInContext = createContext({} as LogInType)

const LogInProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(logInReducer, initialState)
  return (
    <LogInContext.Provider value={{ state, dispatch }}>
      {children}
    </LogInContext.Provider>
  )
}

export default LogInProvider
