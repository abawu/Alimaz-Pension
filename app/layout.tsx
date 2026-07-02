import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALIMAZ Pension | Premium Guest House in Wolayta",
  description:
    "A premium boutique guest house in Wolayta, Ethiopia for leisure travelers, business guests, and visitors attending events at Gutera Hall."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
