import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedir Orçamento Gratuito de Limpeza de Exteriores",
  description: "Peça um orçamento gratuito e sem compromisso para serviços de limpeza de exteriores. Lavagem de telhados, fachadas, pavimentos em todo Portugal. Resposta em 24h. Ligue: 916 544 289.",
  keywords: [
    "orçamento limpeza exteriores",
    "orçamento lavagem telhados",
    "orçamento limpeza fachadas",
    "contactos arealimpa",
    "pedir orçamento limpeza",
    "orçamento gratuito",
    "contactar empresa limpeza",
    "telefone arealimpa",
    "email arealimpa",
    "limpeza exteriores porto",
    "limpeza exteriores braga",
    "limpeza exteriores póvoa de varzim",
    "orçamento online limpeza",
  ],
  alternates: {
    canonical: "https://arealimpa.com/contactos",
  },
  openGraph: {
    title: "Pedir Orçamento Gratuito | ÁREALIMPA",
    description: "Peça um orçamento gratuito para limpeza de exteriores. Lavagem de telhados, fachadas e pavimentos em todo Portugal.",
    url: "https://arealimpa.com/contactos",
    type: "website",
  },
  other: {
    "geo.region": "PT-13",
    "geo.placename": "Póvoa de Varzim",
    "geo.position": "41.3835;-8.7647",
    "ICBM": "41.3835, -8.7647",
  },
};

export default function ContactosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
