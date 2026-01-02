import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
  title: "Portfolio de Limpeza de Exteriores - Projetos Antes e Depois",
  description: "Veja os nossos projetos de limpeza de exteriores: lavagem de telhados, fachadas e pavimentos. Mais de 1500 projetos concluídos com sucesso em todo Portugal. Resultados antes e depois.",
  keywords: [
    "portfolio limpeza exteriores",
    "projectos limpeza",
    "casos de estudo",
    "trabalhos realizados",
    "antes e depois limpeza",
    "resultados lavagem telhados",
    "resultados limpeza fachadas",
    "fotos limpeza exteriores",
    "exemplos trabalhos",
    "projectos concluídos",
  ],
  alternates: {
    canonical: "https://arealimpa.com/casos-de-estudo",
  },
  openGraph: {
    title: "Portfolio de Limpeza de Exteriores | ÁREALIMPA",
    description: "Veja os nossos projetos de limpeza de exteriores. Mais de 1500 projetos concluídos em todo Portugal.",
    url: "https://arealimpa.com/casos-de-estudo",
    type: "website",
  },
};

const breadcrumbItems = [
  { name: "Início", url: "https://arealimpa.com" },
  { name: "Casos de Estudo", url: "https://arealimpa.com/casos-de-estudo" },
];

// Mock data para casos de estudo
const caseStudies = [
  {
    title: "Lavagem de Fachadas em Monomassa",
    location: "Porto",
    date: "2024",
    service: "Lavagem de Fachadas",
    image: "https://ext.same-assets.com/3219850994/4126123506.jpeg",
    description: "Lavagem completa de fachada em monomassa de edifício residencial",
  },
  {
    title: "Lavagem de Telhado Residencial",
    location: "Póvoa de Varzim",
    date: "2024",
    service: "Lavagem de Telhados",
    image: "https://ext.same-assets.com/3219850994/3370850021.jpeg",
    description: "Tratamento preventivo e lavagem de telhado sem pressão",
  },
  {
    title: "Limpeza de Fachada Industrial",
    location: "Vila do Conde",
    date: "2024",
    service: "Hidroblast",
    image: "https://ext.same-assets.com/3219850994/1556531935.jpeg",
    description: "Limpeza com Hidroblast de fachada industrial em chapa canelada",
  },
  {
    title: "Lavagem de Fachada em Capoto",
    location: "Braga",
    date: "2024",
    service: "SoftBlast",
    image: "https://ext.same-assets.com/3219850994/1698815055.jpeg",
    description: "Lavagem suave de fachada em capoto com técnica SoftBlast",
  },
  {
    title: "Remoção de Graffiti",
    location: "Lisboa",
    date: "2024",
    service: "Remoção de Graffiti",
    image: "https://ext.same-assets.com/3219850994/1686970018.jpeg",
    description: "Remoção completa de graffiti em muro de edifício comercial",
  },
  {
    title: "Limpeza de Vidros Exteriores",
    location: "Porto",
    date: "2024",
    service: "PuraQleen",
    image: "https://ext.same-assets.com/3219850994/1538876718.jpeg",
    description: "Lavagem de vidros exteriores com água desmineralizada",
  },
];

export default function CasosDeEstudoPage() {
  return (
    <div className="flex flex-col">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de Estudo
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Consulte os nossos últimos projectos e veja os resultados da nossa excelência
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">1500+</div>
              <div className="text-sm text-gray-600">Projectos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={study.image}
                    alt={`${study.title} - ${study.service} em ${study.location} - ÁREALIMPA`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{study.service}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{study.date}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contactos">
                Pedir Orçamento <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
