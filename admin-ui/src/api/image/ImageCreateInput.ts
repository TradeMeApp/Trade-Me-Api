import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type ImageCreateInput = {
  alt?: string | null;
  listing: ListingWhereUniqueInput;
  order: number;
  url: string;
};
