import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="fixed">
      <Head>
        <meta name="application-name" content="BodyWeight" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BodyWeight" />

        <meta name="theme-color" content="#ea580c" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <body className="h-screen w-screen overflow-hidden bg-gradient-to-br from-orange-100 text-black/95 dark:from-orange-700 dark:to-orange-950 dark:text-white/95">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
