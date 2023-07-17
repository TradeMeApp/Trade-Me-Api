import { Category } from "../category/Category";
import { Image } from "../image/Image";
import { User } from "../user/User";

export type Listing = {
  category?: Category;
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
