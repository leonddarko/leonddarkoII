import { courierPrime } from "./ui/fonts";
import "./globals.css";
import Script from "next/script";
import NavigationBar from "./ui/navbar";
import Footer from "./ui/sections/Footer";

export const metadata = {
  title: "Leon Darko",
  description: "Leon Darko - Developer & Content Creator",

  openGraph: {
    title: "Leon Darko",
    description: "Developer & Content Creator",
    url: "https://leonddarkov2.vercel.app",
    siteName: "Leon Darko",
    images: [
      {
        url: "/assets/leon_hero_img.jpg", // place in /public
        width: 1200,
        height: 630,
        alt: "Leon Darko — Developer & Content Creator",
      },
    ],
    type: "website",
  },

    twitter: {
    card: "summary_large_image",
    title: "Leon Darko",
    description: "Developer & Content Creator",
    images: ["/assets/leon_hero_img.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-slate-950">
      <body
        className={`${courierPrime.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Script src="https://kit.fontawesome.com/dcd356c426.js" />
        <Footer />
      </body>
    </html>
  );
}
