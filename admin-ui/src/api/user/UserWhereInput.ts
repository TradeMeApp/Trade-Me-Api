import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  listings?: ListingListRelationFilter;
  username?: StringFilter;
};
