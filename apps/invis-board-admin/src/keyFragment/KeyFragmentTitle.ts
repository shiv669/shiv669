import { KeyFragment as TKeyFragment } from "../api/keyFragment/KeyFragment";

export const KEYFRAGMENT_TITLE_FIELD = "id";

export const KeyFragmentTitle = (record: TKeyFragment): string => {
  return record.id?.toString() || String(record.id);
};
