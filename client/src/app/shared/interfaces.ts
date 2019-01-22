export interface User {
  email: string
  password: string
  fName?: string
  lName?: string
  perms?: string
}

export interface Message {
  message: string
}

export interface Category {
  name: string
  imageSrc?: string
  user?: string
  _id?: string
}

export interface Position {
  name: string
  content?: string
  category: string
  user?: string
  _id?: string
}

export interface Order {
  date?: Date
  endDate?: Date
  order?: number
  user?: string
  list: OrderPosition[]
  _id?: string
}

export interface OrderPosition {
  name: string
  content?: string
  _id?: string
}

export interface Filter {
  start?: Date
  end?: Date
  order?: number
}
