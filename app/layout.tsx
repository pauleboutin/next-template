import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LekkoNextProvider } from "@lekko/next-sdk";
import { AxiomWebVitals } from 'next-axiom';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paul's Lekko Test App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AxiomWebVitals />
        <LekkoNextProvider>
        {children}
        </LekkoNextProvider>
      </body>
    </html>
  );
}
