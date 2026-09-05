import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, subject, message } = body;

    if (
      !name?.trim() ||
      !contact?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // TODO: Connect to email service (Resend, SendGrid, Nodemailer, etc.)
    console.log('CONTACT MESSAGE', { name, contact, subject, message, timestamp: Date.now() });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }
}