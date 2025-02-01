import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,  // Your Gmail address
          pass: process.env.EMAIL_PASS,  // Your Gmail App Password
        },
      });

      await transporter.sendMail({
        from: email,
        to: "clintmaruti@gmail.com",     // Your email
        subject: `New Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message}</p>`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending message." });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
