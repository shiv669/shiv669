import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { KeyFragmentListRelationFilter } from "../keyFragment/KeyFragmentListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NodeWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  keyFragments?: KeyFragmentListRelationFilter;
  status?: BooleanNullableFilter;
};
