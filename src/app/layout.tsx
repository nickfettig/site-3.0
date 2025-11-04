import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nick Fettig",
  description: "Nick Fettig's portfoio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#D3DADA]">
        {children}
      </body>
    </html>
  );
}
