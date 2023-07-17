import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type ImageWhereInput = {
  alt?: StringNullableFilter;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  order?: IntFilter;
  url?: StringFilter;
};
