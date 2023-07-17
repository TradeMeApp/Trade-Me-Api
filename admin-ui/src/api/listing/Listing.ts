import { Category } from "../category/Category";
import { Comment } from "../comment/Comment";
import { Image } from "../image/Image";
import { User } from "../user/User";

export type Listing = {
  category?: Category;
  comments?: Array<Comment>;
  condition?: "New" | "Excellent" | "Good" | "Okay";
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<Image>;
  location: string | null;
  owner?: User;
  published: boolean | null;
  title: string;
  updatedAt: Date;
};
