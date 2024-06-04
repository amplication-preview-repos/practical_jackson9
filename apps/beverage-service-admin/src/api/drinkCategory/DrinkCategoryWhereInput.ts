import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DrinkCategoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
