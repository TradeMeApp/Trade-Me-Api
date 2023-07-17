import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "alt";

export const ImageTitle = (record: TImage): string => {
  return record.alt || String(record.id);
};
