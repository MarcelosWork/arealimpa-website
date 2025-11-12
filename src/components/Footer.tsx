import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { companyInfo, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ÁREALIMPA</h3>
            <p className="text-sm text-gray-300">
              Fundada em 2006, somos altamente especializados em lavagens exteriores.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{companyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>{companyInfo.address}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href={companyInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/a-empresa" className="hover:text-blue-400 transition-colors">
                  A Empresa
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-blue-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/casos-de-estudo" className="hover:text-blue-400 transition-colors">
                  Casos de Estudo
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contactos" className="hover:text-blue-400 transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="hover:text-blue-400 transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Números que Falam</h3>
            <div className="space-y-3">
              <div className="border-l-2 border-blue-500 pl-3">
                <div className="text-2xl font-bold text-blue-400">
                  {companyInfo.stats.projectsCompleted}+
                </div>
                <div className="text-sm text-gray-300">Projectos Terminados</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-3">
                <div className="text-2xl font-bold text-blue-400">
                  {companyInfo.stats.satisfiedClients}+
                </div>
                <div className="text-sm text-gray-300">Clientes Satisfeitos</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-3">
                <div className="text-2xl font-bold text-blue-400">
                  {companyInfo.stats.collaborators}
                </div>
                <div className="text-sm text-gray-300">Colaboradores</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            Copyright © {new Date().getFullYear()} ÁREALIMPA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
