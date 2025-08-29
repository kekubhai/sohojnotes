// filepath: e:\hackathon projects\sohojnotes\frontend\src\app\api\payments\route.ts
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { paymentId, newDate } = body;

    // Here you can use the razorpay instance and perform operations,
    // for example, updating payment details with Razorpay's API.
    // For now, we'll simply return the values received.

    return NextResponse.json({
      success: true,
      message: "Payment postponed successfully",
      data: { paymentId, newDate }
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to postpone payment",
        error: error.message
      },
      { status: 500 }
    );
  }
}
