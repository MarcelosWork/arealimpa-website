"use client";

import Script from "next/script";
import { companyInfo, services } from "@/lib/data";

// Schema para LocalBusiness
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://arealimpa.com/#organization",
    name: "ÁREALIMPA - Limpeza de Exteriores",
    alternateName: "Árealimpa",
    description: "Empresa especializada em limpeza de exteriores desde 2006. Oferecemos serviços profissionais de lavagem de telhados, fachadas, pavimentos, remoção de graffiti e aluguer de equipamentos em todo Portugal.",
    url: "https://arealimpa.com",
    telephone: "+351916544289",
    email: "orcamentos@arealimpa.com",
    foundingDate: "2006",
    image: "https://arealimpa.com/images/logo.png",
    logo: {
      "@type": "ImageObject",
      url: "https://arealimpa.com/images/logo.png",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Bairro Avelino do Monte 155 Armazém E",
      addressLocality: "Póvoa de Varzim",
      postalCode: "4490-016",
      addressRegion: "Porto",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3835,
      longitude: -8.7647,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Portugal",
      },
      {
        "@type": "AdministrativeArea",
        name: "Norte de Portugal",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/arealimpa",
      "https://www.instagram.com/arealimpa",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Limpeza de Exteriores",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": `https://arealimpa.com/servicos/${service.slug}`,
          name: service.title,
          description: service.description,
          provider: {
            "@type": "LocalBusiness",
            name: "ÁREALIMPA",
          },
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema para WebSite com SearchAction
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ÁREALIMPA - Limpeza de Exteriores",
    url: "https://arealimpa.com",
    description: "Especialistas em limpeza de exteriores desde 2006. Lavagem de telhados, fachadas, pavimentos e mais.",
    publisher: {
      "@id": "https://arealimpa.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://arealimpa.com/servicos?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "pt-PT",
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema para BreadcrumbList
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema para Service individual
interface ServiceSchemaProps {
  service: {
    slug: string;
    title: string;
    description: string;
    features: string[];
    image: string;
  };
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://arealimpa.com/servicos/${service.slug}`,
    name: service.title,
    description: service.description,
    url: `https://arealimpa.com/servicos/${service.slug}`,
    image: service.image,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://arealimpa.com/#organization",
      name: "ÁREALIMPA",
    },
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    serviceType: service.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <Script
      id={`service-schema-${service.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema para FAQ
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
