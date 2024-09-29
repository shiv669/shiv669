import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";

export type KeyFragmentCreateInput = {
  fragmentData?: string | null;
  message?: MessageWhereUniqueInput | null;
  node?: NodeWhereUniqueInput | null;
};
