import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fractopus",
  keywords: "Fractopus,Connect",
  description: "Fractopus: A Complex Organism Evolving from the Single Cells of the Internet",
  openGraph:
  {
    type: "website",
    url: "https://www.fractopus.net",
    title: "Fractopus",
    description: "Fractopus: A Complex Organism Evolving from the Single Cells of the Internet",
    siteName: "Fractopus",
    images: [{
      // url: "https://static.copus.io/images/client/202407/test/65a4f47e4d76c906945b1bf7952cc16b.webp",
      url: "/src/app/test.jpg",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
