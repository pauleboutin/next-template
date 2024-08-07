"use client";

import { useLekkoConfig } from "@lekko/next-sdk";
import { getTitle } from "../lekko/paultest";
import { useLogger } from 'next-axiom';


// Ensure environment variables are loaded
if (typeof window === 'undefined') {
  require('dotenv').config();
}

export function Title() {
  const env = process.env.ENV || 'ENV not set';
  const log = useLogger();
  log.debug('ENV is set to', { env });
  let titletext = useLekkoConfig(getTitle, { enviro: env });
  titletext = "This is a " + titletext + " environment";
  return titletext;
}
