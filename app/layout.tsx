import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/header/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/home/footer/Footer";
import StoreProvider from "@/storeProvider/StoreProvider";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Houmaidi Shop",
  description: "ecommerce website using nextjs",
  icons: {
    icon: "/images/logo.png",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
