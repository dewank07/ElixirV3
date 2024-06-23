import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ClientAppLayout from "@/layouts/ClientAppLayout";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elixir | Home",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/jsm-logo.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <ClientAppLayout>{children}</ClientAppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
