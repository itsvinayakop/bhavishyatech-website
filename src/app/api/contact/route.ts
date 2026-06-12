import { NextResponse } from "next/server";
import { SITE } from "@/lib/content";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  message?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();

  if (!name || !email || !emailRe.test(email)) {
    return NextResponse.json({ error: "Please provide a valid name and email." }, { status: 400 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${body.phone?.trim() || "—"}`,
    `Business: ${body.businessType?.trim() || "—"}`,
    "",
    body.message?.trim() || "(no message)",
  ].join("\n");

  // If an email provider is configured, deliver the lead. Otherwise log it
  // server-side so the form is fully functional in development.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || SITE.email;

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || "Bhavishya Tech <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `New lead from ${name}`,
        text: lines,
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Could not send right now. Please email us directly." }, { status: 502 });
    }
  } else {
    console.log("[contact] new submission:\n" + lines);
  }

  return NextResponse.json({ ok: true });
}
