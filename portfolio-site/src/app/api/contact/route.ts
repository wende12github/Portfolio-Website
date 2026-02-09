import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

export const runtime = "nodejs";

const requiredEnv = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO",
];

const getMissingEnv = () => requiredEnv.filter((key) => !process.env[key]);
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
    try {
        const missingEnv = getMissingEnv();
        if (missingEnv.length > 0) {
        return NextResponse.json(
            {
            ok: false,
            message: "Email service is not configured.",
            missingEnv,
            },
            { status: 500 }
        );
        }

        const body = await request.json();
        const name = String(body?.name ?? "").trim();
        const email = String(body?.email ?? "").trim();
        const subject = String(body?.subject ?? "").trim();
        const message = String(body?.message ?? "").trim();

        if (!name || !email || !subject || !message) {
        return NextResponse.json(
            { ok: false, message: "All fields are required." },
            { status: 400 }
        );
        }

        const smtpPort = Number(process.env.SMTP_PORT);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.SMTP_HOST,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const to = process.env.CONTACT_TO;
        const from = process.env.CONTACT_FROM || email;

        await transporter.sendMail({
        from: `Portfolio Contact <${from}>`,
        to,
        replyTo: email,
        subject: `${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Business Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br />")}</p>
            </div>
        `,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Contact API error:", error);
        const message =
        process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : "Failed to send message.";

        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
