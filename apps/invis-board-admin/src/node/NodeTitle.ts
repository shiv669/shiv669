import { Node as TNode } from "../api/node/Node";

export const NODE_TITLE_FIELD = "address";

export const NodeTitle = (record: TNode): string => {
  return record.address?.toString() || String(record.id);
};
