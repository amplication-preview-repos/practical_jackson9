import { Establishment as TEstablishment } from "../api/establishment/Establishment";

export const ESTABLISHMENT_TITLE_FIELD = "name";

export const EstablishmentTitle = (record: TEstablishment): string => {
  return record.name?.toString() || String(record.id);
};
