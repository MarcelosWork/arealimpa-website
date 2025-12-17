"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, MapPin, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { companyInfo, services } from "@/lib/data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2563eb] text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{companyInfo.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="hidden md:inline">{companyInfo.address}</span>
              <span className="md:hidden">Póvoa de Varzim</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ÁREALIMPA - Limpeza de Exteriores"
              width={250}
              height={60}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Início
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/a-empresa" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      A Empresa
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/servicos/${service.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50"
                            >
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.subtitle}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/casos-de-estudo" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Casos de Estudo
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/faq" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      FAQ
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb] text-white shadow-lg"
            >
              Pedir Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/a-empresa"
                  className="text-lg font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  A Empresa
                </Link>
                <div className="space-y-2">
                  <div className="text-lg font-medium text-muted-foreground">Serviços</div>
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/servicos/${service.slug}`}
                        className="block text-sm hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/casos-de-estudo"
                  className="text-lg font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  Casos de Estudo
                </Link>
                <Link
                  href="/faq"
                  className="text-lg font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  size="lg"
                  className="mt-4 bg-gradient-to-r from-[#2563eb] to-[#3b82f6]"
                >
                  Pedir Orçamento
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </header>
    </>
  );
}
