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
  // Sample message

// Extract the JSON string for the vercel field
const match = env.match(/vercel:\{.*?\}/);
const vercelJsonString = match ? match[0].replace('vercel:', '') : '';

// Parse the JSON string
/* const vercelData = JSON.parse(vercelJsonString);

// Get the environment value
const environment = vercelData.environment;

log.debug(environment); */

  let titletext = useLekkoConfig(getTitle, { enviro: env });
  titletext = "This is a " + titletext + " environment";
  return titletext;
}
