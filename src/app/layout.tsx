import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ÁREALIMPA - Limpeza de Exteriores | Serviços Profissionais em Portugal",
  description: "A Árealimpa é especialista em limpeza de exteriores desde 2006. Oferecemos serviços de lavagem de fachadas, telhados, remoção de graffiti e muito mais em todo Portugal.",
  keywords: ["limpeza de exteriores", "lavagem de fachadas", "lavagem de telhados", "remoção de graffiti", "hidroblast", "softblast", "limpeza profissional", "Portugal", "Póvoa de Varzim"],
  authors: [{ name: "ÁREALIMPA" }],
  openGraph: {
    title: "ÁREALIMPA - Limpeza de Exteriores | Serviços Profissionais",
    description: "Especialistas em limpeza de exteriores desde 2006. Serviços profissionais em todo Portugal.",
    url: "https://arealimpa.com",
    siteName: "ÁREALIMPA",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ÁREALIMPA - Limpeza de Exteriores",
    description: "Especialistas em limpeza de exteriores desde 2006. Serviços profissionais em todo Portugal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">
        <ClientBody>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCTA />
          <Toaster position="top-right" richColors />
        </ClientBody>
      </body>
    </html>
  );
}
