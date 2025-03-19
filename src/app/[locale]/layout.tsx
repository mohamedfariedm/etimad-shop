import { i18nRouterConfig } from "@/i18nRouterConfig";
import { dir } from "i18next";
import type { Metadata } from "next";
import GlobalProvider from "../../Providers";
import "../../styles/globals.css";



export const metadata: Metadata = {
  title: "Eitmad",
  description: "Eitmad app",
  icons: {
    icon: "/assets/images/eitmad.svg",
  },
};

export function generateStaticParams() {
  return i18nRouterConfig.locales.map((locale) => ({ locale }));
}



export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="bukra">
        <main className="w-full">
          <GlobalProvider locale={locale}>{children}</GlobalProvider>
        </main>
      </body>
    </html>
  );
}
