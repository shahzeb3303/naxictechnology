import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { Faq } from "@/components/faq";
import { Process } from "@/components/process";
import { ServiceBlocks } from "@/components/service-blocks";
import { ServicesHero } from "@/components/services-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Ticker } from "@/components/ticker";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Web and mobile development, agentic AI, digital and social marketing, paid advertising, graphic design, and video production, from one team in Islamabad and Manchester.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <ServicesHero />
        <Ticker />
        <ServiceBlocks />
        <Process />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
