import { KeyFragmentCreateNestedManyWithoutNodesInput } from "./KeyFragmentCreateNestedManyWithoutNodesInput";

export type NodeCreateInput = {
  address?: string | null;
  keyFragments?: KeyFragmentCreateNestedManyWithoutNodesInput;
  status?: boolean | null;
};
