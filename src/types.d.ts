export interface Good {
  id: string;
  brand: string;
  cloth: string;
  price: number;
  size: string;
  image: string;
}
export interface CartGood {
  good: Good;
  amount: number;
}


