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
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "categories",
    //   title: "Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "category" } }],
    // },
    {
      name: "dateTime",
      title: "Event Data / Time",
      type: "datetime",
    },
    {
      name: "Virtual",
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
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "affiliate.name",
      media: "mainImage",
    },
    // prepare(selection) {
    //   const { author } = selection;
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`,
    //   });
    // },
  },
};
