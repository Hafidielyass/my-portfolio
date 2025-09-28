import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD env vars");
      return NextResponse.json(
        { error: "Email credentials not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const toEmail = process.env.TO_EMAIL || process.env.GMAIL_USER;

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${process.env.GMAIL_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: subject,
      text: `From: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
