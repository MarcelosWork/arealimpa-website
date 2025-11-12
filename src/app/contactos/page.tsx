"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

// Metadata will be added by parent layout
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { companyInfo, services } from "@/lib/data";

export default function ContactosPage() {
  const [tipoCliente, setTipoCliente] = useState("particular");
  const [tipoServico, setTipoServico] = useState("");
  const [outroServico, setOutroServico] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui vai a lógica de envio do formulário
    alert("Formulário enviado! (integração pendente)");
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#3b82f6] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pedir Orçamento
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Preencha o formulário e receba um orçamento gratuito e sem compromisso
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
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-base">
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      required
                      placeholder="O seu nome completo"
                      className="h-12"
                    />
                  </div>

                  {/* Telefone e Email */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-base">
                        Telefone *
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        placeholder="+351 ..."
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        className="h-12"
                      />
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
                      required
                      placeholder="Cidade, Distrito"
                      className="h-12"
                    />
                  </div>

                  {/* Tipo de Cliente */}
                  <div className="space-y-3">
                    <Label className="text-base">Tipo de Cliente *</Label>
                    <RadioGroup
                      value={tipoCliente}
                      onValueChange={setTipoCliente}
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
                  </div>

                  {/* Tipo de Serviço */}
                  <div className="space-y-3">
                    <Label className="text-base">Tipo de Serviço *</Label>
                    <RadioGroup
                      value={tipoServico}
                      onValueChange={setTipoServico}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lavagem-fachadas" id="lavagem-fachadas" />
                        <Label htmlFor="lavagem-fachadas" className="font-normal cursor-pointer">
                          Limpeza de Fachada
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="lavagem-telhados" id="lavagem-telhados" />
                        <Label htmlFor="lavagem-telhados" className="font-normal cursor-pointer">
                          Lavagem de Telhado
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hidroblast" id="hidroblast" />
                        <Label htmlFor="hidroblast" className="font-normal cursor-pointer">
                          Hidroblast / Alta Pressão
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="softblast" id="softblast" />
                        <Label htmlFor="softblast" className="font-normal cursor-pointer">
                          SoftBlast / Baixa Pressão
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remocao-graffiti" id="remocao-graffiti" />
                        <Label htmlFor="remocao-graffiti" className="font-normal cursor-pointer">
                          Remoção de Graffiti
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outro" id="outro" />
                        <Label htmlFor="outro" className="font-normal cursor-pointer">
                          Outro
                        </Label>
                      </div>
                    </RadioGroup>

                    {tipoServico === "outro" && (
                      <Input
                        placeholder="Especifique o serviço pretendido"
                        value={outroServico}
                        onChange={(e) => setOutroServico(e.target.value)}
                        className="h-12 mt-2"
                      />
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
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Pedido de Orçamento
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
