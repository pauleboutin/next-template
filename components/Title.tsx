"use client";

import { useLekkoConfig } from "@lekko/next-sdk";
import { getTitle } from "../lekko/example";

// Ensure environment variables are loaded
if (typeof window === 'undefined') {
  require('dotenv').config();
}

export function Title() {
  const env = process.env.ENV || '';
  const titletext = useLekkoConfig(getTitle, { env });
  return titletext;
}
