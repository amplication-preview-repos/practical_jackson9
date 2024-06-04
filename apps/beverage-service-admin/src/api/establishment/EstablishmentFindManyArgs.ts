import { EstablishmentWhereInput } from "./EstablishmentWhereInput";
import { EstablishmentOrderByInput } from "./EstablishmentOrderByInput";

export type EstablishmentFindManyArgs = {
  where?: EstablishmentWhereInput;
  orderBy?: Array<EstablishmentOrderByInput>;
  skip?: number;
  take?: number;
};
