import { DrinkCategoryWhereInput } from "./DrinkCategoryWhereInput";
import { DrinkCategoryOrderByInput } from "./DrinkCategoryOrderByInput";

export type DrinkCategoryFindManyArgs = {
  where?: DrinkCategoryWhereInput;
  orderBy?: Array<DrinkCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
