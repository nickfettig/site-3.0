import type { Metadata } from "next";
import { sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick Fettig",
  description: "Nick Fettig's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} bg-[#D3DADA]`}>
        {children}
      </body>
    </html>
  );
}
