import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL, SITE_URL } from "@/lib/site";

// Visitor-supplied text goes into an HTML email, so it has to be escaped.
function esc(v: string) {
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #eee;width:110px;vertical-align:top;font:600 11px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#9a8e8a;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #eee;font:400 15px/1.5 Helvetica,Arial,sans-serif;color:#1C0A06;">${value}</td>
  </tr>`;
}

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px 12px;background:#f4f1ef;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;width:100%;background:#ffffff;border:1px solid #e4dedb;">
    <tr>
      <td style="background:#0E0503;padding:20px 28px;">
        <div style="font:600 15px/1.2 Georgia,serif;color:#ffffff;">Glasinovic Law Office</div>
        <div style="font:700 10px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#D4673B;padding-top:4px;">New Website Inquiry</div>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 28px 8px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
          ${row("Name", esc(name))}
          ${row("Email", `<a href="mailto:${esc(email)}" style="color:#B84832;text-decoration:none;">${esc(email)}</a>`)}
          ${row("Phone", phone ? `<a href="tel:${esc(phone)}" style="color:#B84832;text-decoration:none;">${esc(phone)}</a>` : '<span style="color:#b3a9a5;">Not provided</span>')}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 28px 28px;">
        <div style="font:600 11px/1.4 Helvetica,Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#9a8e8a;padding-bottom:10px;">About Their Case</div>
        <div style="font:400 15px/1.65 Helvetica,Arial,sans-serif;color:#1C0A06;white-space:pre-wrap;border-left:3px solid #B84832;padding:2px 0 2px 14px;">${esc(message)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:0 28px 28px;">
        <a href="mailto:${esc(email)}" style="display:inline-block;background:#B84832;color:#ffffff;font:700 11px/1 Helvetica,Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;padding:14px 26px;text-decoration:none;">Reply to ${esc(String(name).split(" ")[0])}</a>
      </td>
    </tr>
    <tr>
      <td style="background:#faf8f7;border-top:1px solid #e4dedb;padding:14px 28px;font:400 11px/1.5 Helvetica,Arial,sans-serif;color:#9a8e8a;">
        Sent from the contact form at ${SITE_URL.replace("https://", "")}. Hitting reply goes straight to ${esc(email)}.
      </td>
    </tr>
  </table>
</body></html>`;

  try {
    const { error } = await resend.emails.send({
      from: "Glasinovic Law Office Website <onboarding@resend.dev>",
      to: EMAIL,
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nAbout their case:\n${message}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
