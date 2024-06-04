import { Establishment } from "../establishment/Establishment";

export type Drink = {
  category: string | null;
  createdAt: Date;
  establishment?: Establishment | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
