import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EstablishmentService } from "./establishment.service";
import { EstablishmentControllerBase } from "./base/establishment.controller.base";

@swagger.ApiTags("establishments")
@common.Controller("establishments")
export class EstablishmentController extends EstablishmentControllerBase {
  constructor(protected readonly service: EstablishmentService) {
    super(service);
  }
}
