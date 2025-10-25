import { NextResponse } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const client = await getMongoClient();
    const database = client.db('cvbuilder');
    const collection = database.collection('resumes');
    const { insertedId } = await collection.insertOne({ ...payload, updatedAt: new Date() });

    return NextResponse.json({ ok: true, cv: { ...payload, _id: insertedId } });
  } catch (error) {
    console.error('[cv:POST]', error);
    return NextResponse.json({ ok: false, error: 'Failed to save CV' }, { status: 500 });
  }
}
