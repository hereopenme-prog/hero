import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, businessType, city, timestamp } = body;

    if (
      !name?.trim() ||
      !phone?.trim() ||
      !businessType?.trim() ||
      !city?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // TODO: Connect to your data store — Airtable, Google Sheets, Supabase, or email service here
    console.log('WAITLIST ENTRY', { name, phone, businessType, city, timestamp });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request.' },
      { status: 400 }
    );
  }
}