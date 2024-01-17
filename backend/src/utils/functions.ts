import { createTransport } from "nodemailer";

interface IEmail {
  to: string;
  from: string;
  html: string;
}

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

export async function sendMail({ to, from, html }: IEmail) {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      html,
    });
    console.log("Email sent", info);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
