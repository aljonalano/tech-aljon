import connectMongoDB from '@/libs/mongodb';
import Item from '@/models/items';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const {
    title,
    description,
    addedBy,
    emailAddress,
    ingredients,
    instructions,
  } = await request.json();
  await connectMongoDB();
  await Item.create({
    title,
    description,
    addedBy,
    emailAddress,
    ingredients,
    instructions,
  });
  return NextResponse.json({ message: 'Item Created' }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const items = await Item.find();
  return NextResponse.json({ items });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Item.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Item Deleted' }, { status: 200 });
}
