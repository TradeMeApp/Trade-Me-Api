import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ImageTitle } from "../image/ImageTitle";
import { UserTitle } from "../user/UserTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <SelectInput
          source="condition"
          label="Condition"
          choices={[
            { label: "New", value: "New" },
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Okay", value: "Okay" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <TextInput label="Location" source="location" />
        <ReferenceInput source="owner.id" reference="User" label="Owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="Published" source="published" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
