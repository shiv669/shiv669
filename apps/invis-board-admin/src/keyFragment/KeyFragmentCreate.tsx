import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MessageTitle } from "../message/MessageTitle";
import { NodeTitle } from "../node/NodeTitle";

export const KeyFragmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fragmentData" multiline source="fragmentData" />
        <ReferenceInput source="message.id" reference="Message" label="message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <ReferenceInput source="node.id" reference="Node" label="node">
          <SelectInput optionText={NodeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
