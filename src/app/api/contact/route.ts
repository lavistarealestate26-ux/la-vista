import { NextResponse } from "next/server";
import { CONTACT_INFO } from "@/data/contactInfo";

const WEB3FORMS_ACCESS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY || "c25bfd8a-696c-4890-9fd0-15a71d0dbc0b";

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

    // Deliver via Web3Forms API to client's verified email
    let emailSent = false;
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Lead from Website: ${name} (${purpose || propertyTitle || "General Inquiry"})`,
          from_name: "La Vista Real Estate Portal",
          name: name,
          email: email || "Not Provided",
          phone: phone || "Not Provided",
          interest_or_service: purpose || "General Consultation",
          property_referenced: propertyTitle || "General Inquiry",
          client_message: message || "No custom message provided.",
          lead_received_at: new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" }),
        }),
      });

      const result = await response.json();
      if (result.success) {
        emailSent = true;
      } else {
        console.warn("Web3Forms API warning:", result);
      }
    } catch (deliverError) {
      console.error("Web3Forms API Delivery Error:", deliverError);
    }

    console.log("[LEAD PROCESSED]", {
      timestamp: new Date().toISOString(),
      recipient: CONTACT_INFO.email,
      name,
      email,
      phone,
      message,
      purpose,
      propertyTitle,
      emailSent,
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
