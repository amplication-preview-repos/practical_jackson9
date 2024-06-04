import { EstablishmentWhereUniqueInput } from "../establishment/EstablishmentWhereUniqueInput";

export type DrinkUpdateInput = {
  category?: string | null;
  establishment?: EstablishmentWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
