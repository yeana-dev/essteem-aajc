export default {
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "body",
      media: "image",
    },
  },
};
