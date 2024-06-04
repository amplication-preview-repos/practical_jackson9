import { DrinkWhereInput } from "./DrinkWhereInput";
import { DrinkOrderByInput } from "./DrinkOrderByInput";

export type DrinkFindManyArgs = {
  where?: DrinkWhereInput;
  orderBy?: Array<DrinkOrderByInput>;
  skip?: number;
  take?: number;
};
