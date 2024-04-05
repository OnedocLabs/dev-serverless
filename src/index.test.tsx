import { describe, expect, it } from "vitest";

import { handler } from "./index";

describe("serverless function", () => {
  it(
    "should not throw an error",
    async () => {
      const event = { name: "John Doe" };

      await handler(event);
    },
    {
      timeout: 20000,
    }
  );
});
