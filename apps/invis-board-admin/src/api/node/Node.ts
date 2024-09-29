import { KeyFragment } from "../keyFragment/KeyFragment";

export type Node = {
  address: string | null;
  createdAt: Date;
  id: string;
  keyFragments?: Array<KeyFragment>;
  status: boolean | null;
  updatedAt: Date;
};
