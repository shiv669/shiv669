import { KeyFragmentWhereInput } from "./KeyFragmentWhereInput";
import { KeyFragmentOrderByInput } from "./KeyFragmentOrderByInput";

export type KeyFragmentFindManyArgs = {
  where?: KeyFragmentWhereInput;
  orderBy?: Array<KeyFragmentOrderByInput>;
  skip?: number;
  take?: number;
};
