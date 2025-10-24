import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { BranchLocations } from "@/components/branch-locations";
import { ContactMap } from "@/components/contact-map";
import { SchemaOrg } from "@/components/schema-org";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema-data";

export const metadata: Metadata = {
  title: "Contact Us | SagalJet",
  description:
    "Get in touch with SagalJet. Visit our locations in New York, Brooklyn, and Queens or send us a message.",
  openGraph: {
    title: "Contact Us | SagalJet",
    description:
      "Get in touch with SagalJet. Visit our locations or send us a message.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | SagalJet",
    description:
      "Get in touch with SagalJet. Visit our locations or send us a message.",
  },
};

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://sagaljet.net" },
    { name: "Contact", url: "https://sagaljet.net/contact" },
  ]);

  return (
    <>
      {localBusinessSchema.map((schema, index) => (
        <SchemaOrg key={index} schema={schema} />
      ))}
      <SchemaOrg schema={breadcrumbs} />

      <div className="min-h-screen">
        <PageHeader
          imageSrc="https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg"
          title="Contact Us"
          description="Get in touch with our team. We're here to help with all your printing needs."
        />

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ContactForm />
            <BranchLocations />
          </div>

          <ContactMap />
        </div>
      </div>
    </>
  );
}
