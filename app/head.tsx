import React from "react";
import DefaultTags from "./DefaultTags";

export default function Head({
  params = { slug: "" },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <title>My Page</title>
      <DefaultTags></DefaultTags>
    </>
  );
}
