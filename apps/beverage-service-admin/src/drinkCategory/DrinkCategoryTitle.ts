import { DrinkCategory as TDrinkCategory } from "../api/drinkCategory/DrinkCategory";

export const DRINKCATEGORY_TITLE_FIELD = "name";

export const DrinkCategoryTitle = (record: TDrinkCategory): string => {
  return record.name?.toString() || String(record.id);
};
