export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title (Required)",
      type: "string",
      validation: (Rule) => Rule.required().error("This field is required"),
    },
    {
      name: "slug",
      title: "Slug (Required)",
      description:
        "https://advancingjustice.org/news/<This is where this slug goes to for this article>; 'Generate' button will autofill this. Must be unique.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("This field is required"),
    },
    {
      name: "affiliate",
      title: "Affiliate (Required)",
      description: "May be one or more",
      type: "array",
      of: [{ type: "reference", to: { type: "affiliate" } }],
      validation: (Rule) => Rule.required().error("This field is required"),
    },
    {
      name: "press_release",
      title: "Press Release",
      description: "Toggle if this article is a press release",
      type: "boolean",
    },
    {
      name: "publishedDate",
      title: "Published Date (Required)",
      type: "date",
      validation: (Rule) => Rule.required().error("This field is required"),
    },
    {
      name: "body",
      title: "Short Description (Required)",
      type: "text",
      description:
        "This is a preview of this article displayed on the news list.",
      validation: (Rule) =>
        Rule.required().min(1).max(200).error("Maximum 200 characters"),
    },
    {
      name: "link",
      title: "Redirect Link",
      description:
        "If this area is filled, User will be redirected to this site by clicking this news. Otherwise, please provide the article to the below 'Article' section.",
      type: "url",
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
