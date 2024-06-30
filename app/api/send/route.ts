import { EmailTemplate } from "@/components/email-temp";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export async function POST(request: Request) {
  const value: {
    from_name: string;
    reply_to: string;
    message: string;
  } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "dewankrastogi007@gmail.com",
      subject: `Message from ${value.from_name}`,
      react: EmailTemplate({ firstName: value.from_name, email: value.reply_to, message: value.message }),
      text: "This is a fallback text for email clients that don't support React rendering.",
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (emailError) {
    return Response.json({ emailError }, { status: 500 });
  }
}
