import { Message } from "../message/Message";
import { Node } from "../node/Node";

export type KeyFragment = {
  createdAt: Date;
  fragmentData: string | null;
  id: string;
  message?: Message | null;
  node?: Node | null;
  updatedAt: Date;
};
