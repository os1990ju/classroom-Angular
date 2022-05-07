export interface Product {
  id: string,
  name: string,
  image:string,
  price:number,
  description?: string,
  tag?:string,
  dateExpiration?:Date
}
