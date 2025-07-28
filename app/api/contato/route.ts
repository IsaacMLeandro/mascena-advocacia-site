import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { nome, email, mensagem } = await request.json();

  const apiKey = 're_C2uyY448_6Y7BMtWPbv87dKVeyYDsaaez';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'isaac.campanha@gmail.com',
      subject: 'Novo contato pelo site',
      html: `
        <strong>Nome:</strong> ${nome}<br/>
        <strong>Email:</strong> ${email}<br/>
        <strong>Mensagem:</strong><br/>${mensagem.replace(/\n/g, '<br/>')}
      `,
    }),
  });

  const result = await response.json();

  return NextResponse.json({ success: true, response: result });
}
