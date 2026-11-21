export interface LeadPayload {
  name: string;
  email?: string;
  phone?: string;
  purpose?: string;
  message?: string;
  propertyTitle?: string;
  location?: string;
  propertyType?: string;
  budget?: string;
}

const WEB3FORMS_ACCESS_KEY = "c25bfd8a-696c-4890-9fd0-15a71d0dbc0b";

export async function sendLead(payload: LeadPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Lead: ${payload.name} - ${payload.purpose || payload.propertyTitle || "Website Inquiry"}`,
        from_name: "La Vista Real Estate Portal",
        name: payload.name,
        email: payload.email || "Not Provided",
        phone: payload.phone || "Not Provided",
        service_or_interest: payload.purpose || "General Advisory",
        property_referenced: payload.propertyTitle || "General Portfolio",
        location: payload.location || "Umm Al Quwain / UAE",
        message: payload.message || "No custom note provided.",
        submitted_at: new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" }),
      }),
    });

    const data = await res.json();
    return { success: Boolean(data.success), message: data.message };
  } catch (error) {
    console.error("Failed to send lead to Web3Forms:", error);
    return { success: false, message: "Network error submitting form." };
  }
}
