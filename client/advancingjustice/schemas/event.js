export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "affiliate",
      title: "Affiliate",
      type: "reference",
      to: { type: "affiliate" },
    },
    {
      name: "time",
      title: "Time",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Event Date / Time",
      type: "date",
      options: {
        dateFormat: "MMMM DD",
      },
    },
    {
      name: "virtual",
      title: "This is a virtual event",
      type: "boolean",
      description:
        "Provide how the event is going to be handled (Zoom, Google Meet, etc)",
    },
    {
      name: "link",
      title: "Redirect Link",
      type: "url",
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "affiliate.name",
      media: "mainImage",
    },
  },
};