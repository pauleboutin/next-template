
import { withLekkoNextConfig } from "@lekko/next-sdk/config";
import { withAxiom } from 'next-axiom';

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Wrap the config with both withAxiom and withLekkoNextConfig
export default withAxiom(withLekkoNextConfig(nextConfig));
