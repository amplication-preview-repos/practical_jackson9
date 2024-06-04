import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { EstablishmentTitle } from "../establishment/EstablishmentTitle";

export const DrinkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <ReferenceInput
          source="establishment.id"
          reference="Establishment"
          label="establishment"
        >
          <SelectInput optionText={EstablishmentTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
