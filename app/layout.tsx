import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ClientAppLayout from "@/layouts/ClientAppLayout";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elixir | Home",
  description: "The Elixir Tech Community",
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
          <Toaster />
          <ClientAppLayout>{children}</ClientAppLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
