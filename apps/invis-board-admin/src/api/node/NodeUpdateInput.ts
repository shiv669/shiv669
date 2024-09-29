import { KeyFragmentUpdateManyWithoutNodesInput } from "./KeyFragmentUpdateManyWithoutNodesInput";

export type NodeUpdateInput = {
  address?: string | null;
  keyFragments?: KeyFragmentUpdateManyWithoutNodesInput;
  status?: boolean | null;
};
