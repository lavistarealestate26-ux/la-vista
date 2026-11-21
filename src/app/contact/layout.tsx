import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact La Vista Real Estate | Umm Al Quwain Office",
  description:
    "Visit our office on King Faisal Road, Al Haditha, call +971 6 767 5181 or WhatsApp our advisors about buying, renting or selling in UAQ.",
  openGraph: {
    title: "Contact La Vista Real Estate | Umm Al Quwain Office",
    description:
      "Visit our office on King Faisal Road, Al Haditha, call +971 6 767 5181 or WhatsApp our advisors about buying, renting or selling in UAQ.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
