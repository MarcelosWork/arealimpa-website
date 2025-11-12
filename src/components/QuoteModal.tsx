"use client";

import { useState } from "react";
import { Send } from "lucide-react";
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

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [tipoCliente, setTipoCliente] = useState("particular");
  const [tipoServico, setTipoServico] = useState("");
  const [outroServico, setOutroServico] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui vai a lógica de envio do formulário
    alert("Formulário enviado! (integração pendente)");
    onOpenChange(false);
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
          {/* Nome */}
          <div className="space-y-2">
            <Label htmlFor="modal-nome">Nome *</Label>
            <Input
              id="modal-nome"
              name="nome"
              required
              placeholder="O seu nome completo"
            />
          </div>

          {/* Telefone e Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="modal-telefone">Telefone *</Label>
              <Input
                id="modal-telefone"
                name="telefone"
                type="tel"
                required
                placeholder="+351 ..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-email">E-mail *</Label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                required
                placeholder="seu@email.com"
              />
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-2">
            <Label htmlFor="modal-localizacao">Localização *</Label>
            <Input
              id="modal-localizacao"
              name="localizacao"
              required
              placeholder="Cidade, Distrito"
            />
          </div>

          {/* Tipo de Cliente */}
          <div className="space-y-3">
            <Label>Tipo de Cliente *</Label>
            <RadioGroup
              value={tipoCliente}
              onValueChange={setTipoCliente}
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
          </div>

          {/* Tipo de Serviço */}
          <div className="space-y-3">
            <Label>Tipo de Serviço *</Label>
            <RadioGroup
              value={tipoServico}
              onValueChange={setTipoServico}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lavagem-fachadas" id="modal-lavagem-fachadas" />
                <Label htmlFor="modal-lavagem-fachadas" className="font-normal cursor-pointer">
                  Limpeza de Fachada
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lavagem-telhados" id="modal-lavagem-telhados" />
                <Label htmlFor="modal-lavagem-telhados" className="font-normal cursor-pointer">
                  Lavagem de Telhado
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hidroblast" id="modal-hidroblast" />
                <Label htmlFor="modal-hidroblast" className="font-normal cursor-pointer">
                  Hidroblast / Alta Pressão
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="softblast" id="modal-softblast" />
                <Label htmlFor="modal-softblast" className="font-normal cursor-pointer">
                  SoftBlast / Baixa Pressão
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="remocao-graffiti" id="modal-remocao-graffiti" />
                <Label htmlFor="modal-remocao-graffiti" className="font-normal cursor-pointer">
                  Remoção de Graffiti
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="outro" id="modal-outro" />
                <Label htmlFor="modal-outro" className="font-normal cursor-pointer">
                  Outro
                </Label>
              </div>
            </RadioGroup>

            {tipoServico === "outro" && (
              <Input
                placeholder="Especifique o serviço pretendido"
                value={outroServico}
                onChange={(e) => setOutroServico(e.target.value)}
                className="mt-2"
              />
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
            className="w-full text-lg bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb]"
          >
            <Send className="mr-2 h-5 w-5" />
            Enviar Pedido de Orçamento
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
