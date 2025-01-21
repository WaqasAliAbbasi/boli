import type { Metadata } from "next";

import "./globals.css";
import { Navigation } from "./_components/Navigation";

export const metadata: Metadata = {
  title: "Boli",
  description: "A web app for Boli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={"h=full"}>
        <div className="min-h-full">
          <Navigation />
          <div className="py-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
