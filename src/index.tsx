import React from "react";
import { compile } from "@onedoc/react-print";
import { Onedoc } from "@onedoc/client";

import { Document } from "./document";

// The API key is passed as an environment variable
const apiKey = process.env.ONEDOC_API_KEY as string;

const onedoc = new Onedoc(apiKey);

export const handler = async (event: { name: string }) => {
  const html = await compile(<Document name={event.name} />);

  const { file, error } = await onedoc.render({
    html,
    test: true,
  });

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }

  return {
    statusCode: 200,
    body: new Buffer(file).toString("base64"),
    isBase64Encoded: true,
    headers: {
      "Content-Type": "application/pdf",
    },
  };
};
