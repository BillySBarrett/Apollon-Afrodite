import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "seasonImgs",
      title: "Season Images",
      type: "document",
      fields: [
        {
          name: "seasonName",
          title: "Season Name",
          type: "string",
        },
        {
          name: "images",
          title: "Images",
          type: "array",
          of: [{ type: "image" }],
        },
      ],
    },
  ],
};
