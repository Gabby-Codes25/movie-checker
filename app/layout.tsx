import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Checker",
  description: "A platform to check all kinds of movies and their ratings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
