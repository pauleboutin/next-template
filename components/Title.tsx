"use client";

import { useLekkoConfig } from "@lekko/next-sdk";
import { getTitle, getMerchant, Merchant } from "../lekko/paultest";
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

function merchantToString(merchant: Merchant): string {
  return `Merchant Details:
    Name: ${merchant.Name}
    DeliveryRadius: ${merchant.DeliveryRadius}
    Hours: ${merchant.Hours}
    ParkingLocation: ${merchant.ParkingLocation}
    PrepTime: ${merchant.PrepTime}
    Sources: ${merchant.Sources.join(', ')}
  `;
}
// Ensure environment variables are loaded
if (typeof window === 'undefined') {
  require('dotenv').config();
}

// 
export function Title() {
  let env = process.env.ENV || 'undefined';
  const vercelEnv = process.env.VERCEL_ENV || 'undefined';

  const log = useLogger();
  log.debug(`ENV = ${env}`);
  log.debug(`vercel.environment = ${vercelEnv}`);
  if (vercelEnv !== 'undefined') {
    env = vercelEnv;
  }
  let titletext = useLekkoConfig(getTitle, { enviro: env });
  titletext = "This is a " + titletext + " environment";
  let merchant = getMerchant("burger-central");
  if (merchant) {
    log.debug(merchantToString(merchant));
  } else {
    log.debug("Merchant not found");
  }

  return titletext;
}
