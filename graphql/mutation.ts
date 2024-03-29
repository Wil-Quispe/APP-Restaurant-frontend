import gql from 'graphql-tag'

export const ORDER_MENU = gql`
  mutation OrderMenu($menuId: ID!) {
    orderMenu(menuId: $menuId)
  }
`

export const NEW_MENU = gql`
  mutation NewMenu(
    $name: String!
    $type: String!
    $price: Int!
    $quantity: Int!
    $img: String!
  ) {
    newMenu(
      name: $name
      type: $type
      price: $price
      quantity: $quantity
      img: $img
    )
  }
`

export const UPDATE_MENU = gql`
  mutation UpdateMenu(
    $menuId: ID!
    $name: String
    $price: Int
    $quantity: Int
    $img: String
  ) {
    updateMenu(
      menuId: $menuId
      name: $name
      price: $price
      quantity: $quantity
      img: $img
    )
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
