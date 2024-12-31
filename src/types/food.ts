import { ImageRequireSource } from 'react-native/Libraries/Image/ImageSource';

export enum CategoriesType {
  Brunch,
  Lunch,
  Dessert,
}

export interface IFood {
  id: number
  name: string
  description: string
  type: CategoriesType
  weight: number
  price: number
  imageUrl?: string | ImageRequireSource
}
