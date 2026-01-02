import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Limpeza de Exteriores Profissional",
  description: "Serviços profissionais de limpeza de exteriores: lavagem de telhados SoftWash, limpeza de fachadas, pavimentos, remoção de graffiti e aluguer de plataformas elevatórias. Orçamento gratuito em Portugal.",
  keywords: [
    "serviços limpeza exteriores",
    "lavagem telhados",
    "limpeza fachadas",
    "limpeza pavimentos",
    "softwash",
    "hidroblast",
    "softblast",
    "remoção graffiti",
    "aluguer plataformas",
    "limpeza profissional",
    "limpeza industrial",
    "limpeza comercial",
    "limpeza residencial",
    "orçamento limpeza",
  ],
  alternates: {
    canonical: "https://arealimpa.com/servicos",
  },
  openGraph: {
    title: "Serviços de Limpeza de Exteriores | ÁREALIMPA",
    description: "Serviços profissionais de limpeza de exteriores: lavagem de telhados, fachadas, pavimentos e mais. Orçamento gratuito.",
    url: "https://arealimpa.com/servicos",
    type: "website",
  },
};

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
