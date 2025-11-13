
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = 'nodejs'
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // 1️⃣ Create the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,    
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,                    
      auth: {
        user: process.env.EMAIL_USER,    
        pass: process.env.EMAIL_PASS,    
      },
     tls: {
    rejectUnauthorized: true, // verifies server certificate (recommended for production)
  },
})
    // 2️⃣ Define the email options
    const mailOptions = {
      from: "Contact Form" <info@effred.com>", // sender info
      to: process.env.EMAIL_To, // where you want to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    // 3️⃣ Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully!" })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
