"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { QuoteModal } from "@/components/QuoteModal";
import { companyInfo, services, testimonials, clients } from "@/lib/data";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e3a5f] via-[#2563eb] to-transparent text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/e3zkbms10dla66xdfczu.jpg"
            alt="ÁREALIMPA - Especialistas em limpeza de exteriores profissional em Portugal. Lavagem de telhados, fachadas e pavimentos."
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient Overlay from blue to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/95 via-[#2563eb]/85 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Desde {companyInfo.founded}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Especialistas em Limpeza de Exteriores
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Colocamos a nossa excelência ao serviço da limpeza de áreas Residenciais, Comerciais e Industriais
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setQuoteModalOpen(true)}
                size="lg"
                className="text-lg bg-white text-blue-900 hover:bg-blue-50"
              >
                Pedir Orçamento <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg border-white bg-white/10 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm font-semibold shadow-lg"
              >
                <Link href="#servicos">Ver Serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                {companyInfo.stats.projectsCompleted}+
              </div>
              <div className="text-sm text-gray-600">Projectos Terminados</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                {companyInfo.stats.satisfiedClients}+
              </div>
              <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                {companyInfo.stats.ongoingProjects}
              </div>
              <div className="text-sm text-gray-600">Projectos em Andamento</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                {companyInfo.stats.collaborators}
              </div>
              <div className="text-sm text-gray-600">Colaboradores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Os Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600">
              A Árealimpa é uma empresa especializada em serviços de limpeza de exteriores,
              utilizando os melhores equipamentos e técnicas do mercado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <Card
                key={service.slug}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Serviço profissional de limpeza de exteriores ÁREALIMPA em Portugal`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
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

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/servicos">
                Ver Todos os Serviços <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Testemunhos
            </h2>
            <p className="text-lg text-gray-600">
              Saiba o que os nossos clientes dizem de nós
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-white">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white border-t border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Clientes que Confiam em Nós
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.slice(0, 8).map((client, idx) => (
              <div
                key={idx}
                className="text-gray-500 hover:text-blue-600 transition-colors text-center px-4"
              >
                <div className="font-medium text-sm md:text-base">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Transformar o Seu Exterior?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Solicite um orçamento gratuito e sem compromisso
            </p>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 text-xl font-semibold px-12 py-6 h-auto"
            >
              Pedir Orçamento Gratuito <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
