import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailStyles = {
  container: "background-color: #0d1117; color: #d1d5db; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; border-radius: 10px;",
  heading: "color: #ec4899; font-size: 24px; font-weight: bold; margin-bottom: 20px;",
  pinkText: "color: #ec4899; font-weight: bold;",
  button: "background-color: #ec4899; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; font-weight: bold;",
  footer: "margin-top: 30px; border-top: 1px solid #30363d; pt: 20px; font-size: 14px; color: #8b949e;",
  avatar: "width: 60px; height: 60px; border-radius: 50%; border: 2px solid #ec4899; margin-bottom: 10px;"
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    const avatarUrl = "https://www.gemgeek.online/assets/gem-geek-avatar.jpg";

    // 1. Notification Email to Me (Admin)
    const adminEmail = resend.emails.send({
      from: 'GEM STUDIO <hello@gemgeek.online>',
      to: ['esenam16@gmail.com'],
      subject: `🚀 New Project Lead: ${subject}`,
      replyTo: email,
      html: `
        <div style="${emailStyles.container}">
          <h1 style="${emailStyles.heading}">New Inquiry Received</h1>
          <p><strong>From:</strong> ${name} (<span style="${emailStyles.pinkText}">${email}</span>)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #161b22; padding: 20px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #ec4899;">
            ${message}
          </div>
        </div>
      `,
    });

    // 2. Designed Response Email to the SENDER
    const clientEmail = resend.emails.send({
      from: 'Matilda Esenam Gbeve <tilly@gemgeek.online>',
      to: [email],
      subject: 'Message Received - Matilda Esenam Gbeve',
      html: `
        <div style="${emailStyles.container}">
          <img src="${avatarUrl}" alt="Tilly" style="${emailStyles.avatar}" />
          <h1 style="${emailStyles.heading}">Hello ${name}!</h1>
          <p>Thank you for reaching out. I've received your message regarding <span style="${emailStyles.pinkText}">${subject}</span>.</p>
          <p>I'm currently reviewing your inquiry and will get back to you shortly to discuss how we can bring your vision to life.</p>
          
          <a href="https://www.tiktok.com/@gem_geek" style="${emailStyles.button}">Follow my builds on TikTok</a>

          <div style="${emailStyles.footer}">
            <p style="margin-bottom: 5px;"><strong>Contact Me Directly:</strong></p>
            <p style="margin: 2px 0;">WhatsApp: <a href="https://wa.me/233203177166" style="color: #ec4899; text-decoration: none;">+233 20 317 7166</a></p>
            <p style="margin: 2px 0;">Call: <a href="tel:+233205709587" style="color: #ec4899; text-decoration: none;">+233 20 570 9587</a></p>
            <p style="margin-top: 15px;">&copy; 2026 GEM STUDIO. Status quo? 404.</p>
          </div>
        </div>
      `,
    });

    await Promise.all([adminEmail, clientEmail]);

    return NextResponse.json({ message: "Styled emails sent successfully!" });

  } catch (error) {
    console.error("Email API Error:", error);
    return NextResponse.json({ error: 'Failed to deliver messages.' }, { status: 500 });
  }
}