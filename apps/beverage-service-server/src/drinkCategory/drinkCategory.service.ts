import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DrinkCategoryServiceBase } from "./base/drinkCategory.service.base";

@Injectable()
export class DrinkCategoryService extends DrinkCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
