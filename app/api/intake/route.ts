import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL } from "@/lib/site";

const LABELS: Record<string, string> = {
  fullName: "Full Name (incl. aliases)",
  consultDate: "Consultation Date",
  referral: "How They Heard About Us",
  email: "Email",
  phone: "Phone",
  address: "Current Address",
  birthPlace: "City, State, Country of Birth",
  dob: "Date of Birth",
  hasSSN: "Has Social Security Number",
  hasITIN: "Has ITIN",
  alienNumber: "Alien Registration / Case Number",
  currentCountry: "Current Country",
  entryDates: "Date(s) of Entry to the US",
  portsOfEntry: "Port(s) of Entry",
  formOfEntry: "Form of Entry",
  borderArrests: "Arrests at the Border",
  hasPriorArrest: "Ever Arrested or Fined",
  arrestDetails: "Arrest/Fine Details",
  maritalStatus: "Marital Status",
  spouseName: "Spouse/Partner Name",
  spouseDob: "Spouse/Partner Date of Birth",
  spouseBirthplace: "Spouse/Partner Birthplace",
  marriageDate: "Marriage Date",
  marriagePlace: "Marriage Place",
  divorceDetails: "Divorce Date & Place",
  spousePhone: "Spouse/Partner Phone",
  isEmployed: "Currently Employed",
  employerName: "Employer Name",
  workAddress: "Work Address",
  filedTaxes: "Ever Filed Tax Returns",
  taxYears: "Years of Taxes Filed",
  children: "Children (Name, DOB, Birthplace)",
  legalQuestion: "Nature of the Legal Question",
};

const FIELD_ORDER = Object.keys(LABELS);

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data.fullName || !data.email || !data.legalQuestion) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — intake form cannot send email.");
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = FIELD_ORDER.map((key) => `${LABELS[key]}: ${data[key]?.trim() ? data[key] : "(not provided)"}`).join("\n");

  try {
    const { error } = await resend.emails.send({
      from: "Glasinovic Law Office Website <onboarding@resend.dev>",
      to: EMAIL,
      replyTo: data.email,
      subject: `New consultation intake form from ${data.fullName}`,
      text: body,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Intake form send failed:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
