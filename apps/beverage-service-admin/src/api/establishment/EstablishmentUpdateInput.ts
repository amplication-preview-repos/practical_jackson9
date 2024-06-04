import { DrinkUpdateManyWithoutEstablishmentsInput } from "./DrinkUpdateManyWithoutEstablishmentsInput";

export type EstablishmentUpdateInput = {
  address?: string | null;
  drinks?: DrinkUpdateManyWithoutEstablishmentsInput;
  name?: string | null;
  owner?: string | null;
};
