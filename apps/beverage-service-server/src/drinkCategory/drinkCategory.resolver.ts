import * as graphql from "@nestjs/graphql";
import { DrinkCategoryResolverBase } from "./base/drinkCategory.resolver.base";
import { DrinkCategory } from "./base/DrinkCategory";
import { DrinkCategoryService } from "./drinkCategory.service";

@graphql.Resolver(() => DrinkCategory)
export class DrinkCategoryResolver extends DrinkCategoryResolverBase {
  constructor(protected readonly service: DrinkCategoryService) {
    super(service);
  }
}
