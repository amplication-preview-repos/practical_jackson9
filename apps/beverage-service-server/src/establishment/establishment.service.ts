import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EstablishmentServiceBase } from "./base/establishment.service.base";

@Injectable()
export class EstablishmentService extends EstablishmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
