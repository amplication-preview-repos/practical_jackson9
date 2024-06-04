import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DrinkListRelationFilter } from "../drink/DrinkListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type EstablishmentWhereInput = {
  address?: StringNullableFilter;
  drinks?: DrinkListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
