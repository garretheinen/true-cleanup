import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const files = formData.getAll("photos") as File[];

    // ✅ SEND TO ZAPIER
    await fetch("https://hooks.zapier.com/hooks/catch/27410295/uvkz23u/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        message,
        time: new Date().toISOString(),
      }),
    });

    // ✅ EMAIL SETUP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ ATTACH FILES
    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Junk Removal Lead",
      text: `
Name: ${name}
Phone: ${phone}
Message: ${message}
      `,
      attachments,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return new Response("Failed", { status: 500 });
  }
}