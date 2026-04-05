import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Email to me (Admin)
    const adminEmail = resend.emails.send({
      from: 'GEM STUDIO <hello@gemgeek.online>', 
      to: ['esenam16@gmail.com'], 
      subject: `New Project Inquiry: ${subject}`,
      replyTo: email, 
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Message from Portfolio</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // 2. Email to SENDER (Confirmation)
    const clientEmail = resend.emails.send({
      from: 'Matilda Esenam Gbeve <tilly@gemgeek.online>',
      to: [email], 
      subject: 'Message Received - Matilda Esenam Gbeve',
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I've received your message regarding "<strong>${subject}</strong>."</p>
          <p>I'll review your details and get back to you as soon as I can. In the meantime, feel free to check out my latest work on <a href="https://github.com/gemgeek">GitHub</a>.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Tilly</strong><br/>Full-Stack Developer | GEM STUDIO</p>
        </div>
      `,
    });

    // Fire both requests
    await Promise.all([adminEmail, clientEmail]);

    return NextResponse.json({ message: "Emails sent successfully!" });

  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json({ error: 'Failed to deliver messages.' }, { status: 500 });
  }
}