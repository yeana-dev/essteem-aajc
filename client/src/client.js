import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "dvd4y0u2", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2021-11-30",
  useCden: true,
  token:
    "skw0QVdazJ6AzWygqbVEL78R3cmFt6N7QjROGP6Y7B7c9zqqX8KV4f2BdXleQdvAh8oKZ9dW1QlCLtkpm02cVrtvvSRTtlakQAFTGnrOdyZ35FYtXT3rHgS2F4tizQUkO5j9eASremofj9JU8ncqR5xrJ5hscYtLk2suN1PSlAgqm1gYbf2S",
});
