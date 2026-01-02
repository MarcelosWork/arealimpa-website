import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Toaster } from "sonner";
import { LocalBusinessSchema, WebSiteSchema } from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arealimpa.com"),
  title: {
    default: "ÁREALIMPA - Limpeza de Exteriores Profissional em Portugal | Desde 2006",
    template: "%s | ÁREALIMPA - Limpeza de Exteriores",
  },
  description: "Especialistas em limpeza de exteriores desde 2006. Lavagem de telhados com SoftWash, limpeza de fachadas, pavimentos, remoção de graffiti e aluguer de plataformas elevatórias. Orçamento gratuito em todo Portugal.",
  keywords: [
    // Keywords principais
    "limpeza de exteriores",
    "limpeza de exteriores portugal",
    "limpeza de exteriores profissional",
    // Telhados
    "lavagem de telhados",
    "limpeza de telhados",
    "lavagem de telhados softwash",
    "lavagem de telhados sem pressão",
    "limpeza de telhados preço",
    "lavagem de telhados porto",
    "lavagem de telhados braga",
    // Fachadas
    "limpeza de fachadas",
    "lavagem de fachadas",
    "limpeza de fachadas preço",
    "limpeza de fachadas capoto",
    "limpeza de fachadas com manchas",
    "empresa limpeza de fachadas",
    // Pavimentos
    "limpeza de pavimentos",
    "lavagem de pavimentos exteriores",
    "limpeza de calçada portuguesa",
    "limpeza de betão",
    // Técnicas
    "softwash portugal",
    "hidroblast",
    "softblast",
    "limpeza baixa pressão",
    "limpeza alta pressão",
    // Graffiti
    "remoção de graffiti",
    "limpeza de graffiti",
    // Equipamentos
    "aluguer plataforma elevatória",
    "aluguer equipamentos limpeza",
    // Localização
    "limpeza exteriores porto",
    "limpeza exteriores braga",
    "limpeza exteriores póvoa de varzim",
    "limpeza exteriores norte portugal",
    // Tipo de cliente
    "limpeza industrial",
    "limpeza comercial",
    "limpeza residencial",
    // Ação
    "orçamento limpeza exteriores",
    "empresa limpeza exteriores",
  ],
  authors: [{ name: "ÁREALIMPA", url: "https://arealimpa.com" }],
  creator: "ÁREALIMPA",
  publisher: "ÁREALIMPA - Limpeza de Exteriores",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://arealimpa.com",
    languages: {
      "pt-PT": "https://arealimpa.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://arealimpa.com",
    siteName: "ÁREALIMPA - Limpeza de Exteriores",
    title: "ÁREALIMPA - Limpeza de Exteriores Profissional em Portugal",
    description: "Especialistas em limpeza de exteriores desde 2006. Lavagem de telhados, fachadas, pavimentos e remoção de graffiti. Orçamento gratuito em todo Portugal.",
    images: [
      {
        url: "/uploads/e3zkbms10dla66xdfczu.jpg",
        width: 1200,
        height: 630,
        alt: "ÁREALIMPA - Limpeza de Exteriores Profissional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ÁREALIMPA - Limpeza de Exteriores Profissional",
    description: "Especialistas em limpeza de exteriores desde 2006. Lavagem de telhados, fachadas e pavimentos em todo Portugal.",
    images: ["/uploads/e3zkbms10dla66xdfczu.jpg"],
    creator: "@arealimpa",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  classification: "Cleaning Services",
  verification: {
    // Adicionar quando tiver os códigos de verificação
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
  other: {
    "geo.region": "PT-13",
    "geo.placename": "Póvoa de Varzim",
    "geo.position": "41.3835;-8.7647",
    "ICBM": "41.3835, -8.7647",
    "DC.title": "ÁREALIMPA - Limpeza de Exteriores",
    "DC.creator": "ÁREALIMPA",
    "DC.subject": "Limpeza de Exteriores, Lavagem de Telhados, Lavagem de Fachadas",
    "DC.description": "Especialistas em limpeza de exteriores desde 2006",
    "DC.publisher": "ÁREALIMPA",
    "DC.language": "pt-PT",
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
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
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.clarity.ms" />

        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon e Apple Touch Icons */}
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />

        {/* Same Runtime */}
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

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "umxzee4n6o");
          `}
        </Script>

        {/* Google Tag Manager - Adicionar quando tiver o GTM ID */}
        {/* <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXX');`}
        </Script> */}
      </head>
      <body suppressHydrationWarning className="font-sans antialiased">
        {/* Structured Data Schemas */}
        <LocalBusinessSchema />
        <WebSiteSchema />

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
