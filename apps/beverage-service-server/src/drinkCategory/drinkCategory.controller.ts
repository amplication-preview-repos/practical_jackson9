import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DrinkCategoryService } from "./drinkCategory.service";
import { DrinkCategoryControllerBase } from "./base/drinkCategory.controller.base";

@swagger.ApiTags("drinkCategories")
@common.Controller("drinkCategories")
export class DrinkCategoryController extends DrinkCategoryControllerBase {
  constructor(protected readonly service: DrinkCategoryService) {
    super(service);
  }
}
