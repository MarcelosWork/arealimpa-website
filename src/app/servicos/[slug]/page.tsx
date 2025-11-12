"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, use } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QuoteModal } from "@/components/QuoteModal";
import { services } from "@/lib/data";

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const { slug } = use(params);
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get related services (exclude current one)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Serviço Especializado
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {service.subtitle}
            </p>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Pedir Orçamento <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="aspect-video max-w-5xl mx-auto overflow-hidden rounded-xl shadow-2xl relative">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Sobre o Serviço
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {service.description}
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Características Principais
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interessado neste Serviço?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Solicite um orçamento gratuito e sem compromisso
            </p>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Pedir Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Outros Serviços
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {relatedServices.map((relatedService) => (
              <Card
                key={relatedService.slug}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {relatedService.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600"
                  >
                    <Link href={`/servicos/${relatedService.slug}`}>
                      Saber Mais <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
