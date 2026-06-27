import type { Metadata } from "next";

import {
  GeistSans,
} from "geist/font/sans";

import "./globals.css";

export const metadata: Metadata = {
  title: "DataBank",
  description:
    "Reserve money for internet purchases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}