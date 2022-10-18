import React from "react";
import serializers from "./serializers";
import BlockContent from "@sanity/block-content-to-react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

function SimpleBlockContent({ blocks, defaultTag }) {
  if (!blocks) {
    console.error("Missing blocks");
    return null;
  }

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers(defaultTag)}
      projectId={projectId}
      dataset={dataset}
    />
  );
}

export default SimpleBlockContent;
