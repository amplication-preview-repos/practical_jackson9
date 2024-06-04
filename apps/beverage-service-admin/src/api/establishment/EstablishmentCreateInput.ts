import { DrinkCreateNestedManyWithoutEstablishmentsInput } from "./DrinkCreateNestedManyWithoutEstablishmentsInput";

export type EstablishmentCreateInput = {
  address?: string | null;
  drinks?: DrinkCreateNestedManyWithoutEstablishmentsInput;
  name?: string | null;
  owner?: string | null;
};
