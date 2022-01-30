export default {
  name: "affiliate",
  title: "Affiliate",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "link",
      description: "Please provide https://",
      title: "Link",
      type: "url",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Max 96 characters.",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
