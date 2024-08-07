"use client";

import { useLekkoConfig } from "@lekko/next-sdk";
import { getTitle } from "../lekko/paultest";

// Ensure environment variables are loaded
if (typeof window === 'undefined') {
  require('dotenv').config();
}

export function Title() {
  const env = process.env.ENV || 'ENV not set';
  let titletext = useLekkoConfig(getTitle, { enviro: env });
  titletext = "This is a " + titletext + " environment";
  return titletext;
}
