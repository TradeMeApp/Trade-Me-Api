import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { CommentTitle } from "../comment/CommentTitle";
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
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
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
