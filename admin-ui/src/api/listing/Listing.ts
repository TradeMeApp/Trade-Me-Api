import { Category } from "../category/Category";
import { User } from "../user/User";

export type Listing = {
  category?: Category;
  condition?: "New" | "Excellent" | "Good" | "Okay";
  createdAt: Date;
  description: string | null;
  id: string;
  location: string | null;
  owner?: User;
  published: boolean | null;
  title: string;
  updatedAt: Date;
};
