import gql from 'graphql-tag'

export const ORDER_MENU = gql`
  mutation OrderMenu($menuId: ID!) {
    orderMenu(menuId: $menuId)
  }
`

export const NEW_MENU = gql`
  mutation NewMenu($name: String!, $price: Int!, $quantity: Int!) {
    newMenu(name: $name, price: $price, quantity: $quantity)
  }
`

export const UPDATE_MENU = gql`
  mutation UpdateMenu(
    $menuId: ID!
    $name: String
    $price: Int
    $quantity: Int
  ) {
    updateMenu(menuId: $menuId, name: $name, price: $price, quantity: $quantity)
  }
`

export const DELETE_MENU = gql`
  mutation DeleteMenu($menuId: ID!) {
    deleteMenu(menuId: $menuId)
  }
`

export const SIGNUP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      signUp
      token
    }
  }
`

export const LOGIN = gql`
  mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      logIn
      token
    }
  }
`
