import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
