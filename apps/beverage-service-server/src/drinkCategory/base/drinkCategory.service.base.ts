/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DrinkCategory as PrismaDrinkCategory } from "@prisma/client";

export class DrinkCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DrinkCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.drinkCategory.count(args);
  }

  async drinkCategories<T extends Prisma.DrinkCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkCategoryFindManyArgs>
  ): Promise<PrismaDrinkCategory[]> {
    return this.prisma.drinkCategory.findMany<Prisma.DrinkCategoryFindManyArgs>(
      args
    );
  }
  async drinkCategory<T extends Prisma.DrinkCategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkCategoryFindUniqueArgs>
  ): Promise<PrismaDrinkCategory | null> {
    return this.prisma.drinkCategory.findUnique(args);
  }
  async createDrinkCategory<T extends Prisma.DrinkCategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkCategoryCreateArgs>
  ): Promise<PrismaDrinkCategory> {
    return this.prisma.drinkCategory.create<T>(args);
  }
  async updateDrinkCategory<T extends Prisma.DrinkCategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkCategoryUpdateArgs>
  ): Promise<PrismaDrinkCategory> {
    return this.prisma.drinkCategory.update<T>(args);
  }
  async deleteDrinkCategory<T extends Prisma.DrinkCategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DrinkCategoryDeleteArgs>
  ): Promise<PrismaDrinkCategory> {
    return this.prisma.drinkCategory.delete(args);
  }
}
