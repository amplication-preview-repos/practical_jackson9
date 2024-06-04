import { SortOrder } from "../../util/SortOrder";

export type DrinkOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  establishmentId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
