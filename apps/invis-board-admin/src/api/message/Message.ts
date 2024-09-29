import { KeyFragment } from "../keyFragment/KeyFragment";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  keyFragments?: Array<KeyFragment>;
  recipient: string | null;
  recipientUser: string | null;
  sender: string | null;
  senderUser: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
