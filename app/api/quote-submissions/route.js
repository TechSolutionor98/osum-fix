import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { logActivity } from '@/lib/activity-logger';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function GET() {
  try {
    const db = await getDb();
    const subs = await db.collection('quote_submissions').find().sort({ _id: -1 }).toArray();
    return NextResponse.json(subs.map(s => ({
      id: s._id?.toString?.() || s.id,
      firstName: s.firstName || '',
      lastName: s.lastName || '',
      email: s.email || '',
      phone: s.phone || '',
      service: s.service || '',
      location: s.location || '',
      propertyType: s.propertyType || '',
      couponCode: s.couponCode || '',
      details: s.details || '',
      createdAt: s.createdAt
    })), { headers: CORS_HEADERS });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read quote submissions' }, { status: 500, headers: CORS_HEADERS });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, location, propertyType, couponCode, details } = body || {};
    
    if (!firstName || !phone || !service || !location) {
      return NextResponse.json({ error: 'First Name, Phone, Service, and Location are required' }, { status: 400, headers: CORS_HEADERS });
    }

    const db = await getDb();
    const doc = {
      firstName,
      lastName: lastName || '',
      email: email || '',
      phone: phone || '',
      service: service || '',
      location: location || '',
      propertyType: propertyType || '',
      couponCode: couponCode || '',
      details: details || '',
      createdAt: new Date().toISOString()
    };
    
    const res = await db.collection('quote_submissions').insertOne(doc);
    const entry = { id: res.insertedId.toString(), ...doc };

    await logActivity(request, 'quote_submission', `${firstName} ${lastName}`.trim(), { service, location });

    return NextResponse.json({ ok: true, entry }, { status: 201, headers: CORS_HEADERS });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save quote submission' }, { status: 500, headers: CORS_HEADERS });
  }
}
