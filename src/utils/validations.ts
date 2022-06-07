import { object, string } from "zod";

export const folderSchema = object({
  name: string()
    .min(1, "Title is required")
    .max(120, "Title must be less than 100 characters")
});
