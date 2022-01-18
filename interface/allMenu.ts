export interface AllMenu {
  [key: string]: Menu[]
}

export interface Menu {
  __typename?: string
  _id: string
  name: string
  price: number
  quantity: number
  img: string
  type?: string
}
