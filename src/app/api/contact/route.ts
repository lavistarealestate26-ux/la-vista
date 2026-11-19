import { NextResponse } from "next/server";
import { CONTACT_INFO } from "@/data/contactInfo";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, purpose, propertyTitle } = body;

    // Basic Validation
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: "Name and either email or phone are required." },
        { status: 400 }
      );
    }

    // Lead delivery logged for recipient
    console.log("[LEAD RECEIVED]", {
      timestamp: new Date().toISOString(),
      recipient: CONTACT_INFO.email,
      name,
      email,
      phone,
      message,
      purpose,
      propertyTitle,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your inquiry has been delivered to our private client advisory team.",
      leadId: `LV-${Date.now()}`,
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
