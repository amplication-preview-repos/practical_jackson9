import { Drink } from "../drink/Drink";

export type Establishment = {
  address: string | null;
  createdAt: Date;
  drinks?: Array<Drink>;
  id: string;
  name: string | null;
  owner: string | null;
  updatedAt: Date;
};
