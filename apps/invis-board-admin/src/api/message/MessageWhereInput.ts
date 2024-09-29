import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeyFragmentListRelationFilter } from "../keyFragment/KeyFragmentListRelationFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  keyFragments?: KeyFragmentListRelationFilter;
  recipient?: StringNullableFilter;
  recipientUser?: StringNullableFilter;
  sender?: StringNullableFilter;
  senderUser?: StringNullableFilter;
  status?: "Option1";
};
