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

import { ListingTitle } from "../listing/ListingTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Alt" source="alt" />
        <ReferenceInput source="listing.id" reference="Listing" label="Listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Order" source="order" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
