import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { NodeWhereUniqueInput } from "../node/NodeWhereUniqueInput";

export type KeyFragmentWhereInput = {
  fragmentData?: StringNullableFilter;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  node?: NodeWhereUniqueInput;
};
