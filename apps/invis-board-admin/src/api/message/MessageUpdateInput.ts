import { KeyFragmentUpdateManyWithoutMessagesInput } from "./KeyFragmentUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  content?: string | null;
  keyFragments?: KeyFragmentUpdateManyWithoutMessagesInput;
  recipient?: string | null;
  recipientUser?: string | null;
  sender?: string | null;
  senderUser?: string | null;
  status?: "Option1" | null;
};
