import * as graphql from "@nestjs/graphql";
import { EstablishmentResolverBase } from "./base/establishment.resolver.base";
import { Establishment } from "./base/Establishment";
import { EstablishmentService } from "./establishment.service";

@graphql.Resolver(() => Establishment)
export class EstablishmentResolver extends EstablishmentResolverBase {
  constructor(protected readonly service: EstablishmentService) {
    super(service);
  }
}
