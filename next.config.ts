import type { NextConfig } from "next";
import withPWABase from "next-pwa";

const withPWA = withPWABase({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {};

export default withPWA(nextConfig);
