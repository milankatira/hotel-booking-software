import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Booking from '@/models/Booking';

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();

    const booking = await Booking.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      checkIn: new Date(body.checkIn),
      checkOut: new Date(body.checkOut),
      guests: parseInt(body.guests),
      roomType: body.roomType,
    });

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}