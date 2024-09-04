import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import Header from "./components/header";

import { Inter } from "next/font/google";
import { Footer } from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cartão Viva Multi",
  description: "Cartão Viva Multi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <Header>
          <Navbar />
        </Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
