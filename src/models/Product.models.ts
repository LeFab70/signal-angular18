export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  description?: string;
}
export type Products = Array<Product>;
