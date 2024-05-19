export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};