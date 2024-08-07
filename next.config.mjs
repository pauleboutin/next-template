import { withLekkoNextConfig } from "@lekko/next-sdk/config";
const { withAxiom } = import('next-axiom');


/** @type {import('next').NextConfig} */
const nextConfig = {};

// This template project pre-configures the next.config.js file for you
export default withLekkoNextConfig(nextConfig);

import dotenv from 'dotenv';
dotenv.config();