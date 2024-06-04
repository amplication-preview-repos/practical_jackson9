import { Drink as TDrink } from "../api/drink/Drink";

export const DRINK_TITLE_FIELD = "name";

export const DrinkTitle = (record: TDrink): string => {
  return record.name?.toString() || String(record.id);
};
