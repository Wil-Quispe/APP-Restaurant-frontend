import gql from 'graphql-tag'

const ORDER_MENU = gql`
  mutation OrderMenu($menuId: ID!) {
    orderMenu(menuId: $menuId)
  }
`

export default ORDER_MENU
