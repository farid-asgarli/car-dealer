import type { Metadata } from "next";
import "./globals.css";
import "./page.css";

export const metadata: Metadata = {
  title: "Musa Motors",
  description: "Musa Motors - Baku eksklüziv tortlar butiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.8.95/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      </head>
      <body className={"vh-100 "}>{children}</body>
    </html>
  );
}
