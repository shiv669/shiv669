import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { KeyFragmentTitle } from "../keyFragment/KeyFragmentTitle";

export const NodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceArrayInput source="keyFragments" reference="KeyFragment">
          <SelectArrayInput
            optionText={KeyFragmentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
