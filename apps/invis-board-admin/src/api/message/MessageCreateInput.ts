import { KeyFragmentCreateNestedManyWithoutMessagesInput } from "./KeyFragmentCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  content?: string | null;
  keyFragments?: KeyFragmentCreateNestedManyWithoutMessagesInput;
  recipient?: string | null;
  recipientUser?: string | null;
  sender?: string | null;
  senderUser?: string | null;
  status?: "Option1" | null;
};
