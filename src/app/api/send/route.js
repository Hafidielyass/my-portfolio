import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node runtime

// simple in-memory rate limiting (per lambda instance)
let lastSentAt = 0;
const MIN_INTERVAL_MS = 4000; // 4 seconds between sends

function sanitize(text) {
  return String(text).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const now = Date.now();
    if (now - lastSentAt < MIN_INTERVAL_MS) {
      return NextResponse.json({ error: "Too fast. Please wait a few seconds." }, { status: 429 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({ error: "Email credentials not configured" }, { status: 500 });
    }

    const safeSubject = sanitize(subject).slice(0, 140);
    const safeMessage = sanitize(message).slice(0, 5000);
    const safeEmail = sanitize(email).slice(0, 320);

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
      replyTo: safeEmail,
      subject: safeSubject,
      text: `From: ${safeEmail}\n\n${safeMessage}`,
      html: `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial">\n<p><strong>From:</strong> ${safeEmail}</p>\n<p><strong>Subject:</strong> ${safeSubject}</p>\n<hr/>\n<p>${safeMessage.replace(/\n/g, '<br/>')}</p>\n</div>`
    });

    lastSentAt = now;
    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
