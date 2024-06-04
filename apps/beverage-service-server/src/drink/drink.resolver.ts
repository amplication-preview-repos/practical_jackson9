import * as graphql from "@nestjs/graphql";
import { DrinkResolverBase } from "./base/drink.resolver.base";
import { Drink } from "./base/Drink";
import { DrinkService } from "./drink.service";

@graphql.Resolver(() => Drink)
export class DrinkResolver extends DrinkResolverBase {
  constructor(protected readonly service: DrinkService) {
    super(service);
  }
}
