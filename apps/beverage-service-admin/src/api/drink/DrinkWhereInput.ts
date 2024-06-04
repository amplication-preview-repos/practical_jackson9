import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EstablishmentWhereUniqueInput } from "../establishment/EstablishmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type DrinkWhereInput = {
  category?: StringNullableFilter;
  establishment?: EstablishmentWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
