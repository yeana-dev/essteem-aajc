import { useState, useEffect } from "react";
import sanityClient from "../client";
import PortableText from "react-portable-text";

export default function PrivacyPolicy() {
  const [policy, setPolicy] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "privacyPolicy"][0]{
      privacy_policy
    }`
      )
      .then((data) => {
        setPolicy(data);
      })
      .catch(console.error);
  }, []);

  if (policy !== null) {
    return (
      <main className="max-w-6xl mx-auto p-10">
        <PortableText content={policy.privacy_policy} />
      </main>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
