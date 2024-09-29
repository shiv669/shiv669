import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";

export type KeyFragmentUpdateInput = {
  fragmentData?: string | null;
  message?: MessageWhereUniqueInput | null;
  node?: NodeWhereUniqueInput | null;
};
