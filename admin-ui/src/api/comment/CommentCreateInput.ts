import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentCreateNestedManyWithoutCommentsInput } from "./CommentCreateNestedManyWithoutCommentsInput";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type CommentCreateInput = {
  author: UserWhereUniqueInput;
  commented?: CommentWhereUniqueInput | null;
  commentOn?: CommentCreateNestedManyWithoutCommentsInput;
  listing: ListingWhereUniqueInput;
  text: string;
};
