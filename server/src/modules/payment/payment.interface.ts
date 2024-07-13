export type TProductCart = {
  _id?: string;
  name: string;
  coverImage?: string;
  brand: string;
  description?: string;
  quantity: number;
  price: number;
  rating: number;
  orderQuantity: number;
  orderPrice: number;
};

export type TFormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  cart: TProductCart[];
  totalPrice: number;
};
