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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '939787046091878');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=939787046091878&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
