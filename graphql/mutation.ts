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
