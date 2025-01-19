import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boli Web App",
  description: "A web app for Boli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
