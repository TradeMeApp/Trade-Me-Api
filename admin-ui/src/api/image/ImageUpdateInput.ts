import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type ImageUpdateInput = {
  alt?: string | null;
  listing?: ListingWhereUniqueInput;
  order?: number;
  url?: string;
};
