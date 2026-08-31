import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { Faq } from "@/components/faq";
import { Process } from "@/components/process";
import { ServiceBlocks } from "@/components/service-blocks";
import { ServicesHero } from "@/components/services-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Ticker } from "@/components/ticker";
import { BreadcrumbLd, ServicesLd } from "@/components/jsonld";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Digital marketing, SEO, paid advertising, social media, design and video, plus websites and apps. One team across Islamabad and Manchester.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesLd />
      <BreadcrumbLd
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
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
