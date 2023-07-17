import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "text";

export const CommentTitle = (record: TComment): string => {
  return record.text || String(record.id);
};
