import { Tailwind } from "@onedoc/react-print";
import React from "react";

export const Document = ({ name }) => {
  return (
    <Tailwind>
      <h1 className="text-xl font-bold">Hello {name}!</h1>
    </Tailwind>
  );
};
