import React from "react";
import { Thing } from "schema-dts";

interface JsonLdProps {
  schema: Thing | Record<string, unknown>;
}

export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
