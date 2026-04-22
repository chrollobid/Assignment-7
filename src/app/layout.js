import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/banner/Banner";
import FriendSection from "@/components/Friends/FriendSection";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Friends to keep close in your life",
};

export default function RootLayout({ children }) {
  return (
    <html
    data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<Navbar></Navbar>
<Banner/>
<FriendSection/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
