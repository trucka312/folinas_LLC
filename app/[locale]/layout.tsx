import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTranslations } from 'next-intl/server';
import {NextIntlClientProvider, useMessages} from 'next-intl';

import { fontBase, fontSecondary } from '@/app/libs/fonts'
import { ThemeProvider } from '@/app/components/Providers/ThemeProvider'
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export async function generateMetadata() {
  const t = await getTranslations('HomePage')

  return {
      title: t("metaTitle"),
      description: t("metaDescription")
  }
}

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) { 
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning >
      {/* <body className={`${fontBase.className} leading-6 text-base overflow-x-hidden`}> */}
      <body className={`leading-6 text-base overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header className={fontSecondary.className} />
            <main id="page-main" className="min-h-[300px]">{children}</main>
            <Footer/> 
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
