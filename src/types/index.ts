export interface Dish {
  name: string;
  price: number;
  description: string;
}

export interface Menu {
  dishes: Dish[];
}