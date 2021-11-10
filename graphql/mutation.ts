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
