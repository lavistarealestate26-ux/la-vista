import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Property Valuation in Umm Al Quwain | La Vista",
  description:
    "Find out what your villa, apartment, land or warehouse in Umm Al Quwain is worth. Free, no-obligation valuation from advisors who know UAQ prices.",
  openGraph: {
    title: "Free Property Valuation in Umm Al Quwain | La Vista",
    description:
      "Find out what your villa, apartment, land or warehouse in Umm Al Quwain is worth. Free, no-obligation valuation from advisors who know UAQ prices.",
  },
};

export default function ValuationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
