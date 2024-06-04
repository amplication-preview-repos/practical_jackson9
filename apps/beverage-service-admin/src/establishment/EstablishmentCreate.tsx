import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DrinkTitle } from "../drink/DrinkTitle";

export const EstablishmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput
          source="drinks"
          reference="Drink"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DrinkTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
      </SimpleForm>
    </Create>
  );
};
