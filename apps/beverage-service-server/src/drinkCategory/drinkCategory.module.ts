import { Module } from "@nestjs/common";
import { DrinkCategoryModuleBase } from "./base/drinkCategory.module.base";
import { DrinkCategoryService } from "./drinkCategory.service";
import { DrinkCategoryController } from "./drinkCategory.controller";
import { DrinkCategoryResolver } from "./drinkCategory.resolver";

@Module({
  imports: [DrinkCategoryModuleBase],
  controllers: [DrinkCategoryController],
  providers: [DrinkCategoryService, DrinkCategoryResolver],
  exports: [DrinkCategoryService],
})
export class DrinkCategoryModule {}
