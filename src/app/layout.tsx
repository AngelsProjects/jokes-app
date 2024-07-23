import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from '../components/layout/Navbar'
import ErrorBoundary from '../components/layout/ErrorBoundary'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jokes App",
  description: "Funny app with some jokes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ErrorBoundary>
          <Navbar />
          <main>{children}</main>
        </ErrorBoundary></body>
    </html>
  );
}
