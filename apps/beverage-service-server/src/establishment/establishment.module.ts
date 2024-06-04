import { Module } from "@nestjs/common";
import { EstablishmentModuleBase } from "./base/establishment.module.base";
import { EstablishmentService } from "./establishment.service";
import { EstablishmentController } from "./establishment.controller";
import { EstablishmentResolver } from "./establishment.resolver";

@Module({
  imports: [EstablishmentModuleBase],
  controllers: [EstablishmentController],
  providers: [EstablishmentService, EstablishmentResolver],
  exports: [EstablishmentService],
})
export class EstablishmentModule {}
