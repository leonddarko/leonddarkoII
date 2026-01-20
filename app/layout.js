import { geistSans, geistMono } from "./ui/fonts";
import "./globals.css";
import Script from "next/script";
import NavigationBar from "./ui/navbar";

export const metadata = {
  title: "Leon Darko",
  description: "Leon Darko - Developer & Content Creator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-zinc-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        {children}
        <Script src="https://kit.fontawesome.com/dcd356c426.js" />
      </body>
    </html>
  );
}
