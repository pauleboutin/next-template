"use client";

import { useLekkoConfig } from "@lekko/next-sdk";
import { getTitle } from "../lekko/paultest";
import { useLogger } from 'next-axiom';

interface VercelData {
  fields: {
    path: string;
  };
  level: string;
  message: string;
  vercel: {
    environment: string;
    projectId: string;
    region: string;
    route: string;
    source: string;
    teamName: string;
  };
}

// Ensure environment variables are loaded
if (typeof window === 'undefined') {
  require('dotenv').config();
}

export function Title() {
  const env = process.env.ENV || 'ENV not set';
  const vercelEnv = process.env.VERCEL_ENV || 'Vercel environment undefined';

  const log = useLogger();
  log.debug(`ENV = ${env}`);
  log.debug(`vercel.environment = ${vercelEnv}`);
  

  let titletext = useLekkoConfig(getTitle, { enviro: env });
  titletext = "This is a " + titletext + " environment";
  return titletext;
}
