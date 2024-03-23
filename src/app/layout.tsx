import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import 'devicon/devicon.min.css'; 
import Navbar from "@/components/navbar";

const hankenGrostesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Portfolio | CP",
  description: "Christophorus Prasetya Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={"/images/icon.png"} type="image/x-icon" />
      </head>
      <body className={hankenGrostesk.className} >
        {children}
      </body>
    </html>
  );
}
