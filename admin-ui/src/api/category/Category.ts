import { Listing } from "../listing/Listing";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  imageUrl: string | null;
  listings?: Array<Listing>;
  name: string;
  updatedAt: Date;
};
