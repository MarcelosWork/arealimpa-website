import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, telefone, email, localizacao, tipoCliente, servicos, area, observacoes } = body;

    // Validações
    if (!nome || !telefone || !email || !localizacao || !tipoCliente || !servicos || servicos.length === 0) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta" },
        { status: 400 }
      );
    }

    // Mapear serviços selecionados para os nomes corretos
    const serviceMap: { [key: string]: string } = {
      "lavagem-telhados-softwash": "Lavagem de Telhados",
      "limpeza-fachadas": "Limpeza de Fachadas",
      "limpeza-pavimentos": "Limpeza de Pavimentos",
      "aluguer-equipamentos": "Aluguer de Equipamentos",
      "trabalhos-construcao-civil": "Pequenos Trabalhos de Construção Civil"
    };

    // Converter array de slugs para string separada por vírgulas
    const servicosFormatados = servicos
      .map((slug: string) => serviceMap[slug] || slug)
      .join(", ");

    // Preparar payload para API
    const payload = {
      firstName: nome,
      email: email,
      phone: telefone,
      locationId: process.env.NEXT_PUBLIC_LEADCONNECTOR_LOCATION_ID,
      customFields: [
        { key: "localizacao", value: localizacao },
        { key: "tipo_de_cliente", value: tipoCliente },
        { key: "servios_pretendidos", value: servicosFormatados }
      ]
    };

    // Adicionar campos opcionais se existirem
    if (area) {
      payload.customFields.push({ key: "area_m", value: area });
    }
    if (observacoes) {
      payload.customFields.push({ key: "observacoes", value: observacoes });
    }

    // Fazer request para API LeadConnector
    const response = await fetch(`${process.env.NEXT_PUBLIC_LEADCONNECTOR_API_URL}contacts/`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.LEADCONNECTOR_API_TOKEN}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Version": "2021-07-28"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("LeadConnector API Error:", errorData);
      return NextResponse.json(
        { error: "Erro ao enviar dados. Por favor, tente novamente." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
