import { CheckCircle2, Award, Users, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companyInfo } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata = {
  title: "Sobre a ÁREALIMPA - Especialistas em Limpeza de Exteriores desde 2006",
  description: "Conheça a Árealimpa, empresa especialista em limpeza de exteriores desde 2006. Mais de 1500 projetos concluídos, 200+ clientes satisfeitos. Equipa qualificada, equipamento de última geração e cobertura nacional.",
  keywords: [
    "sobre arealimpa",
    "empresa limpeza exteriores",
    "história arealimpa",
    "quem somos",
    "valores empresa limpeza",
    "equipa profissional limpeza",
    "limpeza exteriores portugal",
    "empresa póvoa de varzim",
    "especialistas limpeza",
    "experiência limpeza exteriores",
  ],
  alternates: {
    canonical: "https://arealimpa.com/a-empresa",
  },
  openGraph: {
    title: "Sobre a ÁREALIMPA - Especialistas em Limpeza de Exteriores",
    description: "Empresa especialista em limpeza de exteriores desde 2006. Mais de 1500 projetos concluídos em todo Portugal.",
    url: "https://arealimpa.com/a-empresa",
    type: "website",
  },
};

const breadcrumbItems = [
  { name: "Início", url: "https://arealimpa.com" },
  { name: "A Empresa", url: "https://arealimpa.com/a-empresa" },
];

export default function AEmpresaPage() {
  return (
    <div className="flex flex-col">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30" variant="outline">
              Desde {companyInfo.founded}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Empresa
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Colocamos a nossa excelência ao serviço da limpeza de áreas Residenciais, Comerciais e Industriais
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Quem Somos
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A <strong>Árealimpa – Profissionais de Limpeza</strong>, foi fundada em 2006. Somos uma empresa sólida e consistente com um vasto conhecimento na área da limpeza de exteriores.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Somos especialistas em limpezas de alta pressão, utilizando os melhores e mais fiáveis equipamentos de alta pressão. Estes equipamentos produzem água quente até 100° de temperatura.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A nossa equipa altamente qualificada e os nossos equipamentos de última geração permitem-nos oferecer serviços de limpeza eficazes, seguros e ambientalmente responsáveis em todo o território nacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Os Nossos Valores
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Excelência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compromisso com a qualidade e resultados superiores em cada projeto
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Segurança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Práticas seguras e equipamentos certificados para proteger pessoas e propriedades
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Profissionalismo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Equipa experiente e dedicada ao serviço de excelência
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mais de {companyInfo.stats.satisfiedClients}+ clientes satisfeitos confiam em nós
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Números que Nos Definem
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {companyInfo.stats.projectsCompleted}+
              </div>
              <div className="text-blue-100">Projectos Terminados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {companyInfo.stats.satisfiedClients}+
              </div>
              <div className="text-blue-100">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {companyInfo.stats.ongoingProjects}
              </div>
              <div className="text-blue-100">Projectos em Andamento</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {companyInfo.stats.collaborators}
              </div>
              <div className="text-blue-100">Colaboradores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Porque Escolher a Árealimpa?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equipamentos de Última Geração</h3>
                  <p className="text-gray-600">
                    Utilizamos os melhores e mais modernos equipamentos de limpeza do mercado
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Equipa Especializada</h3>
                  <p className="text-gray-600">
                    Profissionais altamente qualificados e com vasta experiência
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cobertura Nacional</h3>
                  <p className="text-gray-600">
                    Prestamos serviços em todo o território nacional
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Seguro de Responsabilidade Civil</h3>
                  <p className="text-gray-600">
                    Todos os nossos trabalhos estão cobertos por seguro
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Produtos Biodegradáveis</h3>
                  <p className="text-gray-600">
                    Compromisso com o ambiente utilizando produtos ecológicos
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Garantia de Satisfação</h3>
                  <p className="text-gray-600">
                    Garantimos a qualidade e eficácia em todos os nossos serviços
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
