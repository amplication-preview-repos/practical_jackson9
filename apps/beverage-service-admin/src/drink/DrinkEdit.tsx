import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { EstablishmentTitle } from "../establishment/EstablishmentTitle";

export const DrinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
