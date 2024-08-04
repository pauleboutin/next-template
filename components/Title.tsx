"use client";

import { useLekkoConfig } from "@lekko/next-sdk";
import { getTitle } from "../lekko/example";

export function Title() {
  const titletext = useLekkoConfig(getTitle, { isAdmin: true });
  return (titletext ? "foo" : "bar");
}
