import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  recipientUser?: SortOrder;
  sender?: SortOrder;
  senderUser?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
