import gql from 'graphql-tag'

export const ALL_MENU = gql`
  query {
    allMenu {
      _id
      name
      price
      quantity
      img
      type
    }
  }
`

export const TYPE_MENU = gql`
  query TypeMenu($type: String!) {
    typeMenu(type: $type) {
      _id
      name
      price
      quantity
      img
      type
    }
  }
`
