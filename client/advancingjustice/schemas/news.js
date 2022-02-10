export default {
  name: "news",
  title: "News",
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
      type: "array",
      of: [{ type: "reference", to: { type: "affiliate" } }],
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
    },
    {
      name: "link",
      title: "Redirect Link",
      description:
        "If this area is filled, User will be redirected to this site by clicking this news. Otherwise, please provide the article to the below 'Article' section.",
      type: "url",
    },
    {
      name: "body",
      title: "Body",
      type: "text",
      description:
        "This is a preview of this article displayed on the news list.",
      validation: (Rule) =>
        Rule.required().max(200).error("Maximum 200 characters"),
    },
    {
      name: "article",
      title: "Article",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "affiliate.name",
    },
  },
};
