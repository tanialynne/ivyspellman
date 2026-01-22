import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Contact form API route
 * Sends email to hello@ivyspellman.com
 *
 * Required environment variables:
 * - SMTP_HOST: SMTP server host (e.g., smtp.gmail.com, smtp.mail.me.com)
 * - SMTP_PORT: SMTP server port (usually 587 for TLS or 465 for SSL)
 * - SMTP_USER: SMTP username/email
 * - SMTP_PASS: SMTP password or app-specific password
 * - CONTACT_EMAIL: Email to receive contact form submissions (default: hello@ivyspellman.com)
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Check for required environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || "hello@ivyspellman.com";

    // If SMTP is not configured, log the message and return success
    // This allows the form to work in development without email setup
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("=== Contact Form Submission ===");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log("================================");
      console.log("Note: SMTP not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables to enable email sending.");

      return NextResponse.json(
        { success: true, message: "Message received (email not configured - logged to console)" },
        { status: 200 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Ivy Spellman Website" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the contact form on ivyspellman.com
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Georgia, serif; color: #333; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { border-bottom: 2px solid #d4af37; padding-bottom: 15px; margin-bottom: 20px; }
    .header h1 { color: #d4af37; margin: 0; font-size: 24px; }
    .field { margin-bottom: 15px; }
    .field-label { font-weight: bold; color: #666; }
    .message { background: #f5f1e8; padding: 15px; border-left: 3px solid #d4af37; margin-top: 20px; }
    .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; font-size: 12px; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Message</h1>
    </div>
    <div class="field">
      <span class="field-label">From:</span> ${name}
    </div>
    <div class="field">
      <span class="field-label">Email:</span> <a href="mailto:${email}">${email}</a>
    </div>
    <div class="message">
      <span class="field-label">Message:</span>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
    <div class="footer">
      This message was sent from the contact form on ivyspellman.com
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
