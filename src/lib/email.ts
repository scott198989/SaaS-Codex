import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const appUrl = process.env.APP_URL || "http://localhost:3000";
const fromAddress = process.env.EMAIL_FROM || "Havoc Data Forge <onboarding@resend.dev>";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail({ to, subject, html }: EmailPayload) {
  if (!resend) {
    console.info("[email]", { to, subject, html });
    return;
  }
  await resend.emails.send({
    from: fromAddress,
    to,
    subject,
    html,
  });
}

export function buildVerificationEmail(token: string) {
  const link = `${appUrl}/api/auth/verify?token=${token}`;
  return {
    subject: "Verify your Havoc Data Forge account",
    html: `
      <p>Confirm your email to activate your workspace.</p>
      <p><a href="${link}">Verify email</a></p>
      <p>This link expires in 24 hours.</p>
    `,
  };
}

export function buildPasswordResetEmail(token: string) {
  const link = `${appUrl}/reset?token=${token}`;
  return {
    subject: "Reset your Havoc Data Forge password",
    html: `
      <p>Use the link below to reset your password.</p>
      <p><a href="${link}">Reset password</a></p>
      <p>This link expires in 24 hours.</p>
    `,
  };
}
