"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { services } from "@/lib/data";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  telefone?: string;
  email?: string;
  localizacao?: string;
  tipoCliente?: string;
  servicos?: string;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
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
      newErrors.servicos = "Por favor, selecione pelo menos um serviço";
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
      setTipoCliente("");
      setSelectedServices([]);
      setErrors({});
      setPhoneValue("+351");
      onOpenChange(false);

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Pedir Orçamento</DialogTitle>
          <DialogDescription>
            Preencha o formulário e entraremos em contacto consigo
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          {/* Nome Próprio e Apelido */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="modal-firstName">Nome Próprio *</Label>
              <Input
                id="modal-firstName"
                name="firstName"
                placeholder="Nome"
                className={errors.firstName ? "border-red-500" : ""}
                onChange={() => errors.firstName && setErrors(prev => ({ ...prev, firstName: undefined }))}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-lastName">Apelido *</Label>
              <Input
                id="modal-lastName"
                name="lastName"
                placeholder="Apelido"
                className={errors.lastName ? "border-red-500" : ""}
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
              <Label htmlFor="modal-telefone">Telefone *</Label>
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
                className={`flex h-10 w-full rounded-md border ${errors.telefone ? "border-red-500" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
              />
              {errors.telefone && (
                <p className="text-sm text-red-500">{errors.telefone}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-email">E-mail *</Label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                className={errors.email ? "border-red-500" : ""}
                onChange={() => errors.email && setErrors(prev => ({ ...prev, email: undefined }))}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-2">
            <Label htmlFor="modal-localizacao">Localização *</Label>
            <Input
              id="modal-localizacao"
              name="localizacao"
              placeholder="Cidade, Distrito"
              className={errors.localizacao ? "border-red-500" : ""}
              onChange={() => errors.localizacao && setErrors(prev => ({ ...prev, localizacao: undefined }))}
            />
            {errors.localizacao && (
              <p className="text-sm text-red-500">{errors.localizacao}</p>
            )}
          </div>

          {/* Tipo de Cliente */}
          <div className="space-y-3">
            <Label>Tipo de Cliente *</Label>
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
                <RadioGroupItem value="particular" id="modal-particular" />
                <Label htmlFor="modal-particular" className="font-normal cursor-pointer">
                  Particular
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="empresa" id="modal-empresa" />
                <Label htmlFor="modal-empresa" className="font-normal cursor-pointer">
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
            <Label>Serviços Pretendidos * <span className="text-sm text-gray-500">(pode selecionar vários)</span></Label>
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
            <Label htmlFor="modal-area">
              Área m² <span className="text-gray-500">(opcional)</span>
            </Label>
            <Input
              id="modal-area"
              name="area"
              type="number"
              placeholder="Ex: 150"
            />
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="modal-observacoes">
              Observações <span className="text-gray-500">(opcional)</span>
            </Label>
            <Textarea
              id="modal-observacoes"
              name="observacoes"
              placeholder="Informações adicionais que considere relevantes..."
              rows={4}
              className="resize-none"
            />
          </div>

          {/* RGPD */}
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <input
              type="checkbox"
              id="modal-rgpd"
              className="mt-1"
              required
            />
            <Label htmlFor="modal-rgpd" className="text-sm font-normal cursor-pointer">
              Concordo com o tratamento dos meus dados pessoais de acordo com a Política de Privacidade e autorizo o contacto por parte da ÁREALIMPA para efeitos de orçamentação. *
            </Label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full text-lg bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="mr-2 h-5 w-5" />
            {isSubmitting ? "A enviar..." : "Enviar Pedido de Orçamento"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
