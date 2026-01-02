"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { BreadcrumbSchema } from "@/components/StructuredData";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { companyInfo, services } from "@/lib/data";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  telefone?: string;
  email?: string;
  localizacao?: string;
  tipoCliente?: string;
  servicos?: string;
}

const breadcrumbItems = [
  { name: "Início", url: "https://arealimpa.com" },
  { name: "Pedir Orçamento", url: "https://arealimpa.com/contactos" },
];

export default function ContactosPage() {
  const [tipoCliente, setTipoCliente] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState<string>("+351");

  const handleServiceToggle = (serviceSlug: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceSlug)
        ? prev.filter(s => s !== serviceSlug)
        : [...prev, serviceSlug]
    );
    if (errors.servicos) {
      setErrors(prev => ({ ...prev, servicos: undefined }));
    }
  };

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const localizacao = formData.get("localizacao") as string;

    if (!firstName || firstName.trim() === "") {
      newErrors.firstName = "Por favor, indique o seu nome próprio";
    }

    if (!lastName || lastName.trim() === "") {
      newErrors.lastName = "Por favor, indique o seu apelido";
    }

    if (!phoneValue || phoneValue.trim() === "" || phoneValue === "+351") {
      newErrors.telefone = "Por favor, indique o seu telefone";
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Por favor, indique o seu email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Por favor, indique um email válido";
    }

    if (!localizacao || localizacao.trim() === "") {
      newErrors.localizacao = "Por favor, indique a localização";
    }

    if (!tipoCliente) {
      newErrors.tipoCliente = "Por favor, selecione o tipo de cliente";
    }

    if (selectedServices.length === 0) {
      newErrors.servicos = "Por favor, selecice pelo menos um serviço";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Limpar erros
    setErrors({});
    setIsSubmitting(true);

    try {
      const payload = {
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        telefone: phoneValue,
        email: formData.get("email") as string,
        localizacao: formData.get("localizacao") as string,
        tipoCliente: tipoCliente,
        servicos: selectedServices,
        area: formData.get("area") as string || "",
        observacoes: formData.get("observacoes") as string || "",
      };

      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Erro ao enviar pedido", {
          description: data.error || "Por favor, tente novamente mais tarde."
        });
        setIsSubmitting(false);
        return;
      }

      // Sucesso!
      toast.success("Pedido enviado com sucesso!", {
        description: "A nossa equipa entrará em contacto em breve."
      });

      // Reset form
      e.currentTarget.reset();
      setTipoCliente("");
      setSelectedServices([]);
      setErrors({});
      setPhoneValue("+351");

    } catch (error) {
      console.error("Error:", error);
      toast.error("Erro ao enviar pedido", {
        description: "Por favor, tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* SEO Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pedir Orçamento de Limpeza de Exteriores
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Preencha o formulário e receba um orçamento gratuito e sem compromisso em 24 horas. Lavagem de telhados, fachadas e pavimentos em todo Portugal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-12">
            <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Telefone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {companyInfo.phone}
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Custo de chamada para rede móvel nacional
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium break-all"
                >
                  {companyInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Localização</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 text-sm">
                  {companyInfo.address}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Formulário de Orçamento</CardTitle>
                <CardDescription>
                  Preencha os campos abaixo e entraremos em contacto consigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome Próprio e Apelido */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base">
                        Nome Próprio *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Nome"
                        className={`h-12 ${errors.firstName ? "border-red-500" : ""}`}
                        onChange={() => errors.firstName && setErrors(prev => ({ ...prev, firstName: undefined }))}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base">
                        Apelido *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Apelido"
                        className={`h-12 ${errors.lastName ? "border-red-500" : ""}`}
                        onChange={() => errors.lastName && setErrors(prev => ({ ...prev, lastName: undefined }))}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Telefone e Email */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-base">
                        Telefone *
                      </Label>
                      <PhoneInput
                        international
                        defaultCountry="PT"
                        value={phoneValue}
                        onChange={(value) => {
                          setPhoneValue(value || "+351");
                          if (errors.telefone) {
                            setErrors(prev => ({ ...prev, telefone: undefined }));
                          }
                        }}
                        className={`flex h-12 w-full rounded-md border ${errors.telefone ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      />
                      {errors.telefone && (
                        <p className="text-sm text-red-500">{errors.telefone}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        className={`h-12 ${errors.email ? "border-red-500" : ""}`}
                        onChange={() => errors.email && setErrors(prev => ({ ...prev, email: undefined }))}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="space-y-2">
                    <Label htmlFor="localizacao" className="text-base">
                      Localização *
                    </Label>
                    <Input
                      id="localizacao"
                      name="localizacao"
                      placeholder="Cidade, Distrito"
                      className={`h-12 ${errors.localizacao ? "border-red-500" : ""}`}
                      onChange={() => errors.localizacao && setErrors(prev => ({ ...prev, localizacao: undefined }))}
                    />
                    {errors.localizacao && (
                      <p className="text-sm text-red-500">{errors.localizacao}</p>
                    )}
                  </div>

                  {/* Tipo de Cliente */}
                  <div className="space-y-3">
                    <Label className="text-base">Tipo de Cliente *</Label>
                    <RadioGroup
                      value={tipoCliente}
                      onValueChange={(value) => {
                        setTipoCliente(value);
                        if (errors.tipoCliente) {
                          setErrors(prev => ({ ...prev, tipoCliente: undefined }));
                        }
                      }}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="particular" id="particular" />
                        <Label htmlFor="particular" className="font-normal cursor-pointer">
                          Particular
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="empresa" id="empresa" />
                        <Label htmlFor="empresa" className="font-normal cursor-pointer">
                          Empresa
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.tipoCliente && (
                      <p className="text-sm text-red-500">{errors.tipoCliente}</p>
                    )}
                  </div>

                  {/* Serviços (Seleção Múltipla) */}
                  <div className="space-y-3">
                    <Label className="text-base">Serviços Pretendidos * <span className="text-sm text-gray-500">(pode selecionar vários)</span></Label>
                    <div className="space-y-3">
                      {services.map((service) => (
                        <div key={service.slug} className="flex items-center space-x-2">
                          <Checkbox
                            id={`service-${service.slug}`}
                            checked={selectedServices.includes(service.slug)}
                            onCheckedChange={() => handleServiceToggle(service.slug)}
                          />
                          <Label
                            htmlFor={`service-${service.slug}`}
                            className="font-normal cursor-pointer"
                          >
                            {service.title}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.servicos && (
                      <p className="text-sm text-red-500">{errors.servicos}</p>
                    )}
                  </div>

                  {/* Área m² */}
                  <div className="space-y-2">
                    <Label htmlFor="area" className="text-base">
                      Área m² <span className="text-gray-500">(opcional)</span>
                    </Label>
                    <Input
                      id="area"
                      name="area"
                      type="number"
                      placeholder="Ex: 150"
                      className="h-12"
                    />
                  </div>

                  {/* Observações */}
                  <div className="space-y-2">
                    <Label htmlFor="observacoes" className="text-base">
                      Observações <span className="text-gray-500">(opcional)</span>
                    </Label>
                    <Textarea
                      id="observacoes"
                      name="observacoes"
                      placeholder="Informações adicionais que considere relevantes..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  {/* RGPD */}
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="rgpd"
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="rgpd" className="text-sm font-normal cursor-pointer">
                      Concordo com o tratamento dos meus dados pessoais de acordo com a Política de Privacidade e autorizo o contacto por parte da ÁREALIMPA para efeitos de orçamentação. *
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb]"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? "A enviar..." : "Enviar Pedido de Orçamento"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.8636789376147!2d-8.764706984532744!3d41.38350797926453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246f2e5b3c0001%3A0x6b3c3c3c3c3c3c3c!2sR.%20Bairro%20Avelino%20do%20Monte%20155%2C%204490-016%20P%C3%B3voa%20de%20Varzim!5e0!3m2!1spt-PT!2spt!4v1234567890123!5m2!1spt-PT!2spt"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização ÁREALIMPA"
        />
      </section>
    </div>
  );
}
