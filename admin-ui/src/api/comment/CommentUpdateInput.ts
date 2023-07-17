import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentUpdateManyWithoutCommentsInput } from "./CommentUpdateManyWithoutCommentsInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type CommentUpdateInput = {
  author?: UserWhereUniqueInput;
  commented?: CommentWhereUniqueInput | null;
  commentOn?: CommentUpdateManyWithoutCommentsInput;
  listing?: ListingWhereUniqueInput;
  text?: string;
};
