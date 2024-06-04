import { Module } from "@nestjs/common";
import { DrinkModuleBase } from "./base/drink.module.base";
import { DrinkService } from "./drink.service";
import { DrinkController } from "./drink.controller";
import { DrinkResolver } from "./drink.resolver";

@Module({
  imports: [DrinkModuleBase],
  controllers: [DrinkController],
  providers: [DrinkService, DrinkResolver],
  exports: [DrinkService],
})
export class DrinkModule {}
