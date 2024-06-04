import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ESTABLISHMENT_TITLE_FIELD } from "./EstablishmentTitle";

export const EstablishmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Drink"
          target="establishmentId"
          label="Drinks"
        >
          <Datagrid rowClick="show">
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="establishment"
              source="establishment.id"
              reference="Establishment"
            >
              <TextField source={ESTABLISHMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
