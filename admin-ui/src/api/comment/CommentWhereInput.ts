import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentListRelationFilter } from "./CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type CommentWhereInput = {
  author?: UserWhereUniqueInput;
  commented?: CommentWhereUniqueInput;
  commentOn?: CommentListRelationFilter;
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  text?: StringFilter;
};
