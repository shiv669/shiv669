import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";
import { NODE_TITLE_FIELD } from "../node/NodeTitle";

export const KeyFragmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fragmentData" source="fragmentData" />
        <TextField label="ID" source="id" />
        <ReferenceField label="message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="node" source="node.id" reference="Node">
          <TextField source={NODE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
