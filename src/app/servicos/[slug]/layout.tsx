import type { Metadata } from "next";
import { services } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

// Mapeamento de keywords por serviço
const serviceKeywords: Record<string, string[]> = {
  "lavagem-telhados-softwash": [
    "lavagem de telhados",
    "limpeza de telhados",
    "softwash telhados",
    "lavagem telhados sem pressão",
    "remoção musgo telhado",
    "limpeza telhados preço",
    "lavagem telhados portugal",
    "tratamento telhados fungos",
    "lavagem telhados porto",
    "softwash systems portugal",
  ],
  "limpeza-fachadas": [
    "limpeza de fachadas",
    "lavagem de fachadas",
    "limpeza fachadas capoto",
    "limpeza fachadas preço",
    "limpeza fachadas manchas verdes",
    "limpeza fachadas prédio",
    "empresa limpeza fachadas",
    "limpeza fachadas monomassa",
    "softblast fachadas",
    "recuperação fachadas",
  ],
  "limpeza-pavimentos": [
    "limpeza de pavimentos",
    "lavagem pavimentos exteriores",
    "limpeza calçada portuguesa",
    "limpeza betão",
    "limpeza pavimentos industriais",
    "hidrolavagem pavimentos",
    "limpeza pavimentos alta pressão",
    "restauração pavimentos",
    "limpeza passeios",
    "limpeza pátios exteriores",
  ],
  "aluguer-equipamentos": [
    "aluguer plataforma elevatória",
    "aluguer equipamentos altura",
    "plataforma elevatória preço",
    "aluguer plataforma 20m",
    "aluguer plataforma 24m",
    "aluguer equipamentos construção",
    "plataforma elevatória porto",
    "aluguer com manobrador",
    "equipamentos trabalhos altura",
    "plataformas certificadas",
  ],
  "trabalhos-construcao-civil": [
    "pequenas obras",
    "reparação muros",
    "reparação fachadas",
    "construção civil pequenas obras",
    "reparações exteriores",
    "manutenção edifícios",
    "pintura exterior",
    "reparação alvenaria",
    "trabalhos construção civil",
    "serviços construção",
  ],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Serviço não encontrado",
      description: "O serviço que procura não foi encontrado.",
    };
  }

  const keywords = serviceKeywords[slug] || [];

  return {
    title: service.title,
    description: `${service.description} Orçamento gratuito em todo Portugal. ÁREALIMPA - Especialistas desde 2006.`,
    keywords: [
      ...keywords,
      "ÁREALIMPA",
      "limpeza exteriores",
      "portugal",
      "orçamento gratuito",
    ],
    alternates: {
      canonical: `https://arealimpa.com/servicos/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ÁREALIMPA`,
      description: service.description,
      url: `https://arealimpa.com/servicos/${slug}`,
      siteName: "ÁREALIMPA - Limpeza de Exteriores",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "pt_PT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ÁREALIMPA`,
      description: service.description,
      images: [service.image],
    },
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceLayout({ children }: Props) {
  return <>{children}</>;
}
