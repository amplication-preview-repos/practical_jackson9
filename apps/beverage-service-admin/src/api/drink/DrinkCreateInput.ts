import { EstablishmentWhereUniqueInput } from "../establishment/EstablishmentWhereUniqueInput";

export type DrinkCreateInput = {
  category?: string | null;
  establishment?: EstablishmentWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
