import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  lastName?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  username?: StringFilter;
};
