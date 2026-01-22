import { courierPrime } from "./ui/fonts";
import "./globals.css";
import Script from "next/script";
import NavigationBar from "./ui/navbar";
import Footer from "./ui/sections/Footer";

export const metadata = {
  title: "Leon Darko",
  description: "Leon Darko - Developer & Content Creator",
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
