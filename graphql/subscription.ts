import gql from 'graphql-tag'

const MENU = gql`
  subscription Menu($menuId: ID!) {
    menu(menuId: $menuId)
  }
`

export default MENU
