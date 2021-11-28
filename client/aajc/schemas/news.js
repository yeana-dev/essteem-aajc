export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(90).error("Maximum 90 characters"),
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
      name: "press_release",
      title: "Press Release",
      type: "boolean",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      option: {
        dateFormat: "MMMM D, YYYY",
      },
    },
    {
      name: "link",
      title: "Redirect Link",
      type: "url",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
      validation: (Rule) =>
        Rule.required().max(200).error("Maximum 200 characters"),
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
