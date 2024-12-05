import { NextResponse } from "next/server";
import { createOrder, verifyPayment } from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    const order = await createOrder(amount);
    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating payment order" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = await req.json();

    const isValid = verifyPayment(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // Here you would update your database with the payment status
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
