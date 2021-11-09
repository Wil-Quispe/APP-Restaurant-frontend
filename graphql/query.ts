import gql from 'graphql-tag'

const ALL_MENU = gql`
  query {
    allMenu {
      _id
      name
      price
      quantity
    }
  }
`

export default ALL_MENU
