import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { logActivity } from '@/lib/activity-logger';

async function getSubmissions() {
  const db = await getDb();
  return db.collection('contact_submissions').find().sort({ _id: -1 }).toArray();
}

async function saveSubmission({ name, email, businessType, otherBusinessType, companyName, businessInfo, message }) {
  const db = await getDb();
  const doc = {
    name,
    email,
    businessType: businessType || '',
    otherBusinessType: otherBusinessType || '',
    companyName: companyName || '',
    businessInfo: businessInfo || '',
    message: message || '',
    createdAt: new Date().toISOString()
  };
  const res = await db.collection('contact_submissions').insertOne(doc);
  return { id: res.insertedId.toString(), ...doc };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};  

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  try {
    const subs = await getSubmissions();
    return NextResponse.json(subs.map(s => ({
      id: s._id?.toString?.() || s.id,
      name: s.name,
      email: s.email,
      businessType: s.businessType || s.service || '',
      otherBusinessType: s.otherBusinessType || '',
      companyName: s.companyName || s.subject || '',
      businessInfo: s.businessInfo || s.phone || '',
      message: s.message || s.comments || '',
      createdAt: s.createdAt
    })), { headers: CORS_HEADERS });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read contact submissions' }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, businessType, otherBusinessType, companyName, businessInfo, message } = body || {};
    if (!name || !email || !businessType || !companyName || !businessInfo || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400, headers: CORS_HEADERS });
    }

    const entry = await saveSubmission({
      name,
      email,
      businessType,
      otherBusinessType,
      companyName,
      businessInfo,
      message
    });

    await logActivity(request, 'contact_submission', name, { email, businessType, companyName });

    return NextResponse.json({ ok: true, entry }, { status: 201, headers: CORS_HEADERS });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save contact submission' }, { status: 500, headers: CORS_HEADERS });
  }
}
