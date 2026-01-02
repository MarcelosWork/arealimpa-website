"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { services } from "@/lib/data";

const breadcrumbItems = [
  { name: "Início", url: "https://arealimpa.com" },
  { name: "Serviços de Limpeza de Exteriores", url: "https://arealimpa.com/servicos" },
];

export default function ServicosPage() {
  return (
    <div className="flex flex-col">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Soluções Profissionais de Limpeza
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serviços de Limpeza de Exteriores Profissional
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Lavagem de telhados, fachadas, pavimentos e muito mais. Equipamento de última geração e técnicas especializadas como SoftWash e Hidroblast.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.slug}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Serviço profissional de limpeza de exteriores ÁREALIMPA`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 mt-auto"
                  >
                    <Link href={`/servicos/${service.slug}`}>
                      Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de um Orçamento para Limpeza de Exteriores?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contacte-nos hoje e receba um orçamento gratuito e sem compromisso para lavagem de telhados, fachadas ou pavimentos
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg"
            >
              <Link href="/contactos">
                Pedir Orçamento Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
