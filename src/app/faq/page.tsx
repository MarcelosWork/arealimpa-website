import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQSchema, BreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
  title: "Perguntas Frequentes sobre Limpeza de Exteriores",
  description: "Respostas às perguntas mais frequentes sobre lavagem de telhados, limpeza de fachadas, pavimentos e serviços de limpeza exterior. Saiba tudo sobre técnicas SoftWash, Hidroblast e preços.",
  keywords: [
    "faq limpeza exteriores",
    "perguntas lavagem telhados",
    "quanto custa limpeza fachada",
    "como lavar telhado",
    "softwash o que é",
    "hidroblast o que é",
    "limpeza telhados preço",
    "limpeza fachadas preço",
    "produtos limpeza telhados",
    "frequência lavagem fachada",
    "dúvidas limpeza exteriores",
  ],
  alternates: {
    canonical: "https://arealimpa.com/faq",
  },
  openGraph: {
    title: "FAQ - Perguntas Frequentes | ÁREALIMPA",
    description: "Respostas às perguntas mais frequentes sobre os nossos serviços de limpeza de exteriores.",
    url: "https://arealimpa.com/faq",
    type: "website",
  },
};

const faqData = [
  {
    category: "Serviços Gerais",
    questions: [
      {
        question: "Que tipo de serviços de limpeza de exteriores oferecem?",
        answer: "Oferecemos uma gama completa de serviços de limpeza de exteriores, incluindo lavagem de fachadas, telhados, remoção de graffiti, limpeza com alta e baixa pressão (Hidroblast e SoftBlast), lavagem de painéis solares, e muito mais. Todos os nossos serviços são realizados com equipamento profissional de última geração."
      },
      {
        question: "Em que zonas de Portugal prestam serviços de limpeza?",
        answer: "A ÁREALIMPA presta serviços de limpeza de exteriores em todo o território nacional. A nossa sede fica na Póvoa de Varzim, mas trabalhamos regularmente em todo o Norte de Portugal e deslocamo-nos para qualquer zona do país conforme necessário."
      },
      {
        question: "Como posso pedir um orçamento para limpeza de exteriores?",
        answer: "Pode pedir um orçamento gratuito através do nosso formulário online, por telefone (+351 916 544 289) ou por email (orcamentos@arealimpa.com). Responderemos no prazo máximo de 24 horas."
      },
      {
        question: "Os orçamentos de limpeza têm algum custo?",
        answer: "Não, todos os nossos orçamentos são totalmente gratuitos e sem qualquer compromisso. Avaliamos as suas necessidades e fornecemos um orçamento detalhado sem custos."
      }
    ]
  },
  {
    category: "Lavagem de Fachadas",
    questions: [
      {
        question: "Que tipo de fachadas podem limpar?",
        answer: "Limpamos todo o tipo de fachadas: monomassa, capoto, pedra, tijolo à vista, betão, alumínio, vidro e revestimentos cerâmicos. Utilizamos as técnicas e produtos adequados a cada tipo de superfície."
      },
      {
        question: "A lavagem de fachadas danifica o revestimento?",
        answer: "Não, utilizamos as técnicas apropriadas para cada tipo de superfície. Para superfícies delicadas como capoto, usamos a técnica SoftBlast (baixa pressão), enquanto para superfícies mais resistentes podemos usar Hidroblast (alta pressão). A escolha é sempre feita tendo em conta a preservação do revestimento."
      },
      {
        question: "Com que frequência devo lavar a fachada do meu edifício?",
        answer: "Recomendamos a lavagem da fachada a cada 2-3 anos em zonas urbanas, ou sempre que notar acumulação visível de sujidade, fungos ou manchas. Em zonas industriais ou junto ao mar, pode ser necessário limpar com maior frequência."
      }
    ]
  },
  {
    category: "Lavagem de Telhados",
    questions: [
      {
        question: "Porque é importante fazer a lavagem do telhado?",
        answer: "A lavagem regular do telhado remove musgos, líquenes e fungos que podem danificar as telhas e reduzir a sua vida útil. Além disso, melhora o aspeto estético da casa e aumenta a eficiência térmica do edifício."
      },
      {
        question: "Que produtos usam na lavagem de telhados?",
        answer: "Usamos produtos específicos e biodegradáveis que não danificam as telhas nem o ambiente. Estes produtos eliminam microrganismos e previnem o seu reaparecimento por longos períodos."
      },
      {
        question: "Quanto tempo demora a limpeza de um telhado?",
        answer: "Depende do tamanho e estado do telhado. Uma moradia média pode demorar entre 4 a 8 horas. Fornecemos sempre um prazo estimado no orçamento."
      },
      {
        question: "O que é a técnica SoftWash para telhados?",
        answer: "SoftWash é uma técnica de lavagem com baixa pressão que utiliza produtos biodegradáveis para eliminar algas, fungos e musgos sem danificar as telhas. É ideal para todos os tipos de telhado e garante resultados duradouros."
      }
    ]
  },
  {
    category: "Equipamento e Segurança",
    questions: [
      {
        question: "Que tipo de equipamento profissional utilizam?",
        answer: "Utilizamos equipamento profissional de última geração, incluindo máquinas de alta pressão até 500 bares com água aquecida até 100°C, sistemas de baixa pressão para superfícies delicadas, e equipamento de trabalhos em altura certificado."
      },
      {
        question: "Os vossos técnicos de limpeza têm formação?",
        answer: "Sim, toda a nossa equipa é altamente qualificada e possui formação específica em limpeza de exteriores e trabalhos em altura. Cumprimos todas as normas de segurança e temos todos os seguros necessários."
      },
      {
        question: "Têm seguro de responsabilidade civil para os trabalhos?",
        answer: "Sim, temos seguro de responsabilidade civil que cobre todos os nossos trabalhos de limpeza. A segurança dos nossos clientes e das suas propriedades é a nossa prioridade."
      }
    ]
  },
  {
    category: "Orçamentos e Pagamentos",
    questions: [
      {
        question: "Como é calculado o preço da limpeza de exteriores?",
        answer: "O preço é calculado com base em vários fatores: tipo de serviço, área a limpar, estado da superfície, acessibilidade, e altura do edifício. Todos os orçamentos são personalizados e transparentes."
      },
      {
        question: "Que formas de pagamento aceitam?",
        answer: "Aceitamos pagamento por transferência bancária, multibanco e dinheiro. Em trabalhos de maior dimensão, podemos acordar um plano de pagamento faseado."
      },
      {
        question: "Fazem contratos de manutenção periódica?",
        answer: "Sim, oferecemos contratos de manutenção periódica para condomínios, empresas e entidades públicas. Entre em contacto connosco para mais informações sobre as nossas condições especiais."
      }
    ]
  }
];

// Flatten all FAQs for schema
const allFaqs = faqData.flatMap((category) => category.questions);

const breadcrumbItems = [
  { name: "Início", url: "https://arealimpa.com" },
  { name: "Perguntas Frequentes", url: "https://arealimpa.com/faq" },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* SEO Schemas */}
      <FAQSchema faqs={allFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Apoio ao Cliente
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas Frequentes sobre Limpeza de Exteriores
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Encontre respostas rápidas às dúvidas mais comuns sobre os nossos serviços de lavagem de telhados, fachadas e pavimentos
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left text-lg">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 text-base leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou a resposta que procurava?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              A nossa equipa está disponível para esclarecer todas as suas dúvidas sobre limpeza de exteriores
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg"
              >
                <Link href="/contactos">
                  Pedir Orçamento Gratuito <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg"
              >
                <a href="tel:+351916544289">
                  Ligar Agora: 916 544 289
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
