import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  const { nome, email, mensagem } = data;

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contato@mascenaadvocacia.com.br',
      subject: 'Novo contato pelo site',
      html: `
        <strong>Nome:</strong> \${nome}<br/>
        <strong>Email:</strong> \${email}<br/>
        <strong>Mensagem:</strong><br/>\${mensagem.replace(/\n/g, '<br/>')}
      `,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
