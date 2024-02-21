import type { Metadata } from "next";
import "./globals.css";

import { fontBase, fontSecondary } from '@/app/libs/fonts'

import { ThemeProvider } from '@/app/components/Providers/ThemeProvider'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Home - Folinas LLC",
  description: "Founded in October 2017, Folinas stands as a prominent player in Vietnam’s cross-border e-commerce sector. The core of its operations revolves around the online retailing of products through platforms such as Amazon, Etsy, eBay, and Tiktok Shop"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontBase.className} leading-6 text-base`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header className={fontSecondary.className} />
          <main id="page-main" className="min-h-[300px]">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
