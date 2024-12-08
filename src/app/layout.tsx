import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
const poppins =Poppins({
  subsets:['latin'],
  weight:['400','700']
});
const inter = Inter({ 
  subsets: ["latin"],
weight:['400','500','700']
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
