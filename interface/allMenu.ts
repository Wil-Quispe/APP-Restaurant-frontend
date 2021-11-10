export interface AllMenu {
  allMenu: Menu[]
}

export interface Menu {
  __typename?: string
  _id?: string
  name: string
  price: number
  quantity: number
}
