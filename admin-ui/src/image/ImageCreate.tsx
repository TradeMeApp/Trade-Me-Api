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

import { ListingTitle } from "../listing/ListingTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Alt" source="alt" />
        <ReferenceInput source="listing.id" reference="Listing" label="Listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Order" source="order" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
