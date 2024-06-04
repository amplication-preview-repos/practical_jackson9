/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DrinkService } from "../drink.service";
import { DrinkCreateInput } from "./DrinkCreateInput";
import { Drink } from "./Drink";
import { DrinkFindManyArgs } from "./DrinkFindManyArgs";
import { DrinkWhereUniqueInput } from "./DrinkWhereUniqueInput";
import { DrinkUpdateInput } from "./DrinkUpdateInput";

export class DrinkControllerBase {
  constructor(protected readonly service: DrinkService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Drink })
  async createDrink(@common.Body() data: DrinkCreateInput): Promise<Drink> {
    return await this.service.createDrink({
      data: {
        ...data,

        establishment: data.establishment
          ? {
              connect: data.establishment,
            }
          : undefined,
      },
      select: {
        category: true,
        createdAt: true,

        establishment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Drink] })
  @ApiNestedQuery(DrinkFindManyArgs)
  async drinks(@common.Req() request: Request): Promise<Drink[]> {
    const args = plainToClass(DrinkFindManyArgs, request.query);
    return this.service.drinks({
      ...args,
      select: {
        category: true,
        createdAt: true,

        establishment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Drink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async drink(
    @common.Param() params: DrinkWhereUniqueInput
  ): Promise<Drink | null> {
    const result = await this.service.drink({
      where: params,
      select: {
        category: true,
        createdAt: true,

        establishment: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Drink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDrink(
    @common.Param() params: DrinkWhereUniqueInput,
    @common.Body() data: DrinkUpdateInput
  ): Promise<Drink | null> {
    try {
      return await this.service.updateDrink({
        where: params,
        data: {
          ...data,

          establishment: data.establishment
            ? {
                connect: data.establishment,
              }
            : undefined,
        },
        select: {
          category: true,
          createdAt: true,

          establishment: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Drink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDrink(
    @common.Param() params: DrinkWhereUniqueInput
  ): Promise<Drink | null> {
    try {
      return await this.service.deleteDrink({
        where: params,
        select: {
          category: true,
          createdAt: true,

          establishment: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/drinks/filter-by-category")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async FilterByCategory(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.FilterByCategory(body);
  }

  @common.Get("/drinks/filter-by-distance")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async FilterByDistance(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.FilterByDistance(body);
  }

  @common.Get("/drinks/filter-by-price")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async FilterByPrice(
    @common.Body()
    body: string
  ): Promise<string> {
    return this.service.FilterByPrice(body);
  }
}
