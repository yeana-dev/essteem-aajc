export default {
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "privacy_policy",
      title: "Privacy Policy",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
