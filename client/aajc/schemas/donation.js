export default {
  name: "donation",
  title: "Donation",
  type: "document",
  fields: [
    {
      name: "affiliate",
      title: "Affiliate",
      type: "reference",
      to: { type: "affiliate" },
    },
    {
      name: "link",
      title: "Redirect Link",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "affiliate.name",
    },
  },
};
