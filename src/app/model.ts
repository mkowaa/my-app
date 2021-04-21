export interface IProduct {
  id: number;
  name: string;
  price: number;
  color: string;
  img?: string;
  description?: string;
}
export interface Iitem {
  product?: object;
  i?: object;
}
export interface IProducts extends Array<IProduct>{}
export interface Iitems extends Array<Iitem>{}
