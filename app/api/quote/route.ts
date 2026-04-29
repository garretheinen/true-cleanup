import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Junk Removal Lead",
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("EMAIL ERROR:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error?.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}