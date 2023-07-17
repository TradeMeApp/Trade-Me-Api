import { Listing } from "../listing/Listing";

export type Image = {
  alt: string | null;
  createdAt: Date;
  id: string;
  listing?: Listing;
  order: number;
  updatedAt: Date;
  url: string;
};
