import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ✅ SEND TO EXCEL (ZAPIER WEBHOOK)
    try {
      await fetch("https://hooks.zapier.com/hooks/catch/27410295/uvkz23u/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: body.name,
          phone: body.phone,
          message: body.message,
          time: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.log("Webhook failed:", err);
    }

    // ✅ EMAIL SETUP
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
      text: `
Name: ${body.name}
Phone: ${body.phone}
Message: ${body.message}
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("API ERROR:", error);
    return new Response("Failed", { status: 500 });
  }
}