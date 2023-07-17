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
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CommentTitle } from "./CommentTitle";
import { ListingTitle } from "../listing/ListingTitle";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="User" label="Author">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="commented.id"
          reference="Comment"
          label="Commented"
        >
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="commentOn"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="listing.id" reference="Listing" label="Listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
