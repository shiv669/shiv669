import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MessageTitle } from "../message/MessageTitle";
import { NodeTitle } from "../node/NodeTitle";

export const KeyFragmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fragmentData" multiline source="fragmentData" />
        <ReferenceInput source="message.id" reference="Message" label="message">
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <ReferenceInput source="node.id" reference="Node" label="node">
          <SelectInput optionText={NodeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
