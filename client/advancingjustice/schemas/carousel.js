export default {
  name: "carousel",
  title: "Carousel",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Sub Heading",
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
      name: "link",
      title: "Redirect Link",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
  },
};
