import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "True Cleanout",
  description: "Professional junk removal in Des Moines and surrounding areas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}