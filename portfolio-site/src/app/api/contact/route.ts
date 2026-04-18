import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const ipRequestLog = new Map<string, number[]>();

const contactFormSchema = z.object({
    name: z.string().trim().min(2).max(80),
    email: z.string().trim().email().max(200),
    subject: z.string().trim().min(2).max(150),
    message: z.string().trim().min(10).max(5000),
});

const requiredEnv = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_TO",
];

const getMissingEnv = () => requiredEnv.filter((key) => !process.env[key]);

function getClientIp(request: Request): string {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) {
        return forwardedFor.split(",")[0]?.trim() || "unknown";
    }
    return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (ipRequestLog.get(ip) || []).filter(
        (timestamp) => now - timestamp < WINDOW_MS
    );

    if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
        ipRequestLog.set(ip, recent);
        return true;
    }

    recent.push(now);
    ipRequestLog.set(ip, recent);
    return false;
}

export async function POST(request: Request) {
    try {
        const clientIp = getClientIp(request);
        if (isRateLimited(clientIp)) {
            return NextResponse.json(
                { ok: false, message: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const missingEnv = getMissingEnv();
        if (missingEnv.length > 0) {
            console.error("Contact API missing environment variables", { missingEnv });
            return NextResponse.json(
                {
                    ok: false,
                    message: "Email service is currently unavailable.",
                },
                { status: 500 }
            );
        }

        const body = await request.json();
        const parsedBody = contactFormSchema.safeParse(body);

        if (!parsedBody.success) {
            return NextResponse.json(
                { ok: false, message: "Please provide valid input in all fields." },
                { status: 400 }
            );
        }

        const { name, email, subject, message } = parsedBody.data;

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
        const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

        await transporter.sendMail({
            from: `Portfolio Contact <${from}>`,
            to,
            replyTo: email,
            subject: `[Portfolio Contact] ${subject}`,
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
