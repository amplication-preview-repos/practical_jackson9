import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DrinkServiceBase } from "./base/drink.service.base";

@Injectable()
export class DrinkService extends DrinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
